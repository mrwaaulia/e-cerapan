import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-neutral">
        <li>
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
        </li>

        {items.map((item, index) => (
          <li
            key={`${item.label}-${index}`}
            className="flex items-center gap-2"
          >
            <span className="text-gray-400">/</span>

            {item.href ? (
              <Link href={item.href} className="hover:text-primary">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-primary">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
