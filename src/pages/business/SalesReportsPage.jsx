import { BarChart3 } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader.jsx'
import { salesByMonth } from '../../data/mockData.js'

export default function SalesReportsPage() {
  return <section className="workspace staff-workspace"><PageHeader eyebrow={<><BarChart3 size={15} /> Reports</>} title="Sales reports" description="Monitor sales performance from the business manager workspace." /><div className="report-grid"><article className="report-card"><p>Revenue</p><strong>R 248,640</strong><small>Current reporting period</small></article><article className="report-card"><p>Paid orders</p><strong>684</strong><small>92 paid today</small></article><article className="report-card"><p>Average order value</p><strong>R 363.51</strong><small>Across paid orders</small></article><article className="report-card"><p>Refund value</p><strong>R 12,480</strong><small>Current period</small></article></div><div className="panel-surface"><div className="panel-heading"><div><h2>Sales trend</h2><p>Illustrative frontend chart using sample report data.</p></div></div><div className="css-chart" aria-label="Sample sales trend">{salesByMonth.map((item) => <div className="css-chart__item" key={item.label}><div className="css-chart__bar" style={{ height: `${item.value}%` }} /><span>{item.label}</span></div>)}</div></div></section>
}
