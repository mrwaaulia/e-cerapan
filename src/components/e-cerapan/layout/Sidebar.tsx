"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  {
    label: "Beranda",
    href: "/e-cerapan",
  },
  {
    label: "Pompa Ukur BBM",
    href: "/e-cerapan/pemeriksaan-awal",
  },
  {
    label: "Pengujian",
    href: "/e-cerapan/pengujian",
  },
  {
    label: "Hasil",
    href: "/e-cerapan/hasil",
  },
];

function MenuIcon({ type }: { type: string }) {
  if (type === "home") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-[18px] w-[18px]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10.5 12 3l9 7.5M5.5 9v11h13V9M9 20v-6h6v6"
        />
      </svg>
    );
  }

  if (type === "pump") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-[18px] w-[18px]"
      >
        <rect x="5" y="4" width="10" height="17" rx="1.5" />
        <path d="M8 8h4M8 11h4M15 8h2.5a2 2 0 0 1 2 2v6" />
        <path d="M19.5 16v3a1.5 1.5 0 0 1-1.5 1.5h-1" />
      </svg>
    );
  }

  if (type === "result") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-[18px] w-[18px]"
      >
        <path d="M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10A.5.5 0 0 1 7 20V3.5Z" />
        <path d="M14 3.5V8h4" />
        <path d="M9.5 12h5M9.5 15h5" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-[18px] w-[18px]"
    >
      <path d="M5 5.5h14v13H5z" />
      <path d="M8.5 9h7M8.5 12h7M8.5 15h4" />
    </svg>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/e-cerapan") {
      return pathname === href;
    }

    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile toggle */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Buka menu"
        className="fixed left-4 top-4 z-40 flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-white text-neutral shadow-sm lg:hidden"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-5 w-5"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <button
          type="button"
          aria-label="Tutup menu"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
        />
      )}

      <aside
        className={[
          "fixed left-0 top-0 z-50 h-screen w-[240px]",
          "border-r border-gray-200 bg-white",
          "transition-transform duration-200",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0",
        ].join(" ")}
      >
        <div className="flex h-full flex-col px-4 py-6">
          {/* Mobile close */}
          <div className="mb-5 flex justify-end lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Tutup menu"
              className="rounded-md p-2 text-neutral hover:bg-gray-100"
            >
              ✕
            </button>
          </div>

          {/* Sidebar top spacing */}
          <div className="h-7 border-b border-gray-200" />

          {/* Menu */}
          <nav className="mt-4 space-y-1">
            {menuItems.map((item, index) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={[
                    "flex items-center gap-3 rounded-md px-3 py-2.5",
                    "text-sm font-medium transition-colors",
                    active
                      ? "bg-primary text-white"
                      : "text-black hover:bg-primary-hover hover:text-black",
                  ].join(" ")}
                >
                  <MenuIcon
                    type={
                      index === 0
                        ? "home"
                        : index === menuItems.length - 1
                          ? "result"
                          : "pump"
                    }
                  />

                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Bottom */}
          <div className="mt-auto border-t border-gray-200 pt-4">
            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-danger transition-colors hover:bg-danger-hover"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-[18px] w-[18px]"
              >
                <path d="M10 4H5.5A1.5 1.5 0 0 0 4 5.5v13A1.5 1.5 0 0 0 5.5 20H10" />
                <path d="M14 8l4 4-4 4M18 12H9" />
              </svg>

              <span>Keluar</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
