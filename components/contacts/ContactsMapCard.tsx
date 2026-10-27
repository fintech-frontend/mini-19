import styles from "@/app/contacts/contacts.module.css";
import type { ContactsCard, ContactsMap } from "@/types/contacts";

/**
 * Карта с белой карточкой поверх неё (блок `.contacts__grid` оригинала).
 *
 * На десктопе карточка абсолютно спозиционирована справа по центру карты, на
 * планшете прижата к правому краю с отступом, на мобильном становится обычным
 * блоком и «наезжает» на карту отрицательным margin-top.
 */
export function ContactsMapCard({ map, card }: { map: ContactsMap; card: ContactsCard }) {
  const { address, phone, email, schedule } = card;

  return (
    <div className={styles.contactsGrid}>
      <div className={styles.map}>
        {/* Атрибуты <iframe> повторяют виджет оригинала: он не переживает
            lazy-загрузку и урезанный Referer — карта тогда отдаёт пустой холст. */}
        {map.embedUrl ? (
          <iframe
            src={map.embedUrl}
            title={map.title}
            width="100%"
            height="100%"
            allowFullScreen
            allow="geolocation"
          />
        ) : (
          <div className={styles.mapFallback}>Карта временно недоступна</div>
        )}
      </div>

      <div className={styles.contactsCard}>
        <div
          className={styles.contactsCardInner}
          itemScope
          itemType="https://schema.org/LocalBusiness"
        >
          <span
            className={`${styles.text17} ${styles.bold} ${styles.contactsCardTitle}`}
            itemProp="name"
          >
            {card.legalName}
          </span>

          <ContactItem icon="/contacts/contact-icon.svg" title="Адрес:">
            <div
              className={`${styles.text15}`}
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <span itemProp="postalCode">{address.postalCode}</span>
              {", "}
              {address.region}
              {", "}
              <span itemProp="addressLocality">{address.locality}</span>
              {", "}
              <span itemProp="streetAddress">{address.street}</span>
            </div>
          </ContactItem>

          <ContactItem icon="/contacts/contact-icon2.svg" title="Телефон:">
            <a href={`tel:${phone.tel}`} className={`${styles.contactItemPhone} ${styles.text17}`}>
              <span itemProp="telephone">{phone.label}</span>
            </a>
          </ContactItem>

          <ContactItem icon="/contacts/contact-icon3.svg" title="Email адрес:">
            <a href={`mailto:${email}`} className={`${styles.contactItemEmail} ${styles.text15}`}>
              <span itemProp="email">{email}</span>
            </a>
          </ContactItem>

          <ContactItem title="Время работы:">
            <div className={styles.text15}>
              <time itemProp="openingHours" dateTime={schedule.machine}>
                {schedule.label}
              </time>
              <br />
              {schedule.note}
            </div>
          </ContactItem>

          {/*
            В оригинале кнопка открывает модальное окно «Заказать звонок», которого
            в этом проекте пока нет. Чтобы поведение было честным и доступным, ведём
            на тот же номер, что и в карточке.
          */}
          <a
            href={`tel:${phone.tel}`}
            className={`${styles.btnBlue} ${styles.contactsCardBtn}`}
          >
            <span>{card.callButtonLabel}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

/**
 * Строка карточки: иконка слева, заголовок и описание справа. У блока «Время
 * работы» иконки нет — тогда контент занимает вторую колонку сетки, как в оригинале.
 */
function ContactItem({
  icon,
  title,
  children,
}: {
  icon?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.contactItem}>
      {icon ? (
        <div className={styles.contactItemImg}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={icon} alt="" aria-hidden="true" />
        </div>
      ) : null}
      <div className={styles.contactItemContent}>
        <div className={styles.contactItemTitle}>
          <div className={`${styles.text17} ${styles.bold}`}>{title}</div>
        </div>
        <div className={styles.contactItemDesc}>{children}</div>
      </div>
    </div>
  );
}
