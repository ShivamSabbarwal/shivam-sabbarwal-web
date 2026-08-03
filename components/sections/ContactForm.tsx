"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { LuSend, LuLoader, LuCircleCheck } from "react-icons/lu";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sendContactEmail } from "@/app/actions/contact";

const INTENT_OPTIONS = [
  { value: "senior-engineering", label: "Senior engineering role" },
  { value: "engineering-leadership", label: "Engineering leadership role" },
  { value: "founder-product", label: "Founder / product conversation" },
  { value: "something-else", label: "Something else" },
] as const;

const schema = z.object({
  firstName: z.string().min(2, "Please enter your first name"),
  lastName: z.string().min(2, "Please enter your last name"),
  email: z.string().email("That email address doesn't look right"),
  phone: z.string().optional(),
  intent: z.enum(
    ["senior-engineering", "engineering-leadership", "founder-product", "something-else"],
    { error: "Please choose what this is about" },
  ),
  message: z.string().min(10, "Please add a little more detail"),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { intent: undefined },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await sendContactEmail(data);
      setSubmitted(true);
      reset();
      toast.success("Message sent. I'll get back to you soon.");
    } catch {
      toast.error("That didn't send. Please try again.");
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center space-y-4 py-12 text-center"
      >
        <div className="bg-primary/15 text-primary-strong flex h-12 w-12 items-center justify-center rounded-md">
          <LuCircleCheck className="h-6 w-6" />
        </div>
        <p className="hud-label text-primary-strong">Message received</p>
        <h5 className="font-heading text-2xl tracking-tight">Thanks for reaching out</h5>
        <p className="text-muted-foreground text-[15px]">
          I&apos;ll read your message and get back to you soon.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-2">
          Send another
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <Label htmlFor="firstName">First name</Label>
          <Input
            id="firstName"
            placeholder="First name"
            {...register("firstName")}
            className={errors.firstName ? "border-destructive" : ""}
          />
          {errors.firstName && (
            <p className="text-destructive text-xs">{errors.firstName.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="lastName">Last name</Label>
          <Input
            id="lastName"
            placeholder="Last name"
            {...register("lastName")}
            className={errors.lastName ? "border-destructive" : ""}
          />
          {errors.lastName && <p className="text-destructive text-xs">{errors.lastName.message}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            {...register("email")}
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && <p className="text-destructive text-xs">{errors.email.message}</p>}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="phone">
            Phone <span className="text-muted-foreground font-normal">(optional)</span>
          </Label>
          <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" {...register("phone")} />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="intent">What is this about?</Label>
        <Controller
          control={control}
          name="intent"
          render={({ field }) => (
            <Select
              items={INTENT_OPTIONS}
              value={field.value ?? null}
              onValueChange={(value) => field.onChange(value)}
            >
              <SelectTrigger
                id="intent"
                ref={field.ref}
                onBlur={field.onBlur}
                className={errors.intent ? "border-destructive" : ""}
              >
                <SelectValue placeholder="Choose one" />
              </SelectTrigger>
              <SelectContent>
                {INTENT_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.intent && <p className="text-destructive text-xs">{errors.intent.message}</p>}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="What are you working through?"
          rows={5}
          {...register("message")}
          className={errors.message ? "border-destructive" : ""}
        />
        {errors.message && <p className="text-destructive text-xs">{errors.message.message}</p>}
      </div>

      <Button type="submit" disabled={isSubmitting} className="h-12 w-full">
        {isSubmitting ? (
          <>
            <LuLoader className="mr-2 h-4 w-4 animate-spin" />
            Sending
          </>
        ) : (
          <>
            <LuSend className="mr-2 h-4 w-4" />
            Send message
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
