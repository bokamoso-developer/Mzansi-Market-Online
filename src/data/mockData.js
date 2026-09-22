export const demoUsers = [
  {
    email: 'product.admin@mzansi.co.za',
    password: 'Password123',
    name: 'Lerato Mokoena',
    initials: 'LM',
    role: 'Product Administrator',
    roleKey: 'product-admin',
  },
  {
    email: 'fulfilment@mzansi.co.za',
    password: 'Password123',
    name: 'Sipho Dlamini',
    initials: 'SD',
    role: 'Order Fulfilment Employee',
    roleKey: 'fulfilment',
  },
  {
    email: 'business.manager@mzansi.co.za',
    password: 'Password123',
    name: 'Naledi Khumalo',
    initials: 'NK',
    role: 'Business Manager',
    roleKey: 'business-manager',
  },
]

export const products = [
  { id: 1, name: 'Linen Market Tote', sku: 'MZM-1001', category: 'Accessories', price: 349, stock: 42, reserved: 6, status: 'Active', imageMeta: 'tote-main.webp · 1200×1200', promotion: 'Mzansi Weekend' },
  { id: 2, name: 'Ceramic Heritage Mug', sku: 'MZM-1002', category: 'Homeware', price: 189, stock: 8, reserved: 2, status: 'Low stock', imageMeta: 'heritage-mug.webp · 1200×1200', promotion: 'None' },
  { id: 3, name: 'Handwoven Basket', sku: 'MZM-1003', category: 'Homeware', price: 599, stock: 0, reserved: 0, status: 'Out of stock', imageMeta: 'basket-main.webp · 1200×1200', promotion: 'None' },
  { id: 4, name: 'Cotton Lounge Shirt', sku: 'MZM-1004', category: 'Fashion', price: 449, stock: 27, reserved: 5, status: 'Active', imageMeta: 'lounge-shirt.webp · 1600×1600', promotion: 'Winter Collection' },
  { id: 5, name: 'Leather Card Holder', sku: 'MZM-1005', category: 'Accessories', price: 279, stock: 15, reserved: 3, status: 'Active', imageMeta: 'card-holder.webp · 1200×1200', promotion: 'New Customer Offer' },
]

export const categories = [
  { id: 1, name: 'Fashion', slug: 'fashion', products: 46, status: 'Active' },
  { id: 2, name: 'Homeware', slug: 'homeware', products: 38, status: 'Active' },
  { id: 3, name: 'Accessories', slug: 'accessories', products: 44, status: 'Active' },
  { id: 4, name: 'Beauty', slug: 'beauty', products: 12, status: 'Inactive' },
]

export const promotions = [
  { id: 1, code: 'MZANSI10', name: 'Mzansi Weekend', type: 'Percentage', value: '10%', period: '25–27 Sep 2026', status: 'Scheduled' },
  { id: 2, code: 'WINTER15', name: 'Winter Collection', type: 'Percentage', value: '15%', period: '01–30 Sep 2026', status: 'Active' },
  { id: 3, code: 'WELCOME75', name: 'New Customer Offer', type: 'Fixed', value: 'R 75', period: 'Always on', status: 'Active' },
]

export const fulfilmentOrders = [
  { id: 'MM-10482', customer: 'Thabo Ndlovu', city: 'Pretoria', province: 'Gauteng', paidAt: '22 Sep, 09:12', items: 3, value: 987, status: 'Paid', nextAction: 'Reserve stock', productSummary: 'Linen Market Tote ×1, Heritage Mug ×1, Cotton Lounge Shirt ×1' },
  { id: 'MM-10481', customer: 'Ayanda Molefe', city: 'Johannesburg', province: 'Gauteng', paidAt: '22 Sep, 08:46', items: 2, value: 798, status: 'Stock reserved', nextAction: 'Start picking', productSummary: 'Cotton Lounge Shirt ×1, Handwoven Basket ×1' },
  { id: 'MM-10479', customer: 'Mpho Dube', city: 'Centurion', province: 'Gauteng', paidAt: '22 Sep, 08:14', items: 1, value: 349, status: 'Picking', nextAction: 'Confirm picked', productSummary: 'Linen Market Tote ×1' },
  { id: 'MM-10477', customer: 'Karabo Maseko', city: 'Midrand', province: 'Gauteng', paidAt: '21 Sep, 16:50', items: 4, value: 1240, status: 'Packing', nextAction: 'Confirm packed', productSummary: 'Mixed catalogue order ×4' },
  { id: 'MM-10471', customer: 'Palesa Sithole', city: 'Sandton', province: 'Gauteng', paidAt: '21 Sep, 14:22', items: 2, value: 628, status: 'Ready to dispatch', nextAction: 'Mark dispatched', productSummary: 'Leather Card Holder ×1, Linen Market Tote ×1' },
]

export const refunds = [
  { id: 'RF-204', order: 'MM-10421', customer: 'Zanele Nkosi', amount: 499, reason: 'Damaged item', requested: '21 Sep 2026', status: 'Pending' },
  { id: 'RF-203', order: 'MM-10418', customer: 'Kabelo Mokoena', amount: 799, reason: 'Incorrect item received', requested: '21 Sep 2026', status: 'Pending' },
  { id: 'RF-201', order: 'MM-10397', customer: 'Lebo Molefe', amount: 249, reason: 'Delivery issue', requested: '20 Sep 2026', status: 'Approved' },
]

export const salesByMonth = [
  { label: 'Apr', value: 54 },
  { label: 'May', value: 64 },
  { label: 'Jun', value: 58 },
  { label: 'Jul', value: 77 },
  { label: 'Aug', value: 84 },
  { label: 'Sep', value: 92 },
]

export const serviceMetrics = [
  { label: 'On-time dispatch', value: '94.2%', target: '95%', state: 'Watch' },
  { label: 'Average pick time', value: '18 min', target: '20 min', state: 'On target' },
  { label: 'Average pack time', value: '11 min', target: '15 min', state: 'On target' },
  { label: 'Open service cases', value: '17', target: '< 20', state: 'On target' },
]
