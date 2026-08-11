import Productmap from "./products/page";

export default function HomePage() {
  return (
    <>
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
          Стройоптторг — товары для строительства и ремонта
        </h1>
        <p className="max-w-xl text-neutral-500">
          Доступная цена, скидки постоянным покупателям и быстрая доставка.
        </p>
      </div>

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
