import styles from "@/app/contacts/contacts.module.css";
import type { ContactDepartment, ContactRequisites } from "@/types/contacts";

/**
 * Блок под картой: сетка телефонов по отделам и серая плашка с реквизитами
 * справа (`.contact-places` оригинала). На планшете колонки складываются
 * друг под друга, сетка отделов становится двухколоночной, на мобильном — одной.
 */
export function ContactPlaces({
  departments,
  requisites,
}: {
  departments: ContactDepartment[];
  requisites: ContactRequisites;
}) {
  if (departments.length === 0 && !requisites.text) return null;

  return (
    <div className={styles.contactPlaces}>
      {departments.length > 0 ? (
        <div className={styles.contactPlacesItems}>
          {departments.map((department) => (
            <div key={department.id} className={styles.placeCard}>
              <div className={styles.text15}>{department.title}</div>
              <div className={styles.placeCardDesc}>
                <a
                  href={`tel:${department.phone.tel}`}
                  className={`${styles.placeCardLink} ${styles.text18}`}
                >
                  {department.phone.label}
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.stateBox}>Телефоны отделов пока не заполнены.</p>
      )}

      {requisites.text ? (
        <div className={styles.requisites}>
          <div className={`${styles.text16} ${styles.medium}`}>{requisites.title}</div>
          <div className={styles.text12}>{requisites.text}</div>
        </div>
      ) : null}
    </div>
  );
}
