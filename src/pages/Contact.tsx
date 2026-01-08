import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, MapPin, Phone, Send } from "lucide-react";

import SEOHead from "@/components/SEOHead";
import {
  AnimatedBackground,
  TextReveal,
  ScrollReveal,
} from "@/components/animations";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
      reset();
    } catch {
      // handle error silently here; could add toast
    }
  };

  const officeAddress =
    "91springboard, D-107, D Block, Sector 2, Noida, Uttar Pradesh 201301";

  return (
    <>
      <SEOHead
        title="Contact Hagerstone | Office Design & Build Company Delhi NCR"
        description="Contact Hagerstone International for office design & build, modern office interior design, MEP design, and interior fit out projects in Delhi, Noida, Gurugram and across India."
        canonical="https://hagerstone.com/contact"
        keywords="contact office design and build company, office interior design enquiry, mep design consultants delhi, interior fit out company contact, commercial interior design firm delhi ncr"
      />

      <div className="min-h-screen bg-background text-foreground">
        {/* Hero */}
        <AnimatedBackground
          variant="aurora"
          className="relative py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative max-w-5xl mx-auto text-center">
            <TextReveal
              variant="words"
              className="text-4xl md:text-5xl font-bold mb-4 text-gold"
            >
              Contact Our Office Design & Build Team
            </TextReveal>
            <ScrollReveal variant="slide-up" delay={0.2}>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Share your requirements for{" "}
                <span className="font-semibold">
                  modern office interior design
                </span>
                ,{" "}
                <span className="font-semibold">
                  office workspace design
                </span>
                ,{" "}
                <span className="font-semibold">MEP design</span>, or{" "}
                <span className="font-semibold">interior fit out</span>{" "}
                projects. The Hagerstone team will get back with a tailored
                design &amp; build proposal.
              </p>
            </ScrollReveal>
          </div>
        </AnimatedBackground>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
            {/* Contact Form */}
            <Card className="lg:col-span-2 shadow-luxury">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl">
                  Send an Enquiry
                </CardTitle>
                <p className="text-muted-foreground">
                  Tell us about your office design &amp; build requirement and
                  our team will connect within one business day.
                </p>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Full Name
                      </label>
                      <Input
                        placeholder="Your name"
                        {...register("name", { required: true })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Company Name
                      </label>
                      <Input
                        placeholder="Organization / Brand"
                        {...register("company")}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="you@company.com"
                        {...register("email", { required: true })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Phone
                      </label>
                      <Input
                        placeholder="+91-XXXXXXXXXX"
                        {...register("phone")}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Project Type
                    </label>
                    <Input
                      placeholder="Office design & build, MEP design, interior fit out, etc."
                      {...register("projectType")}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Project Location
                    </label>
                    <Input
                      placeholder="City, State"
                      {...register("location")}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Project Details
                    </label>
                    <Textarea
                      rows={5}
                      placeholder="Area in sq. ft., type of workspace, timeline, budget range, and any specific modern office interior design ideas you have."
                      {...register("message", { required: true })}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Submit Enquiry
                      </>
                    )}
                  </Button>

                  {submitted && (
                    <p className="text-sm text-green-600 mt-2">
                      Thank you. The team will contact you shortly.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Contact Details / Side Panel */}
            <div className="space-y-6">
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle>Office &amp; Service Areas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Head Office</p>
                      <p className="text-sm text-muted-foreground">
                        {officeAddress}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Call</p>
                      <a
                        href="tel:+918882979328"
                        className="text-sm text-accent hover:underline"
                      >
                        +91 88829 79328
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:info@hagerstone.com"
                        className="text-sm text-accent hover:underline"
                      >
                        info@hagerstone.com
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">
                      Key Services
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Office design &amp; build • Modern office interior design
                      • Office workspace design • MEP design &amp; consultants •
                      Interior fit out company services • Commercial interior
                      design.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">
                      Service Locations
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Delhi • Noida • Gurugram • Greater Noida • Faridabad •
                      25+ cities across India.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-hero text-primary-foreground border-0 shadow-luxury">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    Need Immediate Assistance?
                  </h3>
                  <p className="mb-6 text-primary-foreground/90">
                    Call directly to discuss an upcoming office design &amp;
                    build, MEP, or interior fit out project.
                  </p>
                  <Button
                    asChild
                    variant="secondary"
                    size="lg"
                    className="bg-gold text-gold-foreground hover:bg-gold/90 shadow-luxury hover:scale-105 transition-all duration-300"
                  >
                    <a href="tel:+918882979328">
                      <Phone className="h-5 w-5 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
