// src/components/Testimonials.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

import depo1 from "@/assets/videos/depoimentolucy1.mp4";
import depo2 from "@/assets/videos/depoimentolucy2.mp4";
import depo3 from "@/assets/videos/depoimentolucy3.mp4";
import depo4 from "@/assets/videos/depoimentolucy4.mp4";

const videos = [depo1, depo2, depo3, depo4];

export default function Testimonials() {
  const isMobile = useIsMobile();
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  const next = () =>
    setActive((prev) => (prev === videos.length - 1 ? 0 : prev + 1));

  return (
    <section
      id="testimonials"
      className="relative py-32 bg-gradient-to-b from-purple-50/40 to-white overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl px-6 relative">
        {/* CARD PRETO — MANTIDO */}
        <div className="relative flex justify-center mb-[-180px] z-10">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-5xl rounded-3xl bg-black px-10 pt-14 pb-40 text-center shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Não acredite somente em nós — veja o que nossos usuários dizem sobre nós.
            </h2>

            <p className="mt-5 text-gray-300 text-base md:text-lg max-w-xl mx-auto">
              Pessoas reais, resultados reais, experiências reais.
            </p>
          </motion.div>
        </div>

        {/* STACKED VIDEO CAROUSEL */}
        <div className="relative z-20 mt-20 flex items-center justify-center h-[420px]">
          {videos.map((video, index) => {
            const offset = index - active;

            if (Math.abs(offset) > 1 && !isMobile) return null;

            return (
              <div
                key={index}
                className="absolute transition-all duration-500 ease-out"
                style={{
                  transform: `
                    translateX(${offset * 220}px)
                    scale(${index === active ? 1 : 0.85})
                  `,
                  zIndex: index === active ? 10 : 5,
                  opacity: index === active ? 1 : 0.5,
                }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black w-[260px] h-[420px]">
                  <video
                    src={video}
                    muted
                    playsInline
                    preload="metadata"
                    autoPlay={index === active}
                    loop={index === active}
                    className="w-full h-full object-cover"
                  />

                  {/* ⭐ AVALIAÇÃO */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* CONTROLES */}
          <button
            onClick={prev}
            className="absolute left-0 md:left-10 z-30 p-3 rounded-full bg-white/90 shadow-md hover:bg-white"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="absolute right-0 md:right-10 z-30 p-3 rounded-full bg-white/90 shadow-md hover:bg-white"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
