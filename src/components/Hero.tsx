// src/components/Hero.tsx
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import heroVideo from "@/assets/gifs/meal-animation.webm";
import lucyLogo from "@/assets/images/lucy-logo.png";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();

  // 🔹 Renderiza o vídeo no mobile após idle (performance)
  const [showVideo, setShowVideo] = useState(!isMobile);

  useEffect(() => {
    if (!isMobile) return;

    const timeout = setTimeout(() => {
      setShowVideo(true);
    }, 800);

    return () => clearTimeout(timeout);
  }, [isMobile]);

  return (
    <section className="relative overflow-hidden pt-24 pb-28 bg-gradient-to-b from-white via-purple-50/40 to-white">
      {/* MOBILE HOME BUTTON */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="lg:hidden fixed top-4 left-4 z-[999] bg-white/90 backdrop-blur-md border border-purple-200 shadow-md px-3 py-2 rounded-xl"
        aria-label="Voltar para o topo"
      >
        <img src={lucyLogo} className="h-6 w-auto" alt="LucyFit" />
      </button>

      {/* BLOBS — DESKTOP ONLY */}
      {!isMobile && (
        <>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 0.55 }}
            transition={{ duration: 1 }}
            className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-purple-400/30 rounded-full blur-[120px]"
          />
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 0.45 }}
            transition={{ duration: 1.2 }}
            className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-pink-300/30 rounded-full blur-[120px]"
          />
        </>
      )}

      <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* TEXTO */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 text-purple-700 px-4 py-1 text-xs font-medium shadow-sm mx-auto lg:mx-0">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            Experiência premium em alimentação e treinos
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            A forma mais simples de organizar sua alimentação, treinos e
            evolução é com a{" "}
            <span className="inline-flex items-center px-4 py-2 bg-white rounded-2xl shadow-md">
              <img src={lucyLogo} className="h-9" alt="LucyFit" />
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            Monitore treinos, acompanhe alimentação e alcance seus objetivos com
            tecnologia de ponta direto no seu WhatsApp.
          </p>

          {/* MOBILE VIDEO */}
          {isMobile && showVideo && (
            <div className="pt-4">
              <div className="mx-auto max-w-md rounded-3xl bg-white border border-purple-200 shadow-xl overflow-hidden">
                <video
                  src={heroVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full object-cover"
                />
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="flex justify-center lg:justify-start pt-4">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="#pricing">
                Assinar agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* MÉTRICAS */}
          <div className="flex justify-center lg:justify-start gap-8 pt-6 text-sm text-gray-600">
            <div className="text-center">
              <strong className="block text-purple-600 text-lg">+2.000</strong>
              pessoas já usaram
            </div>
            <div className="text-center">
              <strong className="block text-purple-600 text-lg">+50 mil</strong>
              usuários ativos
            </div>
            <div className="text-center">
              <strong className="block text-purple-600 text-lg">+200kg</strong>
              eliminados
            </div>
          </div>
        </div>

        {/* DESKTOP VIDEO */}
        {!isMobile && (
          <div className="hidden lg:flex justify-center">
            <div className="rounded-[32px] bg-white border border-purple-200 shadow-2xl overflow-hidden max-w-xl">
              <video
                src={heroVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
