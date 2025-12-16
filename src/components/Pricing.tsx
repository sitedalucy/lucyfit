import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, ShieldCheck, Star } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useIsMobile } from "@/hooks/use-mobile";

const monthlyBase = {
  name: "PLANO MENSAL",
  price: 29.99,
  interval: "/ mês",
  description: "Controle total da sua alimentação com IA pagando mês a mês.",
  features: [
    { name: "Registro de refeições por foto, texto ou áudio", included: true },
    {
      name: "Cálculo automático de calorias e macronutrientes",
      included: true,
    },
    {
      name: "Sugestões de treino e exercícios para sua rotina",
      included: true,
    },
    { name: "Análise inteligente da sua alimentação com IA", included: true },
    { name: "Metas ajustadas conforme seus hábitos", included: true },
    { name: "Histórico de refeições e treinos no WhatsApp", included: true },
    { name: "Acompanhamento diário", included: true },
    { name: "Suporte prioritário", included: false },
  ],
  cta: {
    text: "Assinar mensal",
    href: "https://pay.hotmart.com/K102603335O?off=oe515n4q&checkoutMode=10&bid=1765197985158",
  },
};

const annualBase = {
  name: "PLANO ANUAL",
  price: 19.99,
  interval: "/ mês",
  description: "12x R$ 19,99 — Economize mais de 30%",
  features: [
    { name: "Registro de refeições por foto, texto ou áudio", included: true },
    {
      name: "Cálculo automático de calorias e macronutrientes",
      included: true,
    },
    {
      name: "Sugestões de treino e exercícios para sua rotina",
      included: true,
    },
    { name: "Análise inteligente da sua alimentação com IA", included: true },
    { name: "Metas ajustadas conforme seus hábitos", included: true },
    { name: "Histórico de refeições e treinos no WhatsApp", included: true },
    { name: "Acompanhamento diário", included: true },
    { name: "Suporte prioritário", included: true },
  ],
  cta: {
    text: "Melhor oferta",
    href: "https://pay.hotmart.com/K102603335O?off=gv3oc04g&checkoutMode=10",
  },
};

