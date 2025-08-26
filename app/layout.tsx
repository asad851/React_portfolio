import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asad Ahmed Siddiqui - Frontend Developer",
  description: "Innovative Frontend Developer with expertise in React.js, Next.js, and modern JavaScript frameworks. Building scalable, responsive web applications.",
  keywords: ["Frontend Developer", "React.js", "Next.js", "JavaScript", "Web Development", "UI/UX"],
  authors: [{ name: "Asad Ahmed Siddiqui" }],
  openGraph: {
    title: "Asad Ahmed Siddiqui - Frontend Developer",
    description: "Innovative Frontend Developer with expertise in React.js, Next.js, and modern JavaScript frameworks.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}