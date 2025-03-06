import { NavLink } from 'react-router-dom'
import { sidebarLinks } from './data'

const AdminSidebar = () => {
  const activeLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 truncate text-white text-md mb-1 text-white font-bold'
  const normalLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 truncate text-md dark:hover:text-black hover:bg-gray-100 mb-1'

  return (
    <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      <div className="mt-5">
        {sidebarLinks.map((link) => (
          <NavLink
            to={`/admin${link.path}`}
            key={link.name}
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#41a0e4' : ''
            })}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            {link.icon}
            <span className="capitalize">{link.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default AdminSidebar
