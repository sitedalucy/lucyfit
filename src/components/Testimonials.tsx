import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Mariana Costa",
    role: "Usuária LucyFit há 6 meses",
    text: "Antes eu esquecia de anotar quase tudo. Hoje só mando foto no WhatsApp e a Lucy faz todo o resto.",
    avatar:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&w=80",
  },
  {
    name: "João Henrique",
    role: "Emagreceu 8kg em 3 meses",
    text: "O feedback instantâneo me surpreendeu. A Lucy explica o que posso melhorar sem julgamento.",
    avatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&w=80",
  },
  {
    name: "Ana Paula",
    role: "Rotina corrida, alimentação organizada",
    text: "Só de mandar áudio e receber análise completa já valeu tudo. Nunca foi tão fácil cuidar da alimentação.",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&w=80",
  },
  {
    name: "Carlos Eduardo",
    role: "Foco em ganho de massa",
    text: "A análise de macros me ajudou a bater proteína todo dia sem planilha.",
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&w=80",
  },
  {
    name: "Fernanda Martins",
    role: "Voltou a se alimentar bem",
    text: "Com os lembretes e o histórico no WhatsApp, ficou muito mais simples manter o hábito.",
    avatar:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&w=80",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50/40" id="testimonials">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-12 space-y-3">
          <p className="text-xs tracking-[0.25em] text-purple-600 font-semibold uppercase">
            Resultados reais
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Não acredite só em nós — veja quem já usa.
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que transformaram sua alimentação.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all p-6 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  className="w-12 h-12 rounded-full object-cover border"
                  alt={t.name}
                />
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                “{t.text}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
