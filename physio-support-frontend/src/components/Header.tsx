import React from 'react'
import { Link } from 'react-router-dom'

import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className="bg-hospital-cyan text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-hospital-cyan font-bold">HS</div>
          <div>
            <h1 className="text-xl font-semibold">Physio Support</h1>
            <p className="text-sm">Agendamentos de fisioterapia</p>
          </div>
        </div>
        <nav className="flex gap-4 items-center">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/sobre" className="hover:underline">Sobre</Link>
          <Link to="/integrantes" className="hover:underline">Integrantes</Link>
          <Link to="/faq" className="hover:underline">FAQ</Link>
          <Link to="/contato" className="px-3 py-1 rounded bg-white text-hospital-cyan font-semibold">Agendar</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header