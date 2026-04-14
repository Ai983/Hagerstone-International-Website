import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";
import { toast } from "sonner";
import { Loader2, Phone, Mail, User, Building, CheckCircle2, RefreshCw } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface LeadCaptureOTPProps {
  onVerified: (data: { name: string; email: string; phone: string; company: string }) => void;
  initialData?: {
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
  };
}

const LeadCaptureOTP: React.FC<LeadCaptureOTPProps> = ({ onVerified, initialData }) => {
  const [name, setName] = useState(initialData?.name || "");
  const [email, setEmail] = useState(initialData?.email || "");
  const [phone, setPhone] = useState(initialData?.phone || "");
  const [company, setCompany] = useState(initialData?.company || "");
  
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);

  // Resend timer countdown
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const validatePhone = (phoneNum: string): boolean => {
    const clean = phoneNum.replace(/\D/g, '');
    return /^[6-9]\d{9}$/.test(clean) || /^91[6-9]\d{9}$/.test(clean);
  };

  const validateEmail = (emailStr: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr);
  };

  const sendOtp = async () => {
    if (!phone) {
      toast.error("Please enter your phone number");
      return;
    }

    if (!validatePhone(phone)) {
      toast.error("Please enter a valid Indian phone number (10 digits starting with 6-9)");
      return;
    }

    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (email && !validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-otp', {
        body: { phone }
      });

      if (error) throw error;

      if (data?.success) {
        setOtpSent(true);
        setResendTimer(60);
        toast.success(`OTP sent to ****${data.phone}`);
      } else {
        throw new Error(data?.error || 'Failed to send OTP');
      }
    } catch (error) {
      console.error('Send OTP error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    if (otp.length !== 6) {
      toast.error("Please enter the complete 6-digit OTP");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('verify-otp', {
        body: { 
          phone, 
          otp,
          name,
          email,
          company
        }
      });

      if (error) throw error;

      if (data?.success) {
        setVerified(true);
        toast.success("Phone verified successfully!");
        onVerified({ name, email, phone, company });
      } else {
        toast.error(data?.error || 'Verification failed');
        if (data?.attemptsLeft !== undefined) {
          toast.info(`${data.attemptsLeft} attempts remaining`);
        }
      }
    } catch (error) {
      console.error('Verify OTP error:', error);
      toast.error(error instanceof Error ? error.message : 'Verification failed');
    } finally {
      setLoading(false);
    }
  };

  const resendOtp = async () => {
    if (resendTimer > 0) return;
    setOtp("");
    await sendOtp();
  };

  if (verified) {
    return (
      <Card className="border-accent/30 bg-accent/5">
        <CardContent className="p-6 text-center">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="font-playfair text-xl font-semibold mb-2">Phone Verified!</h3>
          <p className="text-muted-foreground">
            Thank you, {name}. Your results are ready.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardContent className="p-6 md:p-8 space-y-5">
        <div className="text-center mb-6">
          <h2 className="font-playfair text-xl md:text-2xl font-semibold mb-2">
            Almost There!
          </h2>
          <p className="text-muted-foreground">
            Verify your details to unlock your personalized AI style recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Your Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="pl-10"
              disabled={otpSent}
            />
          </div>
          
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10"
              disabled={otpSent}
            />
          </div>

          <div className="relative md:col-span-2">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <div className="flex gap-2">
              <Input
                placeholder="Phone Number * (10 digits)"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                className="pl-10 flex-1"
                disabled={otpSent}
                maxLength={10}
              />
              {!otpSent && (
                <Button 
                  onClick={sendOtp} 
                  disabled={loading || !phone || !name}
                  className="min-w-[120px]"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    "Send OTP"
                  )}
                </Button>
              )}
            </div>
          </div>

          <div className="relative md:col-span-2">
            <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Company Name (Optional)"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="pl-10"
              disabled={otpSent}
            />
          </div>
        </div>

        {otpSent && !verified && (
          <div className="space-y-4 pt-4 border-t">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Enter the 6-digit OTP
              </p>
              <p className="text-xs text-accent font-medium mb-3 bg-accent/10 rounded-md py-2 px-3 inline-block">
                📱 Test OTP: <strong>123456</strong>
              </p>
              <div className="flex justify-center">
                <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                onClick={verifyOtp} 
                disabled={loading || otp.length !== 6}
                className="min-w-[140px]"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  "Verify OTP"
                )}
              </Button>
              
              <Button
                variant="outline"
                onClick={resendOtp}
                disabled={resendTimer > 0 || loading}
                className="gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                {resendTimer > 0 ? `Resend in ${resendTimer}s` : "Resend OTP"}
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LeadCaptureOTP;
