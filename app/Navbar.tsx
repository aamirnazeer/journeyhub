'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { SiCivicrm } from 'react-icons/si';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

const links = [
  { label: 'Dashboard', href: '/' },
  { label: 'Signin', href: '/signin' },
  { label: 'Client', href: '/client' },
];

const Navbar = () => {
  const currentPath = usePathname();
  const { status } = useSession();
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
        {status === 'authenticated' && (
          <li onClick={() => signOut()}>SignOut</li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;