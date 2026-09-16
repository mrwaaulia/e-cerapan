import Link from "next/link";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/e-cerapan/layout/PageHeader";

export default function EcerapanPage() {
  return (
    <div>
      <PageHeader
        title="E-Cerapan"
        description="Sistem digital untuk proses pemeriksaan dan pengujian alat ukur."
      />

      <div className="rounded-lg border border-gray-200 bg-white p-8">
        <div className="max-w-2xl">
          <h2 className="text-xl font-bold text-black">Mulai Cerapan Baru</h2>

          <p className="mt-3 text-sm leading-6 text-neutral">
            Mulai proses cerapan dari pemeriksaan awal, dilanjutkan dengan
            pengujian dan perhitungan hingga mendapatkan hasil pengujian.
          </p>

          <div className="mt-6">
            <Link href="/e-cerapan/pemeriksaan-awal">
              <Button>Mulai Pemeriksaan</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
