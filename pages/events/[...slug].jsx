import { useRouter } from "next/router";

function FilteredEventsPage() {
  const router = useRouter();
  const filteredData = router.query.slug; // returns an array

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid Input.</p>;
  }
  return <div>Filtered Events</div>;
}

export default FilteredEventsPage;
