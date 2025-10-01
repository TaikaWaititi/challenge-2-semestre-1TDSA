import React from 'react'

const FAQ: React.FC = () => {
  const faqs = [
    {q: 'Como faço para alterar meu agendamento?', a: 'Entre em contato pela página de contato ou use o código de agendamento enviado por e-mail.'},
    {q: 'O que levar para a consulta?', a: 'Use roupas confortáveis e traga exames relacionados.'},
  ]
  return (
    <section className="max-w-3xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-hospital-cyan mb-4">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i}>
              <h3 className="font-semibold">{f.q}</h3>
              <p className="text-sm text-gray-700">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
