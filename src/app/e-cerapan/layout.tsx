import AppHeader from "@/components/e-cerapan/layout/AppHeader";
import Sidebar from "@/components/e-cerapan/layout/Sidebar";

export default function EcerapanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <div className="min-h-screen lg:pl-60">
        <AppHeader />

        <main className="mx-auto w-full max-w-350 px-5 py-6 sm:px-8 lg:px-10">
          {children}
        </main>
      </div>
    </div>
  );
}
