import { Fragment } from "react";

import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import { getAllEvents, getEventById } from "../../helpers/api-utility";

function EventDetailPage({ event }) {
  if (!event) {
    <p>There is no event found!</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const selectedEvent = await getEventById(eventId);
  return {
    props: {
      event: selectedEvent,
    },
  };
}

// This will tell nextJS for which dynamic values this page should be pre-rendered
export async function getStaticPaths() {
  const events = await getAllEvents(); // return events array
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: paths,
    fallback: false,
  };
}
export default EventDetailPage;
