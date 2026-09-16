import Image from "next/image";
import Link from "next/link";

export default function AppHeader() {
  return (
    <header className="h-19 border-b border-gray-200 bg-white">
      <div className="flex h-full items-center px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/imgs/logo.png"
            alt="Logo Direktorat Metrologi"
            width={40}
            height={40}
            priority
            className="h-10 w-10 object-contain"
          />

          <div className="leading-tight">
            <p className="text-base font-bold text-primary sm:text-lg">
              Direktorat Metrologi
            </p>

            <p className="text-[10px] text-black sm:text-xs">
              Kementerian Perdagangan Republik Indonesia
            </p>
          </div>
        </Link>
      </div>
    </header>
  );
}
