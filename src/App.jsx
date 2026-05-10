import { useState } from 'react'
import './App.css'

function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [topics, setTopics] = useState([])

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

      const topicsResponse = await fetch('/api/topics')

      const topicsData = await topicsResponse.json()

      setTopics(topicsData)

    } catch (error) {

      alert('Hiba történt')

    }

  }

  return (
      <div className="container">

        <div className="login-box">

          <h1>Bejelentkezés</h1>

          <form onSubmit={handleLogin}>

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Jelszó"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">
              Belépés
            </button>

          </form>

          <ul>
            {topics.map((topic) => (
                <li key={topic.id}>
                  {topic.title}
                </li>
            ))}
          </ul>

        </div>

      </div>
  )
}

export default App