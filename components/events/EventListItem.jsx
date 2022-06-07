import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";
import Button from "../ui/Button";
import styles from "./EventListItem.module.css";

const EventListItem = ({ title, image, date, location, id }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const formattedImage = `/${image}`;
  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      {/* Image */}
      <img src={formattedImage} alt={title} />
      {/* Description Container */}
      <div className={styles.content}>
        {/* Details */}
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{formattedDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        {/* Link */}
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore the event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventListItem;
