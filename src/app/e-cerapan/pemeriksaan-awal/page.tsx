import Breadcrumb from "@/components/e-cerapan/layout/Breadcrumb";
import PageHeader from "@/components/e-cerapan/layout/PageHeader";
import Stepper from "@/components/e-cerapan/layout/Stepper";

export default function PemeriksaanAwalPage() {
  return (
    <>
      <Breadcrumb
        items={[
          {
            label: "E-Cerapan",
            href: "/e-cerapan",
          },
          {
            label: "Cerapan Pompa Ukur BBM",
          },
        ]}
      />

      <Stepper currentStep={1} />

      <PageHeader
        title="Pemeriksaan Awal"
        description="Pompa Ukur BBM - Isi seluruh data dan checklist pemeriksaan"
      />

      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <p className="text-sm text-neutral">
          Form pemeriksaan akan dibuat pada tahap berikutnya.
        </p>
      </div>
    </>
  );
}
