export default function StatCards({ items }) {
  return (
    <div className="admin-summary staff-stat-grid">
      {items.map(({ label, value, detail, icon: Icon }) => (
        <div key={label}>
          <Icon />
          <span>
            <strong>{value}</strong>
            {label}
            {detail ? <small>{detail}</small> : null}
          </span>
        </div>
      ))}
    </div>
  )
}
