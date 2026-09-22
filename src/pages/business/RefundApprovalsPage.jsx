import { FileText } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader.jsx'
import BackendNotice from '../../components/common/BackendNotice.jsx'
import { refunds } from '../../data/mockData.js'

const money = new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR' })

export default function RefundApprovalsPage() {
  return <section className="workspace staff-workspace"><PageHeader eyebrow={<><FileText size={15} /> Refunds</>} title="Refund approvals" description="Review selected refund requests that require a business manager decision." /><BackendNotice>Approving a refund changes business transaction data, so the approval buttons are intentionally disabled until the C# backend is connected.</BackendNotice><div className="application-grid staff-card-grid">{refunds.map((refund) => <article className="application-card" key={refund.id}><header><span className="business-mark"><FileText /></span><div><p className="eyebrow">{refund.id}</p><h2>{refund.order}</h2></div><span className={`admin-status ${refund.status === 'Approved' ? 'admin-status--approved' : 'admin-status--pending'}`}>{refund.status}</span></header><dl><div><dt>Customer</dt><dd>{refund.customer}</dd></div><div><dt>Amount</dt><dd>{money.format(refund.amount)}</dd></div><div><dt>Reason</dt><dd>{refund.reason}</dd></div><div><dt>Requested</dt><dd>{refund.requested}</dd></div></dl>{refund.status === 'Pending' ? <footer><button className="primary-button compact" disabled>Approve refund</button><button className="secondary-button compact" disabled>Decline</button></footer> : null}</article>)}</div></section>
}
