# Mzansi Market Online – Staff Frontend

React + JavaScript + Vite frontend for three staff roles:

1. Product Administrator
   - Dashboard
   - Products and pricing
   - Categories
   - Promotions
   - Stock information
   - Image metadata review

2. Order Fulfilment Employee
   - Dashboard
   - Paid orders
   - Fulfilment queue
   - Order detail interface
   - Reserve / pick / pack / dispatch workflow design

3. Business Manager
   - Dashboard
   - Sales reports
   - Stock performance
   - Service performance
   - Refund approvals

The design reuses the supplied Mzansi Market `styles.css`, colour variables and logo.

## Run the project

```powershell
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Demo logins

All three use password: `Password123`

- Product Administrator: `product.admin@mzansi.co.za`
- Order Fulfilment Employee: `fulfilment@mzansi.co.za`
- Business Manager: `business.manager@mzansi.co.za`

## Backend boundary

This is intentionally a frontend-only project. Search, filtering, routing, modals and UI navigation work in React without a database.

Actions that would change persisted business data are not faked. Product/category/promotion saves, stock reservation, pick/pack/dispatch updates, account registration and refund approval are shown as interfaces but require the future C# API + PostgreSQL connection.