export default function Pricing() {
  const [showAnnual, setShowAnnual] = useState(true);
  const isMobile = useIsMobile();
  const activeTier = showAnnual ? annualBase : monthlyBase;

  return (
    <section id="pricing" className="py-28 bg-white relative overflow-hidden">
      {/* HEADER */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold">
          Invista na sua saúde por menos que um lanche.
        </h2>
        <p className="text-muted-foreground mt-4 text-lg">
          Escolha o plano ideal para você
        </p>

        <div className="flex items-center justify-center gap-4 mt-8">
          <span
            className={!showAnnual ? "font-semibold" : "text-muted-foreground"}
          >
            Mensal
          </span>

          <Switch checked={showAnnual} onCheckedChange={setShowAnnual} />

          <span
            className={showAnnual ? "font-semibold" : "text-muted-foreground"}
          >
            Anual
          </span>

          {showAnnual && (
            <motion.span
              initial={isMobile ? false : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-sm bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-semibold"
            >
              Economize 40%
            </motion.span>
          )}
        </div>
      </div>

      {/* CARD DO PLANO */}
      <motion.div
        initial={isMobile ? false : { opacity: 0, y: 60, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center px-6"
      >
        <div
          className={`relative w-full max-w-lg rounded-3xl p-10 shadow-2xl border ${
            showAnnual
              ? "bg-gradient-to-br from-purple-600 to-purple-800 text-white border-purple-300/40"
              : "bg-white text-gray-900 border-gray-200"
          }`}
        >
          {showAnnual && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="px-4 py-1 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-md flex items-center gap-2">
                <Star className="h-4 w-4" />
                MAIS VENDIDO
              </div>
            </div>
          )}

          <h3 className="text-3xl font-bold">{activeTier.name}</h3>
          <p className="mt-3 text-lg opacity-90">{activeTier.description}</p>

          <div className="mt-6 flex items-end gap-2">
            <span className="text-5xl font-extrabold">
              R$ {activeTier.price.toFixed(2)}
            </span>
            <span className="text-lg opacity-80">{activeTier.interval}</span>
          </div>

          <ul className="mt-8 space-y-3">
            {activeTier.features.map((f, idx) => (
              <li key={idx} className="flex gap-3">
                <span
                  className={`mt-1 w-3 h-3 rounded-full ${
                    f.included
                      ? showAnnual
                        ? "bg-green-300"
                        : "bg-purple-500"
                      : "bg-red-400"
                  }`}
                />
                <span>{f.name}</span>
              </li>
            ))}
          </ul>

          <a
            href={activeTier.cta.href}
            target="_blank"
            className={`block mt-10 w-full text-center py-4 rounded-xl text-lg font-semibold shadow-lg ${
              showAnnual
                ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                : "bg-purple-600 text-white hover:bg-purple-700"
            }`}
          >
            {activeTier.cta.text}
          </a>
        </div>
      </motion.div>

      {/* ✅ GARANTIA DE 7 DIAS — LEVE E MOBILE FRIENDLY */}
      <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <Shield className="h-4 w-4" />
        <span>
          Garantia de 7 dias — teste sem risco. Devolvemos 100% do seu dinheiro.
        </span>
      </div>

      {/* ================= GARANTIA 30 DIAS ================= */}
      <div className="mt-24 px-4">
        <div className="relative mx-auto max-w-6xl rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50/40 via-white to-purple-50/30 shadow-2xl px-6 py-12 lg:px-12 lg:py-16 overflow-hidden">
          {/* DECOR DESKTOP */}
          <div className="hidden lg:block absolute -top-24 -left-24 w-96 h-96 bg-purple-300/20 rounded-full blur-[140px]" />
          <div className="hidden lg:block absolute -bottom-24 -right-24 w-96 h-96 bg-pink-300/20 rounded-full blur-[140px]" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            {/* TEXTO */}
            <div className="space-y-4 text-center lg:text-left">
              <h3 className="text-2xl lg:text-4xl font-bold">
                <span className="text-purple-600">Experimente a Lucy Fit</span>{" "}
                por 30 dias
              </h3>

              <p className="text-gray-600 text-sm lg:text-lg">
                Experimente a Lucy Fit por 1 mês e veja como é simples organizar
                sua alimentação e treinos direto no WhatsApp.
              </p>

              <p className="text-gray-600 text-sm lg:text-base">
                Se dentro de 30 dias você não gostar ou não se adaptar, é só
                pedir —
                <strong className="text-purple-600">
                  {" "}
                  devolvemos 100% do seu dinheiro
                </strong>
                .
              </p>

              <p className="font-medium text-gray-700 text-sm lg:text-base">
                Sem riscos. Sem complicação. Só resultados reais.
              </p>

              <div className="pt-4">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-7 py-3 lg:px-8 lg:py-4 text-white font-semibold shadow-lg hover:scale-[1.02] transition-transform"
                >
                  Quero experimentar por 30 dias
                </a>
              </div>
            </div>

            {/* MOEDA REAL */}
            <div className="flex justify-center">
              <div className="w-44 h-44 lg:w-56 lg:h-56">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* CÍRCULO BASE */}
                  <defs>
                    <path id="topCurve" d="M 30,100 A 70,70 0 0,1 170,100" />
                    <path id="bottomCurve" d="M 170,100 A 70,70 0 0,1 30,100" />
                  </defs>

                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="url(#coinGradient)"
                    stroke="#d1d5db"
                    strokeWidth="2"
                  />

                  <defs>
                    <radialGradient id="coinGradient">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="70%" stopColor="#e5e7eb" />
                      <stop offset="100%" stopColor="#d1d5db" />
                    </radialGradient>
                  </defs>

                  {/* TEXTO CURVO SUPERIOR */}
                  <text
                    fontSize="10"
                    fill="#4b5563"
                    fontWeight="600"
                    letterSpacing="1"
                  >
                    <textPath
                      href="#topCurve"
                      startOffset="50%"
                      textAnchor="middle"
                    >
                      SATISFAÇÃO GARANTIDA
                    </textPath>
                  </text>

                  {/* TEXTO CURVO INFERIOR */}
                  <text
                    fontSize="10"
                    fill="#4b5563"
                    fontWeight="600"
                    letterSpacing="1"
                  >
                    <textPath
                      href="#bottomCurve"
                      startOffset="50%"
                      textAnchor="middle"
                    >
                      OU SEU DINHEIRO DE VOLTA
                    </textPath>
                  </text>

                  {/* TEXTO CENTRAL */}
                  <text
                    x="100"
                    y="90"
                    textAnchor="middle"
                    fontSize="38"
                    fontWeight="800"
                    fill="#1f2937"
                  >
                    30
                  </text>
                  <text
                    x="100"
                    y="112"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#374151"
                  >
                    DIAS
                  </text>
                  <text
                    x="100"
                    y="132"
                    textAnchor="middle"
                    fontSize="10"
                    fill="#6b7280"
                  >
                    No plano anual
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================= FIM GARANTIA ================= */}

      {/* FOOTER INFO */}
      <div className="mt-10 flex justify-center gap-2 text-muted-foreground">
        <Shield className="h-5 w-5" />
        <p className="text-sm font-medium">Cancele quando quiser.</p>
      </div>
    </section>
  );
}
