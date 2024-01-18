import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export default function NavBeanLink({href, children}:{href: string, children: ReactNode}) {
  return (
    <Link className={`${usePathname() === href ? 'text-color-fg-active' : ''}`} href={href}><span className= 'font-black text-3xl hover:text-color-fg-active transition duration-75'>{children}</span></Link>
  );
}