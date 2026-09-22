import { Boxes } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader.jsx'
import { products } from '../../data/mockData.js'

export default function StockPage() {
  return <section className="workspace staff-workspace"><PageHeader eyebrow={<><Boxes size={15} /> Inventory</>} title="Stock information" description="Monitor on-hand, reserved and available inventory. Stock adjustments will be handled by the backend later." /><div className="staff-table-card"><table className="staff-table"><thead><tr><th>Product</th><th>SKU</th><th>On hand</th><th>Reserved</th><th>Available</th><th>Reorder level</th><th>Status</th></tr></thead><tbody>{products.map((product) => { const available = Math.max(product.stock - product.reserved, 0); const state = available === 0 ? 'Out of stock' : available < 10 ? 'Reorder' : 'Healthy'; return <tr key={product.id}><td><strong>{product.name}</strong></td><td>{product.sku}</td><td>{product.stock}</td><td>{product.reserved}</td><td>{available}</td><td>10</td><td><span className={`admin-status ${state === 'Healthy' ? 'admin-status--approved' : 'admin-status--suspended'}`}>{state}</span></td></tr> })}</tbody></table></div></section>
}
