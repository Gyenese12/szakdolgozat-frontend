import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })

      const data = await response.json()

      alert(data.message)
    } catch (error) {
      alert('Hiba történt')
    }
  }

  return (
      <div className="container">
        <div className="login-card">
          <h1>🎓 Szakdolgozat Portál</h1>
          <p className="subtitle">Bejelentkezés a rendszerbe</p>

          <form onSubmit={handleLogin}>
            <input
                type="email"
                placeholder="Email cím"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Jelszó"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Bejelentkezés</button>
          </form>
        </div>
      </div>
  )
}

export default App