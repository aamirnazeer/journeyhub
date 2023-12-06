'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { SiCivicrm } from 'react-icons/si';

const links = [
  { label: 'Dashboard', href: '/' },
  { label: 'Login', href: '/login' },
];

const Navbar = () => {
  const currentPath = usePathname();
  console.log(currentPath);
  return (
    <nav className="flex space-x-6 border-b mb-5 px-6 h-14 items-center">
      <Link href="/">
        <SiCivicrm />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={classNames({
                'text-zinc-900': link.href === currentPath,
                'text-zinc-500': link.href !== currentPath,
                'hover:text-zinc-800 transition-colors': true,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
