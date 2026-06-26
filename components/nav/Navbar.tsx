"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/profile", label: "Profile" },
    { href: "/feed", label: "Feed" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b bg-white">
      {/* Brand */}
      <Link
        href="/"
        className="text-2xl font-bold text-orange-500"
      >
        Couchsurfing
      </Link>

      {/* Navigation */}
      <div className="flex gap-6">
        {links.map((link) => {
          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium ${
                active
                  ? "text-orange-500"
                  : "text-gray-600 hover:text-orange-500"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}