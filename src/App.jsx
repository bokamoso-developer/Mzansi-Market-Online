import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { BarChart3, Boxes, ClipboardList, FileText, LayoutDashboard, Package, Percent, ShieldCheck, Tags } from 'lucide-react'
import StaffLayout from './components/layout/StaffLayout.jsx'
import LoginPage from './pages/auth/LoginPage.jsx'
import RegisterPage from './pages/auth/RegisterPage.jsx'
import ProductDashboard from './pages/productAdmin/ProductDashboard.jsx'
import ProductsPage from './pages/productAdmin/ProductsPage.jsx'
import CategoriesPage from './pages/productAdmin/CategoriesPage.jsx'
import PromotionsPage from './pages/productAdmin/PromotionsPage.jsx'
import StockPage from './pages/productAdmin/StockPage.jsx'
import FulfilmentDashboard from './pages/fulfilment/FulfilmentDashboard.jsx'
import FulfilmentQueuePage from './pages/fulfilment/FulfilmentQueuePage.jsx'
import BusinessDashboard from './pages/business/BusinessDashboard.jsx'
import SalesReportsPage from './pages/business/SalesReportsPage.jsx'
import StockReportPage from './pages/business/StockReportPage.jsx'
import ServicePerformancePage from './pages/business/ServicePerformancePage.jsx'
import RefundApprovalsPage from './pages/business/RefundApprovalsPage.jsx'

const productNav = [
  { to: '/product-admin', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/product-admin/products', label: 'Products & pricing', icon: Package },
  { to: '/product-admin/categories', label: 'Categories', icon: Tags },
  { to: '/product-admin/promotions', label: 'Promotions', icon: Percent },
  { to: '/product-admin/stock', label: 'Stock', icon: Boxes },
]

const fulfilmentNav = [
  { to: '/fulfilment', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/fulfilment/orders', label: 'Paid orders', icon: ClipboardList },
  { to: '/fulfilment/queue', label: 'Fulfilment queue', icon: Package },
]

const businessNav = [
  { to: '/business-manager', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/business-manager/sales', label: 'Sales reports', icon: BarChart3 },
  { to: '/business-manager/stock', label: 'Stock performance', icon: Boxes },
  { to: '/business-manager/service', label: 'Service performance', icon: ShieldCheck },
  { to: '/business-manager/refunds', label: 'Refund approvals', icon: FileText },
]

function RoleRoute({ currentUser, roleKey, navItems, onLogout }) {
  if (!currentUser) return <Navigate to="/login" replace />
  if (currentUser.roleKey !== roleKey) return <Navigate to={`/${currentUser.roleKey}`} replace />
  return <StaffLayout user={currentUser} navItems={navItems} onLogout={onLogout} />
}

export default function App() {
  const [currentUser, setCurrentUser] = useState(null)

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={currentUser ? <Navigate to={`/${currentUser.roleKey}`} replace /> : <LoginPage onLogin={setCurrentUser} />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route element={<RoleRoute currentUser={currentUser} roleKey="product-admin" navItems={productNav} onLogout={() => setCurrentUser(null)} />}>
        <Route path="/product-admin" element={<ProductDashboard />} />
        <Route path="/product-admin/products" element={<ProductsPage />} />
        <Route path="/product-admin/categories" element={<CategoriesPage />} />
        <Route path="/product-admin/promotions" element={<PromotionsPage />} />
        <Route path="/product-admin/stock" element={<StockPage />} />
      </Route>

      <Route element={<RoleRoute currentUser={currentUser} roleKey="fulfilment" navItems={fulfilmentNav} onLogout={() => setCurrentUser(null)} />}>
        <Route path="/fulfilment" element={<FulfilmentDashboard />} />
        <Route path="/fulfilment/orders" element={<FulfilmentQueuePage paidOnly />} />
        <Route path="/fulfilment/queue" element={<FulfilmentQueuePage />} />
      </Route>

      <Route element={<RoleRoute currentUser={currentUser} roleKey="business-manager" navItems={businessNav} onLogout={() => setCurrentUser(null)} />}>
        <Route path="/business-manager" element={<BusinessDashboard />} />
        <Route path="/business-manager/sales" element={<SalesReportsPage />} />
        <Route path="/business-manager/stock" element={<StockReportPage />} />
        <Route path="/business-manager/service" element={<ServicePerformancePage />} />
        <Route path="/business-manager/refunds" element={<RefundApprovalsPage />} />
      </Route>

      <Route path="*" element={<Navigate to={currentUser ? `/${currentUser.roleKey}` : '/login'} replace />} />
    </Routes>
  )
}
