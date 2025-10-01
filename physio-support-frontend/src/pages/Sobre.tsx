import React from 'react'

const Sobre: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-hospital-cyan mb-4">Sobre o Projeto</h2>
        <p className="text-gray-700 mb-4">
          O <strong>Physio Support</strong> é um sistema acadêmico para agendamento online de consultas de fisioterapia,
          reduzindo ausências e aproximando pacientes de profissionais de saúde.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-hospital-blue p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-hospital-cyan mb-2">Nossa Missão</h3>
          <p className="text-sm text-gray-700">
            Garantir acesso fácil e rápido ao agendamento de consultas, promovendo cuidado contínuo.
          </p>
        </div>
        <div className="bg-hospital-blue p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-hospital-cyan mb-2">Nossa Visão</h3>
          <p className="text-sm text-gray-700">
            Ser reconhecido como solução prática e acessível para clínicas e hospitais.
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-hospital-cyan mb-4">Funcionalidades</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li>📅 Agendamento online simples</li>
          <li>🔔 Lembretes e confirmações automáticas</li>
          <li>📑 Instruções pré-consulta</li>
          <li>📊 Acompanhamento de consultas</li>
          <li>📱 Interface responsiva</li>
        </ul>
      </div>

      <div className="bg-hospital-blue p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-hospital-cyan mb-4">Impacto Esperado</h3>
        <p className="text-gray-700">
          Esperamos reduzir em até <strong>40% as ausências</strong>, aumentando a eficiência e melhorando a experiência do paciente.
        </p>
      </div>
    </section>
  )
}

export default Sobre
