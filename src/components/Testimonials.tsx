// src/components/Testimonials.tsx
import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Testimonials() {
  const isMobile = useIsMobile();

  const testimonials = [
    {
      text: "Perdi 12kg em 3 meses! A I.A me ajudou a entender minha alimentação de verdade.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop",
      name: "Mariana Silva",
      role: "Perdeu 12kg",
    },
    {
      text: "Muito mais prático que qualquer app que já usei. Só tirar foto e pronto!",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop",
      name: "Carlos Eduardo",
      role: "Usuário há 6 meses",
    },
    {
      text: "Finalmente consigo manter minha dieta sem estresse. Recomendo demais!",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop",
      name: "Ana Paula",
      role: "Nutricionista",
    },
    {
      text: "Mudou completamente minha relação com a comida.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop",
      name: "Julia Oliveira",
      role: "Usuária há 1 ano",
    },
    {
      text: "O melhor investimento que fiz na minha saúde.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop",
      name: "Rafael Santos",
      role: "Perdeu 8kg",
    },
    {
      text: "A I.A entende tudo, até quando mando áudio.",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=120&h=120&fit=crop",
      name: "Beatriz Lima",
      role: "Perdeu 15kg",
    },
    {
      text: "Nunca consegui manter constância com dieta. Com a LucyFit ficou simples, é só mandar mensagem no WhatsApp.",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=120&h=120&fit=crop",
      name: "Lucas Almeida",
      role: "Usuário há 4 meses",
    },
    {
      text: "Mais do que emagrecer, aprendi a comer melhor. A LucyFit me fez prestar atenção no que eu realmente consumo.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2d?w=120&h=120&fit=crop",
      name: "Patrícia Rocha",
      role: "Mudou hábitos alimentares",
    },
  ];

  // 📱 Mobile: 5 depoimentos em UMA coluna (leve + rico)
  const mobileTestimonials = testimonials.slice(0, 5);

  // 🖥 Desktop: 3 colunas
  const firstColumn = testimonials.slice(0, 2);
  const secondColumn = testimonials.slice(2, 4);
  const thirdColumn = testimonials.slice(4, 6);

  return (
    <section
      id="testimonials"
      className="relative py-32 bg-gradient-to-b from-purple-50/40 to-white overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl px-6 relative">
        {/* CARD PRETO */}
        <div className="relative flex justify-center mb-[-160px] z-10">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-5xl rounded-3xl bg-black px-10 pt-14 pb-40 text-center shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Não acredite somente em nós — veja quem já usa.
            </h2>

            <p className="mt-5 text-gray-300 text-base md:text-lg max-w-xl mx-auto">
              Junte-se a milhares de pessoas que transformaram sua alimentação.
            </p>
          </motion.div>
        </div>

        {/* CARROSSEL */}
        <div
          className={`
            relative z-20 flex justify-center gap-6 max-h-[520px] overflow-hidden
            ${
              !isMobile
                ? "[mask-image:linear-gradient(to_bottom,transparent,black_25%,black_55%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_25%,black_55%,transparent)]"
                : ""
            }
          `}
        >
          {isMobile ? (
            <TestimonialsColumn testimonials={mobileTestimonials} duration={18} />
          ) : (
            <>
              <TestimonialsColumn testimonials={firstColumn} duration={16} />
              <TestimonialsColumn testimonials={secondColumn} duration={20} />
              <TestimonialsColumn testimonials={thirdColumn} duration={18} />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
