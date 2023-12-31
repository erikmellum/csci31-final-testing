const menuItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
  {
    title: 'Services',
    href: '/services',
  },
  {
    title: 'Products',
    href: '/products',
  },
]

export default function Navbar() {
  return (
    <div className="flex justify-end gap-4 m-6">
      {menuItems.map((item, idx) => (
        <a href={item.href} key={idx} className="px-4 py-2 bg-gray-100 shadow-md rounded-md">
          {item.title}
        </a>
      ))}
    </div>
  )
}
