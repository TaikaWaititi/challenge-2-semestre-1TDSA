import React, { useState } from 'react'

const Contato: React.FC = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState('')
}

const Contato: React.FC = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you'd integrate with backend API (Sprint 4). For now we simulate success.
    setSubmitted(true)
  }

  return (
    <section className="max-w-3xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-hospital-cyan mb-4">Agendar / Contato</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm">Nome</label>
              <input required value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block text-sm">Telefone</label>
              <input required value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block text-sm">E-mail</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block text-sm">Observações</label>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full border rounded p-2" />
            </div>
            <div className="flex gap-2">
              <button type="submit" className="px-4 py-2 bg-hospital-cyan text-white rounded">Enviar</button>
              <button type="button" onClick={() => { setName(''); setPhone(''); setEmail(''); setMessage('') }} className="px-4 py-2 border rounded">Limpar</button>
            </div>
          </form>
        ) : (
          <div className="p-4 bg-green-50 border border-green-200 rounded">
            <p className="font-semibold">Solicitação registrada!</p>
            <p>Em Sprint 4 este formulário fará requisições à API para criar o agendamento e enviar confirmações.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Contato
