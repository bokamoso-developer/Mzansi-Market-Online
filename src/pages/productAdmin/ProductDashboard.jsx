import { Boxes, Image, Package, Percent, Tags } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHeader from '../../components/common/PageHeader.jsx'
import StatCards from '../../components/common/StatCards.jsx'
import { categories, products, promotions } from '../../data/mockData.js'

export default function ProductDashboard() {
  const lowStock = products.filter((product) => product.stock <= 10).length
  return (
    <section className="workspace staff-workspace">
      <PageHeader eyebrow={<><Package size={15} /> Product administration</>} title="Catalogue dashboard" description="Maintain product, category, price, image metadata, promotion and stock information." />
      <StatCards items={[
        { label: 'Products', value: products.length, detail: 'Catalogue records', icon: Package },
        { label: 'Categories', value: categories.length, detail: 'Product groups', icon: Tags },
        { label: 'Promotions', value: promotions.length, detail: 'Configured campaigns', icon: Percent },
        { label: 'Low stock', value: lowStock, detail: 'Need attention', icon: Boxes },
      ]} />
      <div className="module-grid staff-module-grid">
        <Link className="module-card module-link" to="/product-admin/products"><Package /><h3>Products & pricing</h3><p>Review product records, prices, SKUs and image metadata.</p><span>Open products</span></Link>
        <Link className="module-card module-link" to="/product-admin/categories"><Tags /><h3>Categories</h3><p>View category structure and category metadata.</p><span>Open categories</span></Link>
        <Link className="module-card module-link" to="/product-admin/promotions"><Percent /><h3>Promotions</h3><p>Review promotion codes, values, periods and status.</p><span>Open promotions</span></Link>
        <Link className="module-card module-link" to="/product-admin/stock"><Boxes /><h3>Stock</h3><p>Monitor on-hand, reserved and available stock values.</p><span>Open stock</span></Link>
        <Link className="module-card module-link" to="/product-admin/products"><Image /><h3>Image metadata</h3><p>View the image filename and dimensions stored against each product.</p><span>Review metadata</span></Link>
      </div>
    </section>
  )
}
