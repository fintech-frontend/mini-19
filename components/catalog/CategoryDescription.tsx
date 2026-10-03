/**
 * Уникальное описание раздела каталога. Держит один источник правды (sub.description)
 * и ключуется по slug, поэтому при переключении категории/подкатегории старый текст
 * не остаётся на экране — рендерится ровно один блок с содержимым текущего раздела.
 */
export default function CategoryDescription({
  slug,
  paragraphs,
}: {
  slug: string;
  paragraphs?: string[];
}) {
  if (!paragraphs || paragraphs.length === 0) return null;

  return (
    <div key={slug} className="mb-8 max-w-3xl space-y-3 text-sm leading-relaxed text-neutral-600">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}
