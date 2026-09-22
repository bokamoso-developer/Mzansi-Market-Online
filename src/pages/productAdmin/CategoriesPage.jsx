import { Plus, Tags } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader.jsx'
import BackendNotice from '../../components/common/BackendNotice.jsx'
import { categories } from '../../data/mockData.js'

export default function CategoriesPage() {
  return <section className="workspace staff-workspace"><PageHeader eyebrow={<><Tags size={15} /> Catalogue structure</>} title="Categories" description="Review category names, slugs, status and how many products use each category." action={<button className="primary-button compact"><Plus /> Add category</button>} /><BackendNotice>Adding or editing categories requires the catalogue API. The cards below are the frontend design.</BackendNotice><div className="application-grid staff-card-grid">{categories.map((category) => <article className="application-card" key={category.id}><header><span className="business-mark"><Tags /></span><div><p className="eyebrow">{category.slug}</p><h2>{category.name}</h2></div><span className={`admin-status ${category.status === 'Active' ? 'admin-status--approved' : 'admin-status--suspended'}`}>{category.status}</span></header><dl><div><dt>Products</dt><dd>{category.products}</dd></div><div><dt>Slug</dt><dd>{category.slug}</dd></div></dl><footer><button className="secondary-button compact">Edit details</button></footer></article>)}</div></section>
}
