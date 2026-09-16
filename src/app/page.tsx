"use client";

import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Footer from "@/components/landing/Footer";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import NumberInput from "@/components/ui/NumberInput";
import Checkbox from "@/components/ui/CheckBox";
import DatePicker from "@/components/ui/DatePicker";
import Card from "@/components/ui/Card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import Badge from "@/components/ui/Badge";
import FormCard from "@/components/e-cerapan/form/FormCard";
import FormSection from "@/components/e-cerapan/form/FormSection";
import FormField from "@/components/e-cerapan/form/FormField";
import FormActions from "@/components/e-cerapan/form/FormActions";
import AlertMessage from "@/components/e-cerapan/feedback/AlertMessage";
import ConfirmModal from "@/components/e-cerapan/feedback/ConfirmModal";
import MessageModal from "@/components/e-cerapan/feedback/MessageModal";
import StatCard from "@/components/e-cerapan/cards/StatCard";
import Breadcrumb from "@/components/e-cerapan/layout/Breadcrumb";
import RadioGroup from "@/components/ui/RadioGroup";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Input type="email" placeholder="Masukkan email" />
      <Select
        placeholder="Pilih jenis alat"
        options={[
          {
            label: "Pompa Ukur BBM",
            value: "pompa-ukur-bbm",
          },
          {
            label: "Meter Arus",
            value: "meter-arus",
          },
        ]}
      />
      <Textarea placeholder="Masukkan keterangan" />
      <NumberInput min={0} step="0.01" placeholder="Masukkan nilai" />
      <Checkbox label="Sudah diperiksa" />
      <RadioGroup
        name="penilaian"
        value={value}
        onChange={setValue}
        options={[
          {
            label: "Ya",
            value: "ya",
          },
          {
            label: "Tidak",
            value: "tidak",
          },
        ]}
      />
      <DatePicker />
      <Card className="p-6 w-40">
        <p>Isi card</p>
      </Card>

      <Badge variant="warning">SAH</Badge>

      <FormCard title="Data Pengujian">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>No</TableHeader>
              <TableHeader>Deskripsi</TableHeader>
              <TableHeader>Penilaian</TableHeader>
              <TableHeader>Keterangan</TableHeader>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>
                Apakah PU BBM dilengkapi dengan persetujuan tipe?
              </TableCell>
              <TableCell>...</TableCell>
              <TableCell>...</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </FormCard>
      <FormSection
        title="Identitas Pemilik"
        description="Masukkan data pemilik atau penanggung jawab."
      >
        ...
      </FormSection>
      <FormField label="Nomor Order" required>
        <Input placeholder="cth. ORD-0001" />
      </FormField>
      <FormActions
        left={
          <Button variant="outline" fullWidth>
            Kembali ke Pemeriksaan
          </Button>
        }
        right={<Button fullWidth>Lanjut ke Pengujian</Button>}
      />
      <AlertMessage
        variant="danger"
        message="Lengkapi semua penilaian checklist sebelum validasi"
      />
      {/* <ConfirmModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={handleSave}
        title="Konfirmasi Pengiriman"
        description="Tindakan ini tidak dapat dibatalkan"
        confirmText="Konfirmasi & Simpan"
      >
        <div className="space-y-3 border-y border-gray-200 py-4">
          <div className="flex justify-between text-sm">
            <span className="text-neutral">No. Pengujian</span>
            <span className="font-semibold text-black">PU-BBM-2024-0847</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-neutral">Tanggal</span>
            <span className="font-semibold text-black">2026-09-13</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-neutral">Jenis Alat</span>
            <span className="font-semibold text-black">Pompa Ukur BBM</span>
          </div>
        </div>
      </ConfirmModal> */}
      {/* <MessageModal
        open={showMessage}
        onClose={() => setShowMessage(false)}
        variant="success"
        title="Berhasil"
        message="Data pengujian berhasil disimpan."
      /> */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard value={3} label="Nozzle Batal" valueColor="primary" />
        <StatCard value={3} label="Nozzle Batal" valueColor="success" />
        <StatCard value={3} label="Nozzle Batal" valueColor="neutral" />
        <StatCard value={2} label="Nozzle Batal" valueColor="danger" />
      </div>
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
      <Footer />
    </main>
  );
}
