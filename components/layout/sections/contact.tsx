"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Building2, Clock, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string(),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "Web Development",
      message: "",
    },
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, subject, message } = values;
    console.log(values);

    const mailToLink = `mailto:leomirandadev@gmail.com?subject=${subject}&body=Hello I am ${firstName} ${lastName}, my Email is ${email}. %0D%0A${message}`;

    window.location.href = mailToLink;
  }

  return (
    <section id="contact" className="container py-24 sm:py-32 relative" ref={containerRef}>
      {/* Background Elements */}
      <motion.div
        style={{ opacity }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        style={{ opacity }}
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />

      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <AnimatedSection delay={0.2}>
                <h2 className="text-lg text-primary tracking-wider">
                  Contact
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Connect With Us
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <p className="text-muted-foreground lg:w-5/6">
                  Have questions or want to learn more about our educational games? We're here to help! 
                  Reach out to our team for information about our products, partnership opportunities, 
                  or technical support.
                </p>
              </AnimatedSection>
            </div>

            <div className="flex flex-col gap-6">
              <AnimatedSection delay={0.5}>
                <div>
                  <div className="flex gap-2 mb-1">
                    <Building2 />
                    <div className="font-bold">Find us</div>
                  </div>
                  <div>Bengaluru, Karnataka 560066, IN</div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.6}>
                <div>
                  <div className="flex gap-2 mb-1">
                    <Phone />
                    <div className="font-bold">Call us</div>
                  </div>
                  <div>9156906721</div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.7}>
                <div>
                  <div className="flex gap-2">
                    <Clock />
                    <div className="font-bold">Visit us</div>
                  </div>
                  <div>
                    <div>Monday - Friday</div>
                    <div>8AM - 4PM</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          <AnimatedSection delay={0.4} direction="right">
            <Card className="backdrop-blur-sm bg-card/30">
              <CardContent className="pt-6">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="grid w-full gap-4"
                  >
                    <div className="flex flex-col md:!flex-row gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="first name..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="last name..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your@email.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="General Inquiry">
                                General Inquiry
                              </SelectItem>
                              <SelectItem value="Technical Support">
                                Technical Support
                              </SelectItem>
                              <SelectItem value="Partnership">
                                Partnership
                              </SelectItem>
                              <SelectItem value="Custom Integration">
                                Custom Integration
                              </SelectItem>
                              <SelectItem value="Pricing">
                                Pricing
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              rows={5}
                              placeholder="Your message..."
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      className="mt-4 bg-card hover:bg-card/80 text-foreground border border-muted/20 px-8 py-6 h-auto text-lg font-medium rounded-lg"
                      type="submit"
                    >
                      Send message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
