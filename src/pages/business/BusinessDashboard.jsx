import { BarChart3, Boxes, FileText, ShieldCheck, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHeader from '../../components/common/PageHeader.jsx'
import StatCards from '../../components/common/StatCards.jsx'
import { refunds } from '../../data/mockData.js'

export default function BusinessDashboard() {
  return <section className="workspace staff-workspace"><PageHeader eyebrow={<><BarChart3 size={15} /> Business management</>} title="Business dashboard" description="View reports, approve selected refunds, monitor sales, stock and service performance." /><StatCards items={[
    { label: 'Revenue', value: 'R 248,640', detail: 'Current period', icon: BarChart3 },
    { label: 'Paid orders', value: '684', detail: 'Current period', icon: ShoppingBag },
    { label: 'Low stock items', value: '23', detail: 'Below reorder level', icon: Boxes },
    { label: 'Refunds pending', value: refunds.filter(r => r.status === 'Pending').length, detail: 'Require review', icon: FileText },
  ]} /><div className="module-grid staff-module-grid"><Link className="module-card module-link" to="/business-manager/sales"><BarChart3 /><h3>Sales reports</h3><p>Monitor revenue, paid orders, average order value and sales movement.</p><span>View sales</span></Link><Link className="module-card module-link" to="/business-manager/stock"><Boxes /><h3>Stock performance</h3><p>Monitor healthy, low and out-of-stock inventory.</p><span>View stock</span></Link><Link className="module-card module-link" to="/business-manager/service"><ShieldCheck /><h3>Service performance</h3><p>Review dispatch and fulfilment service indicators.</p><span>View service</span></Link><Link className="module-card module-link" to="/business-manager/refunds"><FileText /><h3>Refund approvals</h3><p>Review selected refund requests prepared for manager approval.</p><span>Review refunds</span></Link></div></section>
}
