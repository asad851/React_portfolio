"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";
import { toast } from "sonner";
import { phoneNumber } from "./Hero";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phone, setPhone] = useState<string>("Loading...");
  const [country, setCountry] = useState<string>("Loading...");
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const countryCode =
    typeof window !== "undefined" ? localStorage.getItem("countryCode") : null;
  useEffect(() => {
    setCountry(countryCode === "IN" ? "India" : "Dubai, UAE");
    setPhone(countryCode === "IN" ? phoneNumber.INDIA : phoneNumber.DUBAI);
  }, [countryCode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const errorData = await response.json();
        toast.error(
          errorData.error || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "siddiquiasad851@gmail.com",
      href: "mailto:siddiquiasad851@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: phone,
      href: `tel:${phone}`,
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: country,
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/asad-ahmed-siddiqui-7b875977/",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/asad851/",
    },
    // {
    //   icon: <Twitter className="h-5 w-5" />,
    //   label: "Twitter",
    //   href: "https://github.com/asad851/",
    // },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="section-container" ref={ref}>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary font-medium mb-4 block"
          >
            Get in Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Let's Work <span className="text-gradient-primary">Together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-6 sm:space-y-8">
              <Card className="border-slate-200 dark:border-slate-700">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl text-slate-900 dark:text-white">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-gradient-dark hover:glow-primary transition-colors group"
                    >
                      <div className="flex items-center justify-center w-10 h-10 bg-gradient-primary hover:glow-primary rounded-lg  group-hover:scale-110 transition-transform">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm text-muted-foreground">
                          {info.label}
                        </div>
                        <div className="font-medium text-sm sm:text-base truncate">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-slate-200 dark:border-slate-700">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl text-slate-900 dark:text-white">
                    Follow Me
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="flex gap-4">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        className="flex items-center justify-center w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:hover:text-white hover:bg-gradient-primary dark:text-white transition-all hover:scale-110"
                        title={link.label}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="p-4 sm:p-6 border-slate-200  dark:border-slate-700 rounded-2xl">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Real-Time Email Response
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Send me a message through the form and receive an instant
                  auto-reply confirmation. I typically respond to all inquiries
                  within 24 hours.
                </p>
              </Card>
            </div>
          </motion.div>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-full"
          >
            <Card className="border-slate-200 dark:border-slate-700 h-full">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl text-slate-900 dark:text-white">
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                        Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        required
                        className="border-slate-200 dark:border-slate-700"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="border-slate-200 dark:border-slate-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                      Subject *
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="border-slate-200 dark:border-slate-700"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      required
                      className="border-slate-200 dark:border-slate-700 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size={"lg"}
                    disabled={isSubmitting}
                    variant="hero"
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
