import { Product } from "../types/product";

/** Генерирует URL плейсхолдера-изображения (пока нет настоящих фото товаров). */
function placeholderImage(text: string, bg: string = "f4f4f5"): string {
  return `https://placehold.co/700x700/${bg}/3f3f46.png?text=${encodeURIComponent(text)}`;
}

export const staticProducts: Product[] = [
  {
    id: "1",
    title: "Дрель-шуруповерт аккумуляторная MAKITA DF 347DWE14 В 1,5 А/ч",
    price: 12789,
    image: placeholderImage("MAKITA DF347DWE", "f4f4f5"),
    gallery: [
      placeholderImage("Вид спереди", "e4e4e7"),
      placeholderImage("Вид сбоку", "d4d4d8"),
      placeholderImage("В кейсе", "a1a1aa"),
      placeholderImage("С аккумулятором", "e4e4e7"),
    ],
    category: "Электроинструмент",
    description: "Легкая и компактная дрель-шуруповерт предназначена для профессионального и бытового использования. Оснащена электронным регулированием скорости и удобной эргономичной рукояткой.",
    inStock: true,
    specs: [
      { label: "Тип товара", value: "Дрель-шуруповерт" },
      { label: "Бренд", value: "MAKITA" },
      { label: "Назначение инструмента", value: "профессиональный" },
      { label: "Мощность (Вт)", value: "18" },
      { label: "Емкость АКБ (А/ч)", value: "1,5" },
      { label: "Крутящий момент макс. (Н/м)", value: "30" },
      { label: "Напряжение аккумулятора (В)", value: "14,4" },
      { label: "Вес (кг)", value: "1,4" },
      { label: "Тип патрона", value: "быстрозажимной" },
      { label: "Тип аккумулятора", value: "Li-Ion" },
    ],
  },
  {
    id: "2",
    title: "Грунтовка укр. д/впит осн. СТ 17/10 10л Церезит (60 шт)",
    price: 1460,
    image: placeholderImage("Ceresit CT17", "f4f4f5"),
    gallery: [
      placeholderImage("Упаковка", "e4e4e7"),
      placeholderImage("Этикетка", "d4d4d8"),
      placeholderImage("Нанесение", "a1a1aa"),
    ],
    category: "Сухие смеси",
    description: "Грунтовка Церезит CT 17 Про — профессиональная грунтовка глубокого проникновения для применения на объектах с повышенными требованиями к качеству и долговечности отделки.",
    inStock: true,
    specs: [
      { label: "Страна производитель", value: "Россия" },
      { label: "Тип товара", value: "Грунтовка" },
      { label: "Вес (кг)", value: "10" },
      { label: "Максимальный размер скидки", value: "20" },
    ],
  },
  {
    id: "3",
    title: "Гидроизоляция CL55 5кг Церезит",
    price: 4300,
    image: placeholderImage("Ceresit CL55", "f4f4f5"),
    gallery: [
      placeholderImage("Упаковка", "e4e4e7"),
      placeholderImage("Нанесение", "d4d4d8"),
    ],
    category: "Сухие смеси",
    description: "Эластичная гидроизоляционная масса для защиты строительных конструкций от воздействия влаги и воды внутри и снаружи зданий.",
    inStock: true,
    specs: [
      { label: "Бренд", value: "Церезит" },
      { label: "Вес (кг)", value: "5" },
      { label: "Применение", value: "Внутреннее и наружное" },
    ],
  },
];
