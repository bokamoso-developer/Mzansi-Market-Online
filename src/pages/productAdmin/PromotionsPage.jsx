import { Percent, Plus } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader.jsx'
import BackendNotice from '../../components/common/BackendNotice.jsx'
import { promotions } from '../../data/mockData.js'

export default function PromotionsPage() {
  return <section className="workspace staff-workspace"><PageHeader eyebrow={<><Percent size={15} /> Pricing & promotions</>} title="Promotions" description="Review promotion code metadata, discount type, value, campaign period and status." action={<button className="primary-button compact"><Plus /> Add promotion</button>} /><BackendNotice>Promotion creation, activation and saving need the C# backend. This page provides the complete frontend interface.</BackendNotice><div className="application-grid staff-card-grid">{promotions.map((promotion) => <article className="application-card" key={promotion.id}><header><span className="business-mark"><Percent /></span><div><p className="eyebrow">{promotion.code}</p><h2>{promotion.name}</h2></div><span className="admin-status admin-status--approved">{promotion.status}</span></header><dl><div><dt>Discount type</dt><dd>{promotion.type}</dd></div><div><dt>Value</dt><dd>{promotion.value}</dd></div><div><dt>Period</dt><dd>{promotion.period}</dd></div></dl><footer><button className="secondary-button compact">Edit promotion</button></footer></article>)}</div></section>
}
