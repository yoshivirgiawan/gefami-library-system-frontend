import { Link } from 'react-router-dom'
export default function AdminHeader({ theme, position }) {
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
                <Link
                  to="/profile"
                  className={[
                    'hover:underline flex items-center gap-4',
                    theme === 'white'
                      ? 'text-black md:text-white'
                      : 'text-black md:text-black'
                  ].join(' ')}
                >
                  <div className="text-right">
                    <div className="text-sm text-[#41a0e4]">Hallo Admin,</div>
                    <div className='leading-none'>Aden S. Putra</div>
                  </div>
                  <div className="bg-gray-400 w-10 h-10 rounded-full"></div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
