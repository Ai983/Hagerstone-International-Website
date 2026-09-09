import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { submitLead } from "@/lib/leads";
import { X } from "lucide-react";

const formSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email is too long"),
  number: z.string().trim().min(10, "WhatsApp number must be at least 10 digits").max(15, "Number is too long").regex(/^[0-9+\s()-]+$/, "Invalid phone number format"),
});

type FormData = z.infer<typeof formSchema>;

// Popup timing.
//
// This used to reopen every 7 seconds, forever, until the visitor either
// submitted or left — which is what most of them did. It now appears once per
// session on an intent signal, and a dismissal is respected for two weeks.
const FALLBACK_DELAY = 20000; // shown after 20s if no intent signal fires first
const SCROLL_TRIGGER_RATIO = 0.5; // half the page read
const SUBMITTED_KEY = "leadFormSubmitted";
const DISMISSED_KEY = "leadFormDismissed";
const SESSION_SHOWN_KEY = "leadFormShownThisSession";
const SUBMITTED_EXPIRY_HOURS = 24 * 30; // don't re-ask someone who converted
const DISMISSED_EXPIRY_HOURS = 24 * 14; // respect a "no" for two weeks

/** True when a timestamped localStorage flag is still within its window. */
const isSuppressed = (key: string, expiryHours: number): boolean => {
  try {
    const stored = localStorage.getItem(key);
    if (!stored) return false;
    const { timestamp } = JSON.parse(stored) as { timestamp: number };
    return (Date.now() - timestamp) / (1000 * 60 * 60) < expiryHours;
  } catch {
    return false; // corrupt or unavailable storage shouldn't block the popup
  }
};

const stamp = (key: string) => {
  try {
    localStorage.setItem(key, JSON.stringify({ timestamp: Date.now() }));
  } catch {
    /* private mode — nothing to persist, popup simply reappears next session */
  }
};

const LeadPopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    // Never interrupt someone who already converted or already said no.
    if (isSuppressed(SUBMITTED_KEY, SUBMITTED_EXPIRY_HOURS)) return;
    if (isSuppressed(DISMISSED_KEY, DISMISSED_EXPIRY_HOURS)) return;
    if (sessionStorage.getItem(SESSION_SHOWN_KEY)) return;

    let done = false;

    const show = () => {
      if (done) return;
      done = true;
      try {
        sessionStorage.setItem(SESSION_SHOWN_KEY, "1");
      } catch {
        /* ignore */
      }
      setIsOpen(true);
      cleanup();
    };

    // Desktop: the cursor leaving through the top of the viewport is the
    // classic "about to close the tab" signal.
    const onMouseOut = (event: MouseEvent) => {
      if (event.clientY <= 0 && !event.relatedTarget) show();
    };

    // Mobile has no exit intent, so use engagement instead — half the page read
    // means they are interested enough to be worth asking.
    const onScroll = () => {
      const scrollable = document.body.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      if (window.scrollY / scrollable >= SCROLL_TRIGGER_RATIO) show();
    };

    const timer = setTimeout(show, FALLBACK_DELAY);

    function cleanup() {
      clearTimeout(timer);
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("scroll", onScroll);
    }

    document.addEventListener("mouseout", onMouseOut);
    window.addEventListener("scroll", onScroll, { passive: true });

    return cleanup;
  }, []);

  /** Dismissal is a real answer — record it and stop asking for two weeks. */
  const handleClose = () => {
    setIsOpen(false);
    stamp(DISMISSED_KEY);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Shared with the contact form and every future calculator, so the
    // Supabase credentials, attribution and WhatsApp acknowledgement all live
    // in one place instead of being duplicated here.
    const result = await submitLead({
      name: data.name,
      email: data.email,
      phone: data.number,
      sourceType: "popup",
    });

    if (result.ok) {
      toast({
        title: "Thank you!",
        description: "We've received your request and will be in touch shortly.",
      });
      stamp(SUBMITTED_KEY);
      setIsOpen(false);
      reset();
    } else {
      toast({
        title: "Couldn't send that",
        description: "Please try again, or call us on +91 88829 79328.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] fixed bottom-4 right-4 top-auto left-auto translate-x-0 translate-y-0 data-[state=open]:slide-in-from-bottom-4 data-[state=open]:slide-in-from-right-4 sm:bottom-4 sm:right-4 bg-card border-2 border-accent">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        
        <DialogHeader>
          <DialogTitle className="text-foreground">Get in Touch</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill out the form below and we'll reach out to you soon.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">Name</Label>
            <Input
              id="name"
              placeholder="Your name"
              {...register("name")}
              className={`bg-background text-foreground border-input focus:border-accent ${errors.name ? "border-destructive" : ""}`}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              {...register("email")}
              className={`bg-background text-foreground border-input focus:border-accent ${errors.email ? "border-destructive" : ""}`}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="number" className="text-foreground">WhatsApp Number</Label>
            <Input
              id="number"
              type="tel"
              placeholder="+1234567890"
              {...register("number")}
              className={`bg-background text-foreground border-input focus:border-accent ${errors.number ? "border-destructive" : ""}`}
            />
            {errors.number && (
              <p className="text-sm text-destructive">{errors.number.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadPopupForm;
