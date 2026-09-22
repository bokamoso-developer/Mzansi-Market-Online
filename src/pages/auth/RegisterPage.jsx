import { useState } from 'react'
import { UserPlus } from 'lucide-react'
import { Link } from 'react-router-dom'
import BrandMark from '../../components/common/BrandMark.jsx'
import BackendNotice from '../../components/common/BackendNotice.jsx'

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <div className="auth-page">
      <header className="auth-header"><BrandMark /><span>Staff portal</span></header>
      <main className="auth-main section-wrap">
        <section className="auth-card">
          <div className="auth-card__intro">
            <p className="eyebrow"><UserPlus size={15} /> Account registration</p>
            <h1>Create an account</h1>
            <p>This is the registration interface only. Real account creation will be handled by the C# backend.</p>
          </div>
          <form className="stack-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
            <label>Full name<input placeholder="Full name" required /></label>
            <label>Email address<input type="email" placeholder="name@example.com" required /></label>
            <label>Password<input type="password" placeholder="Create password" required /></label>
            <label>Confirm password<input type="password" placeholder="Confirm password" required /></label>
            <button className="primary-button full-width" type="submit"><UserPlus /> Continue</button>
          </form>
            <p className="auth-switch">Already registered? <Link to="/login">Sign in</Link></p>
        </section>
      </main>
    </div>
  )
}
