import React from 'react'

const Integrantes: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-hospital-cyan mb-4">Integrantes</h2>
        <p>Lista de integrantes com RM, turma e função no projeto.</p>
        <table className="w-full mt-4 table-auto border-collapse">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2">Nome</th>
              <th className="py-2">RM</th>
              <th className="py-2">Turma</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">Fulano de Tal</td>
              <td className="py-2">000000</td>
              <td className="py-2">1º Ano</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Integrantes

import React from 'react'

const Integrantes: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-hospital-cyan mb-4">Integrantes</h2>
        <p>Lista de integrantes com RM, turma e função no projeto.</p>
        <table className="w-full mt-4 table-auto border-collapse">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2">Nome</th>
              <th className="py-2">RM</th>
              <th className="py-2">Turma</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">Fulano de Tal</td>
              <td className="py-2">000000</td>
              <td className="py-2">1º Ano</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Integrantes
