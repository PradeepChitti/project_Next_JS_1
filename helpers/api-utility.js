export async function getAllEvents() {
  const response = await fetch(
    "https://next-js-course-d118a-default-rtdb.asia-southeast1.firebasedatabase.app/events.json"
  );
  const data = await response.json();
  // Firebase returns your data as an object. Hence converting into an array.
  const events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}
