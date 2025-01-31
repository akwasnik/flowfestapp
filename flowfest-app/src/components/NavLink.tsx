import Link from "next/link";

export default function NavLink({ href, children, mobile }: { href: string; children: React.ReactNode; mobile: boolean }) {
  return (
    <Link href={href} className={`${ mobile && "block"} text-white hover:bg-white hover:text-black rounded-lg p-2 transition duration-300 ease-in-out`}>
      {children}
    </Link>
  );
}