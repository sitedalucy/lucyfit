// src/pages/Obrigado.tsx

export default function Obrigado() {
  return (
    <main className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Compra confirmada */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            🎉 <span className="text-blue-700">Compra confirmada!</span>
          </h1>
        </div>

        {/* Bem-vinda à Lucy Fit */}
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            <span className="text-green-500">Bem-vinda</span> à Lucy Fit 💚💖
          </h1>
        </div>

        {/* O que acontece agora */}
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">
            💬 <strong>O que acontece agora?</strong>
          </h3>
        </div>

        {/* Texto sobre assistente */}
        <div className="text-center">
          <p className="text-lg text-gray-700">
            A sua assistente inteligente de saúde e bem-estar já está se preparando para falar com você no WhatsApp.
          </p>
        </div>

        {/* Mensagem automática */}
        <div className="text-center">
          <p className="text-lg text-gray-700">
            Em alguns instantes, a <strong>Lucy Fit</strong> vai te enviar uma <strong>mensagem automática no WhatsApp</strong> informado no momento da compra.
          </p>
        </div>

        {/* Acompanhar */}
        <div className="text-center">
          <p className="text-lg text-gray-700">
            Ela vai te acompanhar na sua alimentação, rotina saudável e evolução — tudo de forma simples e prática 💪✨
          </p>
        </div>

        {/* Retângulo verde */}
        <div className="bg-green-100 rounded-lg p-8 mx-auto max-w-2xl">
          {/* Importante */}
          <div className="text-left mb-4">
            <h3 className="text-lg md:text-xl font-bold text-gray-800">
              ⚠️ <strong>Importante</strong>
            </h3>
          </div>

          {/* Para garantir */}
          <div className="text-left mb-4">
            <p className="text-base text-gray-700">
              Para garantir que tudo funcione direitinho:
            </p>
          </div>

          {/* Lista */}
          <ul className="text-left space-y-2 text-gray-700">
            <li>
              <p className="text-base">
                Aguarde a mensagem de boas-vindas da Lucy Fit
              </p>
            </li>
            <li>
              <p className="text-base">
                Use o mesmo número de WhatsApp cadastrado na Hotmart
              </p>
            </li>
            <li>
              <p className="text-base">
                Evite enviar mensagens antes de receber o primeiro contato da Lucy
              </p>
            </li>
          </ul>

          {/* Sistema pode levar */}
          <div className="text-left mt-4">
            <p className="text-base text-gray-700">
              Nosso sistema pode levar alguns minutos para concluir a ativação — é normal 🤖
            </p>
          </div>
        </div>

        {/* Nos vemos no WhatsApp */}
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">
            💚💖 Nos vemos no WhatsApp
          </h3>
        </div>

        {/* Assim que a Lucy chamar */}
        <div className="text-center">
          <p className="text-lg text-gray-700">
            Assim que a Lucy chamar, é <span className="font-bold">só responder e começar</span> ✨<br />
            Sua rotina saudável acaba de ganhar uma nova aliada
          </p>
        </div>
      </div>
    </main>
  );
}