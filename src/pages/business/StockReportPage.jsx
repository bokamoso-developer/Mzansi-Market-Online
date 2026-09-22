import { Boxes } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader.jsx'

export default function StockReportPage() {
  const rows = [['Fashion', 46, 1208, 8, 2], ['Homeware', 38, 832, 9, 3], ['Accessories', 44, 1044, 6, 1]]
  return <section className="workspace staff-workspace"><PageHeader eyebrow={<><Boxes size={15} /> Stock report</>} title="Stock performance" description="Monitor marketplace stock levels from a management view." /><div className="report-grid"><article className="report-card"><p>Products tracked</p><strong>128</strong><small>Active catalogue</small></article><article className="report-card"><p>Low stock</p><strong>23</strong><small>Below reorder level</small></article><article className="report-card"><p>Out of stock</p><strong>6</strong><small>Require replenishment</small></article><article className="report-card"><p>Estimated stock value</p><strong>R 384,920</strong><small>Sample report value</small></article></div><div className="staff-table-card"><table className="staff-table"><thead><tr><th>Category</th><th>Products</th><th>Available units</th><th>Low stock</th><th>Out of stock</th></tr></thead><tbody>{rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={index}>{index === 0 ? <strong>{cell}</strong> : cell}</td>)}</tr>)}</tbody></table></div></section>
}
