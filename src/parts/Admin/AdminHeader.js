import { Link } from 'react-router-dom'
import { useAuth } from "helpers/hooks/useAuth";

export default function AdminHeader({ theme, position }) {
  const { logout, loading } = useAuth();
  const token = localStorage.getItem('token');

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
    } catch (err) {
      // Error already handled by useAuth hook
      console.error("Logout failed:", err);
    }
  };
  
  return (
    <header className={[position, 'w-full z-40 px-4 border-b-2'].join(' ')}>
      <div className="container mx-auto py-5">
        <div className="flex justify-between items-center">
          <div className="w-56 items-center flex">
            <Link to="/">
              <img src="/images/content/logo.png" alt="Vascomm Logo" />
            </Link>
          </div>
          <div className="w-auto">
            <ul className="fixed bg-white inset-0 flex flex-col items-center justify-center md:visible md:flex-row md:bg-transparent md:relative md:opacity-100 md:flex md:items-center">
              <li className="mx-3 py-6 md:py-0">
              {token ? (
                  <button
                    onClick={handleLogout}
                    disabled={loading}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                  >
                    {loading ? "Loading..." : "KELUAR"}
                  </button>
                ) : (
                  <></>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
