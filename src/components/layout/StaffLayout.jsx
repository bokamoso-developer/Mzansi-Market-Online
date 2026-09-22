import { useState } from 'react'
import { Menu, LogOut, X } from 'lucide-react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import BrandMark from '../common/BrandMark.jsx'

export default function StaffLayout({ user, navItems, onLogout }) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  function signOut() {
    onLogout()
    navigate('/login')
  }

  return (
    <div className="staff-app">
      <header className="staff-topbar">
        <div className="staff-topbar__inner section-wrap">
          <button className="icon-button staff-mobile-menu" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
            {open ? <X /> : <Menu />}
          </button>
          <BrandMark />
          <div className="staff-topbar__right">
            <span className="staff-role">{user.role}</span>
            <div className="account-chip"><span>{user.initials[0]}</span><small>{user.name}</small></div>
            <button className="secondary-button compact" onClick={signOut}><LogOut /> Sign out</button>
          </div>
        </div>
      </header>

      <div className="staff-layout section-wrap">
        <aside className={`staff-sidebar ${open ? 'is-open' : ''}`}>
          <div className="staff-profile">
            <span className="avatar">{user.initials}</span>
            <h3>{user.name}</h3>
            <p>{user.role}</p>
          </div>
          <nav className="staff-nav">
            {navItems.map(({ to, label, icon: Icon, end }) => (
              <NavLink key={to} to={to} end={end} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'is-active' : ''}>
                <Icon size={17} /> {label}
              </NavLink>
            ))}
          </nav>
        </aside>
        <main className="staff-content"><Outlet /></main>
      </div>
    </div>
  )
}
