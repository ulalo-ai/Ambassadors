import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

// Google Apps Script Web App URL from environment variable
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL as string | undefined;

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  role: string;
  reason: string;
  experience: string;
  hear: string;
}

export const ApplicationFormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      role: '',
      reason: '',
      experience: '',
      hear: ''
    }
  });

  const onSubmit = async (data: FormData) => {
    // Validate that the Google Script URL is configured
    if (!GOOGLE_SCRIPT_URL) {
      toast.error("Configuration Error", {
        description: "Google Script URL is not configured. Please check your .env file has VITE_GOOGLE_SCRIPT_URL set.",
      });
      console.error("Missing VITE_GOOGLE_SCRIPT_URL environment variable");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Create form data for URL-encoded submission
      const formData = new URLSearchParams();
      formData.append('fullName', data.fullName);
      formData.append('email', data.email);
      formData.append('phone', data.phone || '');
      formData.append('location', data.location || '');
      formData.append('role', data.role);
      formData.append('reason', data.reason);
      formData.append('experience', data.experience || '');
      formData.append('hear', data.hear || '');
      formData.append('timestamp', new Date().toISOString());

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });

      // With no-cors mode, we can't read the response, so we assume success
      toast.success("Application submitted successfully!", {
        description: "We'll be in touch soon. Thank you for your interest!",
      });
      setIsSubmitted(true);
      reset();
      
    } catch (error) {
      console.error('Submission error:', error);
      toast.error("Failed to submit application", {
        description: "Please try again or contact support.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="w-full py-20 lg:py-32 bg-gray-50" id="apply">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[800px]">
          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#35e467]/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#35e467]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-primary mb-4">Application Submitted!</h3>
              <p className="text-muted-foreground mb-6">
                Thank you for your interest in becoming a Ulalo Ambassador. We've received your application and will review it shortly. You'll hear back from us within 5-7 business days.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="h-12 px-8"
              >
                Submit Another Application
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-20 lg:py-32 bg-gray-50" id="apply">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[800px]">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-primary mb-4">
            Ambassador Application
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to make an impact? Fill out the form below to apply to become a Ulalo Ambassador.
          </p>
        </div>

        <Card className="border-none shadow-lg bg-white">
          <CardContent className="p-8 md:p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="fullName" className="text-base">Full Name *</Label>
                  <Input 
                    id="fullName" 
                    placeholder="Jane Doe" 
                    className={`h-12 px-4 bg-gray-50 border-gray-200 focus:bg-white transition-colors ${errors.fullName ? 'border-red-500' : ''}`}
                    {...register('fullName', { required: 'Full name is required' })}
                  />
                  {errors.fullName && (
                    <p className="text-sm text-red-500">{errors.fullName.message}</p>
                  )}
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-base">Email Address *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="jane@example.com" 
                    className={`h-12 px-4 bg-gray-50 border-gray-200 focus:bg-white transition-colors ${errors.email ? 'border-red-500' : ''}`}
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-base">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+1 (555) 000-0000" 
                    className="h-12 px-4 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                    {...register('phone')}
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="location" className="text-base">Location</Label>
                  <Input 
                    id="location" 
                    placeholder="City, Country" 
                    className="h-12 px-4 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                    {...register('location')}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="role" className="text-base">What is your current role or profession? *</Label>
                <Controller
                  name="role"
                  control={control}
                  rules={{ required: 'Please select your role' }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className={`h-12 px-4 bg-gray-50 border-gray-200 focus:bg-white transition-colors ${errors.role ? 'border-red-500' : ''}`}>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Healthcare Professional">Healthcare Professional</SelectItem>
                        <SelectItem value="Patient Advocate">Patient Advocate</SelectItem>
                        <SelectItem value="Health Tech Professional">Health Tech Professional</SelectItem>
                        <SelectItem value="Student">Student</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.role && (
                  <p className="text-sm text-red-500">{errors.role.message}</p>
                )}
              </div>

              <div className="space-y-3">
                <Label htmlFor="reason" className="text-base">Why do you want to become a Ulalo Ambassador? *</Label>
                <Textarea 
                  id="reason" 
                  placeholder="Share your motivation..." 
                  className={`min-h-[120px] p-4 bg-gray-50 border-gray-200 focus:bg-white transition-colors resize-y ${errors.reason ? 'border-red-500' : ''}`}
                  {...register('reason', { required: 'Please share your motivation' })}
                />
                {errors.reason && (
                  <p className="text-sm text-red-500">{errors.reason.message}</p>
                )}
              </div>

              <div className="space-y-3">
                <Label htmlFor="experience" className="text-base">Tell us about your experience with patient advocacy, healthcare, or community outreach.</Label>
                <Textarea 
                  id="experience" 
                  placeholder="Share your experience..." 
                  className="min-h-[120px] p-4 bg-gray-50 border-gray-200 focus:bg-white transition-colors resize-y"
                  {...register('experience')}
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="hear" className="text-base">How did you hear about the Ulalo Ambassador Network?</Label>
                <Input 
                  id="hear" 
                  placeholder="Social media, friend, event..." 
                  className="h-12 px-4 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                  {...register('hear')}
                />
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg bg-[#35e467] hover:bg-[#2dd25b] text-[#384756] font-medium shadow-sm hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Submit Application'
                  )}
                </Button>
              </div>

            </form>
          </CardContent>
        </Card>

      </div>
    </section>
  );
};
