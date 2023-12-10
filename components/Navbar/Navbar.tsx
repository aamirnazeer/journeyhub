'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { SiCivicrm } from 'react-icons/si';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

const links = [
  { label: 'Dashboard', href: '/dashboard' },
  // { label: 'Client', href: '/client' },
  // { label: 'Server', href: '/server' },
  { label: 'Agents', href: '/agents' },
];

const Navbar = () => {
  const currentPath = usePathname();
  const { status, data } = useSession();
  return (
    <nav className="flex space-x-6 border-b mb-5 px-6 h-14 items-center">
      <Link href="/">
        <SiCivicrm />
      </Link>
      {status === 'authenticated' && (
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
      )}

      <ul className="flex space-x-6 !ml-auto">
        <li> {data?.user.name}</li>
        {status === 'authenticated' ? (
          <li>
            <button
              onClick={() =>
                signOut({ redirect: true, callbackUrl: '/signin' })
              }
            >
              SignOut
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link href="/signin">SignIn</Link>
            </li>
            <li>
              <Link href="/signup">SignUp</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;