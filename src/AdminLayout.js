import { Outlet } from 'react-router-dom'

import AdminHeader from 'parts/Admin/AdminHeader'
import AdminSidebar from 'parts/Admin/AdminSidebar'

function AdminLayout() {
  return (
    <>
      <AdminHeader theme={'black'} />
      <div className="grid grid-cols-[300px_minmax(900px,_1fr)]">
        <AdminSidebar />
        <div className="bg-[#f8f8f8]">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default AdminLayout
