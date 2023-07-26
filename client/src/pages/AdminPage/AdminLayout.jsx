import { Outlet } from 'react-router-dom'
import AdminHeader from './components/AdminHeader'



export default function AdminLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary">
        <AdminHeader />
        <Outlet />
    </div>
  )
}
