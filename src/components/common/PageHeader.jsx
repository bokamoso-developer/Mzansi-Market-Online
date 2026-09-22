export default function PageHeader({ eyebrow, title, description, action }) {
  return (
    <div className="admin-heading staff-page-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  )
}
