import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Productmap from "./products/page";

export default function HomePage() {
  return (
    <>
   

      <main className="min-w-0 max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 border-b border-gray-200 pb-5">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Mahsulotlar katalogi
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Sifatli qurilish materiallari va jihozlarining keng tanlovi.
          </p>
        </div>

        <Productmap />
      </main>
    </>
  );
}
