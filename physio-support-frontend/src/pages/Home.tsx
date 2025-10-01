import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
  const navigate = useNavigate()
  return (
    <section className="max-w-5xl mx-auto space-y-8">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-hospital-cyan mb-4">
          Bem-vindo ao Physio Support
        </h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Nosso portal foi desenvolvido para **reduzir o número de ausências** em consultas de fisioterapia,
          oferecendo **agendamento online simples**, instruções pré-consulta e lembretes automáticos.
        </p>
        <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-800">
          <li>✅ Agendamento online rápido e intuitivo</li>
          <li>✅ Confirmação de presença e lembretes por e-mail</li>
          <li>✅ Orientações pré-consulta</li>
          <li>✅ Interface responsiva em qualquer dispositivo</li>
        </ul>
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => navigate('/contato')}
            className="px-6 py-2 bg-hospital-cyan text-white rounded shadow hover:bg-cyan-600 transition"
          >
            Agendar Consulta
          </button>
          <button
            onClick={() => navigate('/faq')}
            className="px-6 py-2 border border-hospital-cyan text-hospital-cyan rounded shadow hover:bg-hospital-blue transition"
          >
            Ver Perguntas Frequentes
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-hospital-blue p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-hospital-cyan mb-2">Mais organização</h3>
          <p className="text-sm text-gray-700">Lembretes automáticos que reduzem faltas.</p>
        </div>
        <div className="bg-hospital-blue p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-hospital-cyan mb-2">Experiência do paciente</h3>
          <p className="text-sm text-gray-700">Interface clara e acessível para todas as idades.</p>
        </div>
        <div className="bg-hospital-blue p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-hospital-cyan mb-2">Profissionais atendidos</h3>
          <p className="text-sm text-gray-700">Menos faltas, melhor gestão de horários.</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h3 className="text-2xl font-semibold text-hospital-cyan mb-4">
          Seu cuidado começa aqui
        </h3>
        <p className="mb-6 text-gray-700">
          Agende sua fisioterapia de forma simples e segura.
        </p>
        <button
          onClick={() => navigate('/contato')}
          className="px-8 py-3 bg-hospital-cyan text-white rounded-lg shadow-lg hover:bg-cyan-700 transition"
        >
          Começar Agendamento
        </button>
      </div>
    </section>
  )
}

export default Home
