"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { hero } from "@/lib/images";
import Image from "next/image";
export enum phoneNumber {
  INDIA = "+91-7013623365",
  DUBAI = "+971-56-4541395",
}
enum resumePath {
  AE = "/ASAD_AHMED_SIDDIQUI.pdf",
  IN = "/asad_siddiqui.pdf",
}
const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [phone, setPhone] = useState<string>("Loading...");
  const [resume, setResume] = useState<string>("");
  const titles = [
    "Frontend Developer",
    "React Specialist",
    "SaaS Builder",
    "Problem Solver",
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex <= currentTitle.length) {
        setDisplayText(currentTitle.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentIndex]);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipinfo.io/json");
        const data = await res.json();
        const code = data?.country || "";
        setCountryCode(code);
        localStorage.setItem("countryCode", code);
        // Map numbers by country
        const numbers: Record<string, string> = {
          IN: phoneNumber.INDIA, // India
          AE: phoneNumber.DUBAI, // UAE
          default: phoneNumber.DUBAI,
        };
        setResume(resumePath[code as keyof typeof resumePath] || resumePath.AE);
        setPhone(numbers[code] || numbers.default);
      } catch (error) {
        console.error("Error fetching location:", error);
        setCountryCode("AE");
        setPhone(phoneNumber.DUBAI); // fallback
      }
    };
    if (!countryCode) fetchLocation();
  }, [countryCode]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleDownloadResume = async () => {
    try {
      const response = await fetch(resume);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Asad_Ahmed_Siddiqui_Resume.pdf"; // keep PDF extension
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        toast.success("Resume downloaded successfully!");
      } else {
        throw new Error("Download failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to download resume. Please try again.");
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          className="absolute inset-0 bg-cover bg-center opacity-30"
          src={hero}
          alt="heroBg"
        />
        {/* <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${hero})` }}
        /> */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-border mb-8"
          >
            <MapPin size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">
              Based in Dubai, UAE
            </span>
          </motion.div> */}

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6"
          >
            Hi, I'm <span className="text-gradient-primary">Asad Ahmed</span>
            <br />
            <span className="text-muted-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Fullstack Developer
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 px-2"
          >
            Crafting scalable, pixel-perfect web experiences with React.js,
            Next.js, and modern JavaScript. 3+ years of building B2B SaaS
            platforms that users love.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button
              onClick={handleDownloadResume}
              variant="heroOutline"
              size="lg"
              className="w-full sm:w-auto"
            >
              {/* Download Resume  */}
              <Download size={16} className="text-primary" />
              <a>Download Resume</a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-4"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/asad851",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/asad-ahmed-siddiqui-7b875977/",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:siddiquiasad851@gmail.com",
                label: "Email",
              },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-effect border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
