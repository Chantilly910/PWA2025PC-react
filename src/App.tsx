import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const technologies = [
    { name: 'React', description: 'Librería para construir interfaces de usuario' },
    { name: 'Vite', description: 'Herramienta de desarrollo rápida para proyectos web' },
    { name: 'TypeScript', description: 'Superset de JavaScript tipado' }
  ]

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === 'admin' && password === 'admin') {
      setLoggedIn(true)
    } else {
      setError('Usuario o contraseña incorrectos')
    }
  }

  if (!loggedIn) {
    return (
      <div className="login-modal">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Iniciar sesión</h2>
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Entrar</button>
        </form>
      </div>
    )
  }

  return (
    <div className="container">
      <nav className="navbar">
        <h1>🚀 Proyecto PWA2025PC</h1>
      </nav>

      <section className="counter-section">
        <h2>Contador interactivo</h2>
        <button onClick={() => setCount(count + 1)}>Incrementar: {count}</button>
      </section>

      <section className="tech-section">
        <h2>Tecnologías utilizadas</h2>
        <div className="cards">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-card">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <h2>Contacto</h2>
        <form onSubmit={(e) => { e.preventDefault(); alert('Formulario enviado'); }}>
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu email" required />
          <textarea placeholder="Mensaje..." required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  )
}

export default App
