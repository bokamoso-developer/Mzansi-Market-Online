import { useMemo, useState } from 'react'
import { Eye, Image, Package, Plus, Search } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader.jsx'
import Modal from '../../components/common/Modal.jsx'
import BackendNotice from '../../components/common/BackendNotice.jsx'
import { products } from '../../data/mockData.js'

const money = new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR' })

export default function ProductsPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [selected, setSelected] = useState(null)
  const [addOpen, setAddOpen] = useState(false)
  const filtered = useMemo(() => products.filter((product) => {
    const matchesText = `${product.name} ${product.sku}`.toLowerCase().includes(query.toLowerCase())
    return matchesText && (category === 'All' || product.category === category)
  }), [query, category])

  return (
    <section className="workspace staff-workspace">
      <PageHeader eyebrow={<><Package size={15} /> Catalogue</>} title="Products & pricing" description="Review product details, price, image metadata and current stock." action={<button className="primary-button compact" onClick={() => setAddOpen(true)}><Plus /> Add product</button>} />
      <div className="catalogue-tools">
        <label className="search-box"><Search /><span className="sr-only">Search</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search product or SKU" /></label>
        <label>Category<select value={category} onChange={(e) => setCategory(e.target.value)}><option>All</option><option>Fashion</option><option>Homeware</option><option>Accessories</option></select></label>
        <label>Status<select><option>All statuses</option><option>Active</option><option>Low stock</option><option>Out of stock</option></select></label>
      </div>
      <div className="staff-table-card">
        <table className="staff-table">
          <thead><tr><th>Product</th><th>SKU</th><th>Category</th><th>Price</th><th>Stock</th><th>Promotion</th><th>Status</th><th /></tr></thead>
          <tbody>{filtered.map((product) => <tr key={product.id}><td><strong>{product.name}</strong><small>{product.imageMeta}</small></td><td>{product.sku}</td><td>{product.category}</td><td>{money.format(product.price)}</td><td>{product.stock}</td><td>{product.promotion}</td><td><span className={`admin-status ${product.status === 'Active' ? 'admin-status--approved' : 'admin-status--suspended'}`}>{product.status}</span></td><td><button className="icon-button table-action" onClick={() => setSelected(product)} aria-label={`View ${product.name}`}><Eye /></button></td></tr>)}</tbody>
        </table>
      </div>
      {selected ? <Modal title={selected.name} onClose={() => setSelected(null)} wide><div className="detail-grid"><div><small>SKU</small><strong>{selected.sku}</strong></div><div><small>Category</small><strong>{selected.category}</strong></div><div><small>Price</small><strong>{money.format(selected.price)}</strong></div><div><small>Stock</small><strong>{selected.stock}</strong></div><div><small>Image metadata</small><strong>{selected.imageMeta}</strong></div><div><small>Promotion</small><strong>{selected.promotion}</strong></div></div><BackendNotice>Editing and saving product data requires the product API and PostgreSQL.</BackendNotice></Modal> : null}
      {addOpen ? <Modal title="Add product" onClose={() => setAddOpen(false)}><form className="stack-form" onSubmit={(event) => event.preventDefault()}><label>Product name<input placeholder="Product name" /></label><label>SKU<input placeholder="MZM-0000" /></label><label>Category<select><option>Fashion</option><option>Homeware</option><option>Accessories</option></select></label><label>Price<input type="number" min="0" placeholder="0.00" /></label><label>Image metadata<input placeholder="filename.webp · 1200×1200" /></label><BackendNotice /><button className="secondary-button full-width" type="button" onClick={() => setAddOpen(false)}>Close</button></form></Modal> : null}
    </section>
  )
}
