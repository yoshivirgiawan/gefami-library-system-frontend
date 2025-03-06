import { ReactComponent as IconHome } from 'assets/images/icon-home.svg'
import { ReactComponent as IconPerson } from 'assets/images/icon-person.svg'
import { ReactComponent as IconProduct } from 'assets/images/icon-product.svg'

export const sidebarLinks = [
  {
    name: 'manajemen user',
    path: '/user',
    icon: <IconPerson />
  },
  {
    name: 'manajemen buku',
    path: '/books',
    icon: <IconProduct />
  },
  {
    name: 'manajemen peminjaman',
    path: '/loans',
    icon: <IconProduct />
  },
]
