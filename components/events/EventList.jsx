import React from "react";
import EventListItem from "./EventListItem";

import styles from "./EventList.module.css";

const EventList = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <EventListItem
          key={item.id}
          title={item.title}
          date={item.date}
          location={item.location}
          image={item.image}
          id={item.id}
        />
      ))}
    </ul>
  );
};

export default EventList;
