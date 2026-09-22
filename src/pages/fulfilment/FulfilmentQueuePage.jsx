import { useMemo, useState } from 'react'
import { ClipboardList, Eye, Search } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader.jsx'
import Modal from '../../components/common/Modal.jsx'
import BackendNotice from '../../components/common/BackendNotice.jsx'
import { fulfilmentOrders } from '../../data/mockData.js'

const money = new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR' })

export default function FulfilmentQueuePage({ paidOnly = false }) {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState(paidOnly ? 'Paid' : 'All')
  const [selected, setSelected] = useState(null)
  const visible = useMemo(() => fulfilmentOrders.filter((order) => {
    const text = `${order.id} ${order.customer} ${order.city}`.toLowerCase().includes(query.toLowerCase())
    const statusMatch = status === 'All' || order.status === status
    return text && statusMatch
  }), [query, status])

  return <section className="workspace staff-workspace"><PageHeader eyebrow={<><ClipboardList size={15} /> Order workflow</>} title={paidOnly ? 'Paid orders' : 'Fulfilment queue'} description={paidOnly ? 'Review orders that have been paid and are ready for stock reservation.' : 'Review the current fulfilment stage of each paid order.'} /><div className="catalogue-tools"><label className="search-box"><Search /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search order or customer" /></label><label>Status<select value={status} onChange={(e) => setStatus(e.target.value)} disabled={paidOnly}><option>All</option><option>Paid</option><option>Stock reserved</option><option>Picking</option><option>Packing</option><option>Ready to dispatch</option></select></label></div><div className="staff-table-card"><table className="staff-table"><thead><tr><th>Order</th><th>Customer</th><th>Location</th><th>Items</th><th>Value</th><th>Status</th><th>Next action</th><th /></tr></thead><tbody>{visible.map((order) => <tr key={order.id}><td><strong>{order.id}</strong><small>Paid {order.paidAt}</small></td><td>{order.customer}</td><td>{order.city}</td><td>{order.items}</td><td>{money.format(order.value)}</td><td><span className="admin-status admin-status--approved">{order.status}</span></td><td>{order.nextAction}</td><td><button className="icon-button table-action" onClick={() => setSelected(order)}><Eye /></button></td></tr>)}</tbody></table></div>{selected ? <Modal title={`Order ${selected.id}`} onClose={() => setSelected(null)} wide><div className="order-detail"><span className="admin-status admin-status--approved">{selected.status}</span><h3>{selected.customer}</h3><p>{selected.city}, {selected.province} · Paid {selected.paidAt}</p></div><div className="detail-grid"><div><small>Items</small><strong>{selected.items}</strong></div><div><small>Order value</small><strong>{money.format(selected.value)}</strong></div><div><small>Current status</small><strong>{selected.status}</strong></div><div><small>Next step</small><strong>{selected.nextAction}</strong></div></div><div className="panel-surface compact-panel"><strong>Items in this order</strong><p>{selected.productSummary}</p></div><BackendNotice>Reserve stock, picking, packing and fulfilment status changes must be saved through the C# backend, so these actions are intentionally interface-only.</BackendNotice><button className="primary-button full-width" disabled>{selected.nextAction}</button></Modal> : null}</section>
}
