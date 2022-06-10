import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";

function AllEventsPage() {
  const allEvents = getAllEvents();
  return (
    <div>
      <EventsSearch />
      <EventList items={allEvents} />
    </div>
  );
}

export default AllEventsPage;
