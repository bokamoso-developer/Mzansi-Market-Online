import { Boxes, ClipboardList, Package, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHeader from '../../components/common/PageHeader.jsx'
import StatCards from '../../components/common/StatCards.jsx'
import { fulfilmentOrders } from '../../data/mockData.js'

export default function FulfilmentDashboard() {
  return <section className="workspace staff-workspace"><PageHeader eyebrow={<><ClipboardList size={15} /> Fulfilment</>} title="Order fulfilment dashboard" description="Review paid orders, reserve stock, pick and pack items, and update fulfilment status." /><StatCards items={[
    { label: 'Paid orders', value: fulfilmentOrders.filter(o => o.status === 'Paid').length, detail: 'Awaiting reservation', icon: ClipboardList },
    { label: 'Picking', value: fulfilmentOrders.filter(o => o.status === 'Picking').length, detail: 'Being picked', icon: Package },
    { label: 'Packing', value: fulfilmentOrders.filter(o => o.status === 'Packing').length, detail: 'Being packed', icon: Boxes },
    { label: 'Ready to dispatch', value: fulfilmentOrders.filter(o => o.status === 'Ready to dispatch').length, detail: 'Awaiting dispatch', icon: Truck },
  ]} /><div className="module-grid staff-module-grid"><Link className="module-card module-link" to="/fulfilment/orders"><ClipboardList /><h3>Paid orders</h3><p>Review orders that have completed payment and are ready for fulfilment.</p><span>Review orders</span></Link><Link className="module-card module-link" to="/fulfilment/queue"><Package /><h3>Fulfilment queue</h3><p>Work through reserve, pick, pack and dispatch stages.</p><span>Open queue</span></Link></div></section>
}
