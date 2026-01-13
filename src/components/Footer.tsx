import { Shield, Lock, Instagram } from "lucide-react";
import lucyLogo from "@/assets/images/lucy-logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-purple-50 pt-12 lg:pt-16 pb-12 mt-16 border-t border-purple-100/40">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* LOGO E DESCRIÇÃO */}
          <div>
            <img
              src={lucyLogo}
              alt="LucyFit"
              className="h-12 mb-4 drop-shadow-sm"
              loading="lazy"
              decoding="async"
            />
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Organize sua alimentação e treinos com inteligência artificial —{" "}
              simples, rápido e direto no WhatsApp.
            </p>
          </div>

          {/* PRODUTO */}
          <div>
            <h4 className="text-lg font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-4 tracking-wide">
              PRODUTO
            </h4>

            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#features" className="hover:text-purple-600 transition">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-purple-600 transition">
                  Preços
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-purple-600 transition">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          {/* EMPRESA */}
          <div>
            <h4 className="text-lg font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-4 tracking-wide">
              EMPRESA
            </h4>

            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="/sobre" className="hover:text-purple-600 transition">
                  Sobre
                </a>
              </li>
              <li className="flex items-center gap-2 hover:text-purple-600 transition">
                <Instagram className="h-4 w-4" />
                <a
                  href="https://www.instagram.com/lucyfit.ia/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:atendimento@lucyfit.com.br"
                  className="hover:text-purple-600 transition"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* POLITICA DE PRIVACIDADE */}
          <div>
            <h4 className="text-lg font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-4 tracking-wide">
              LEGAL
            </h4>

            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a
                  href="/politica-de-privacidade"
                  className="hover:text-purple-600 transition"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="/termos-de-uso"
                  className="hover:text-purple-600 transition"
                >
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ENDERECO */}
        <div className="border-t border-purple-100 pt-4 pb-4 mb-4 text-sm text-gray-500">
          <p>
            Av. Queiroz Filho, 1700 - Alto de Pinheiros, São Paulo - SP,
            05319-000
          </p>
        </div>

        {/* RODAPÉ */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 LucyFit. Todos os direitos reservados.</p>

          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4" /> Pagamento seguro
            </span>
            <span className="flex items-center gap-2">
              <Lock className="h-4 w-4" /> Dados protegidos
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
