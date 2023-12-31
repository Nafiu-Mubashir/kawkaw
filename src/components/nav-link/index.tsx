import Link from 'next/link';
import { useRouter } from 'next/router';

export function NavLink({ href, children, classNames }: { href: string; children: string | React.ReactNode, classNames: string }) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <div className={`${classNames} hover:border-b-2 hover:border-mine hover:text-mine px-4 py-3 text-sm font-medium ${isActive ? 'border-b-2 border-mine ' : ''}`}>
        {children}
      </div>
    </Link>
  );
}