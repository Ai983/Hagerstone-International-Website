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
import { X } from "lucide-react";

const formSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email is too long"),
  number: z.string().trim().min(10, "WhatsApp number must be at least 10 digits").max(15, "Number is too long").regex(/^[0-9+\s()-]+$/, "Invalid phone number format"),
});

type FormData = z.infer<typeof formSchema>;

const INITIAL_DELAY = 5000; // 5 seconds
const REOPEN_DELAY = 7000; // 7 seconds (between 5-10)
const SESSION_KEY = "leadFormSubmitted";
const N8N_WEBHOOK_URL = "https://YOUR_N8N_WEBHOOK_URL"; // Replace with actual URL

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
    // Check if form was already submitted in this session
    const hasSubmitted = sessionStorage.getItem(SESSION_KEY);
    if (hasSubmitted) return;

    // Initial popup after 5 seconds
    const initialTimer = setTimeout(() => {
      setIsOpen(true);
    }, INITIAL_DELAY);

    return () => clearTimeout(initialTimer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);

    // Check if already submitted
    const hasSubmitted = sessionStorage.getItem(SESSION_KEY);
    if (hasSubmitted) return;

    // Reopen after 5-10 seconds if not submitted
    setTimeout(() => {
      setIsOpen(true);
    }, REOPEN_DELAY);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit");

      // Mark as submitted in session
      sessionStorage.setItem(SESSION_KEY, "true");

      // Close popup
      setIsOpen(false);

      // Show success message
      toast({
        title: "Thank you!",
        description: "We'll get in touch with you soon.",
      });

      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] fixed bottom-4 right-4 top-auto left-auto translate-x-0 translate-y-0 data-[state=open]:slide-in-from-bottom-4 data-[state=open]:slide-in-from-right-4 sm:bottom-4 sm:right-4">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        
        <DialogHeader>
          <DialogTitle>Get in Touch</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll reach out to you soon.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Your name"
              {...register("name")}
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              {...register("email")}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="number">WhatsApp Number</Label>
            <Input
              id="number"
              type="tel"
              placeholder="+1234567890"
              {...register("number")}
              className={errors.number ? "border-destructive" : ""}
            />
            {errors.number && (
              <p className="text-sm text-destructive">{errors.number.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadPopupForm;
