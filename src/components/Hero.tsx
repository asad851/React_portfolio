import { ArrowRight, Download, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 lg:pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-w-full"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse animation-delay-500"></div>
      </div>

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 animate-fade-in text-center lg:text-left">
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="mb-4 bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900/30 dark:to-teal-900/30 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 hover:scale-105 transition-transform"
              >
                Available for Frontend Opportunities
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-slate-900 dark:text-white">Hi, I'm </span>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent animate-pulse">
                  Asad Ahmed
                </span>
                <br />
                <span className="text-slate-700 dark:text-slate-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl relative">
                  Frontend Developer
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-full opacity-30"></div>
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Innovative Frontend Developer with expertise in React.js,
                Next.js, and modern JavaScript frameworks. I build scalable,
                responsive web applications that enhance user experiences in B2B
                SaaS platforms.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 hover:from-blue-700 hover:via-purple-700 hover:to-teal-700 text-white shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden group"
                onClick={() => scrollToSection("#contact")}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 z-50 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-500 transition-all hover:scale-105 hover:-translate-y-1 hover:shadow-lg cursor-[pointer!important] "
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-xs sm:text-sm">
                  siddiquiasad851@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg">
                  <Phone className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                </div>
                <span className="text-xs sm:text-sm">+91 7013623365</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative">
              {/* Animated background circles */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="absolute -inset-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20 animate-pulse animation-delay-1000"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl opacity-10 animate-pulse animation-delay-500"></div>

              {/* Profile image placeholder with modern design */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-100 via-purple-50 to-teal-100 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-teal-900/20 rounded-3xl border-4 border-white dark:border-slate-700 shadow-2xl overflow-hidden group hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-teal-600/10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent group-hover:via-white/10 transition-all duration-500"></div>
                <div className="flex items-center justify-center h-full">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                    AS
                  </div>
                </div>

                {/* Floating tech badges */}
                <div className="absolute top-4 left-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl p-2 sm:p-3 shadow-xl animate-float border border-blue-200 dark:border-blue-800">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                    React
                  </span>
                </div>
                <div className="absolute top-2 right-4  bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl p-2 sm:p-3 shadow-xl animate-float animation-delay-500 border border-teal-200 dark:border-teal-800">
                  <span className="text-xs font-bold text-teal-600 dark:text-teal-400">
                    Next.js
                  </span>
                </div>
                <div className="absolute bottom-2 left-4  bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl p-2 sm:p-3 shadow-xl animate-float animation-delay-1000 border border-purple-200 dark:border-purple-800">
                  <span className="text-xs font-bold text-purple-600 dark:text-purple-400">
                    Express.js
                  </span>
                </div>
                <div className="absolute bottom-2 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl p-2 sm:p-3 shadow-xl animate-float animation-delay-1500 border border-orange-200 dark:border-orange-800">
                  <span className="text-xs font-bold text-green-600 dark:text-green-400">
                    Node.js
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
