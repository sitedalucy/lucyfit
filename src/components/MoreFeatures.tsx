import {
  Calendar,
  History,
  TrendingUp,
  Target,
  PieChart,
  FileText,
  Utensils,
  MessageSquare,
  Zap,
  Dumbbell,
  Activity,
  ClipboardCheck,
} from "lucide-react";
import { motion } from "framer-motion";

// Mesma estrutura de funcionalidades do outro dev,
// mantendo nossa pegada visual premium.
const features = [
  {
    icon: Calendar,
    title: "Registro automático diário",
    description:
      "Registre suas refeições enviando foto, texto ou áudio. A Lucy organiza tudo automaticamente no WhatsApp.",
  },
  {
    icon: History,
    title: "Histórico completo",
    description:
      "Tenha acesso ao histórico das suas refeições sempre que quiser. Tudo salvo diretamente na conversa.",
  },
  {
    icon: TrendingUp,
    title: "Análise nutricional avançada",
    description:
      "Receba análises completas com calorias, proteínas, carboidratos, gorduras e fibras de cada refeição enviada.",
  },
  {
    icon: Target,
    title: "Metas personalizadas",
    description:
      "Defina metas de calorias e macronutrientes e acompanhe facilmente se está dentro da sua rotina diária.",
  },
  {
    icon: PieChart,
    title: "Análise de macros",
    description:
      "Veja a distribuição de proteínas, carboidratos e gorduras ao longo do dia de forma simples e objetiva.",
  },
  {
    icon: FileText,
    title: "Leitura por foto, áudio ou texto",
    description:
      "Envie uma foto, descreva sua refeição ou mande um áudio — a Lucy entende qualquer formato.",
  },
  {
    icon: Utensils,
    title: "Sugestões de refeições",
    description:
      "Receba sugestões de alimentos e combinações inteligentes que ajudam a manter sua rotina equilibrada.",
  },
  {
    icon: MessageSquare,
    title: "Assistente com IA",
    description:
      "Tire dúvidas, peça orientações e receba respostas instantâneas direto no WhatsApp.",
  },
  {
    icon: Zap,
    title: "Feedback instantâneo",
    description:
      "Após cada refeição, a Lucy entrega observações rápidas para aumentar sua consciência alimentar.",
  },
  {
    icon: Dumbbell,
    title: "Registro de exercícios",
    description:
      "Adicione seus treinos para acompanhar sua rotina de atividades e manter tudo organizado no WhatsApp.",
  },
  {
    icon: Activity,
    title: "Elaboração de treinos personalizados",
    description:
      "Receba sugestões de treinos adaptados à sua rotina, tempo disponível e objetivos — tudo criado pela IA.",
  },
  {
    icon: ClipboardCheck,
    title: "Avaliação detalhada das refeições",
    description:
      "Veja uma avaliação completa das suas refeições, com análise nutricional e insights claros da assistente.",
  },
];

export default function MoreFeatures() {
  return (
    <section
      id="features"
      className="py-28 bg-gradient-to-b from-white via-purple-50/20 to-white"
    >
      <div className="container mx-auto max-w-7xl px-6">
        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.25em] text-purple-600 uppercase">
            Ainda mais funções
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Ainda mais funções para facilitar sua vida.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I.A projetada para quem quer simplicidade, velocidade e resultados reais.
          </p>
        </motion.div>

        {/* GRID PREMIUM */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="relative p-6 rounded-2xl bg-white/90 shadow-[0_10px_35px_rgba(15,23,42,0.06)] 
                         border border-purple-100/70 hover:border-purple-300/80 
                         hover:shadow-[0_18px_45px_rgba(88,28,135,0.18)]
                         transition-all duration-300 group"
            >
              {/* Glow suave ao passar o mouse (desktop apenas) */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-purple-50 via-white to-pink-50" />

              <div className="relative flex flex-col h-full">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 shadow-md">
                  <item.icon className="w-5 h-5 text-white" />
                </div>

                <h3 className="font-semibold text-lg mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
