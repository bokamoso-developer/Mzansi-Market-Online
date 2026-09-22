import { useState } from 'react'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import BrandMark from '../../components/common/BrandMark.jsx'
import { demoUsers } from '../../data/mockData.js'

export default function LoginPage({ onLogin }) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function submit(event) {
    event.preventDefault()
    const user = demoUsers.find((item) => item.email.toLowerCase() === email.trim().toLowerCase() && item.password === password)
    if (!user) {
      setError('The email or password is not recognised. Use one of the demo staff accounts below.')
      return
    }
    onLogin(user)
    navigate(`/${user.roleKey}`)
  }

  function choose(user) {
    setEmail(user.email)
    setPassword(user.password)
    setError('')
  }

  return (
    <div className="auth-page">
      <header className="auth-header"><BrandMark /><span>Staff portal</span></header>
      <main className="auth-main section-wrap">
        <section className="auth-card">
          <div className="auth-card__intro">
            <p className="eyebrow"><ShieldCheck size={15} /> Secure staff access</p>
            <h1>Staff sign in</h1>
            <p>Sign in to open the workspace assigned to your Mzansi Market role.</p>
          </div>
          <form className="stack-form" onSubmit={submit}>
            <label>Email address<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@mzansi.co.za" required /></label>
            <label>Password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required /></label>
            {error ? <div className="notice notice--error">{error}</div> : null}
            <button className="primary-button full-width" type="submit">Sign in <ArrowRight /></button>
          </form>
          <p className="auth-switch">Need an account? <Link to="/register">Register</Link></p>

        </section>
      </main>
    </div>
  )
}
