import TripRow from "../../components/admin/TripRow";
// import { useLocation } from "react-router-dom";

const MyTrips = () => {
  // const location = useLocation();
  // const isMyTrips = location.pathname.endsWith("/admin/my-trips");
  const trips = [
    {
      score: 72,
      distanceKm: 16.5,
      durationMin: 36,
      startDate: "23 September, 2024",
      endDate: "23 September, 2024",
    },
    {
      score: 54,
      distanceKm: 16.5,
      durationMin: 36,
      startDate: "23 September, 2024",
      endDate: "23 September, 2024",
    },
    {
      score: 12,
      distanceKm: 16.5,
      durationMin: 36,
      startDate: "23 September, 2024",
      endDate: "23 September, 2024",
    },
    {
      score: 72,
      distanceKm: 16.5,
      durationMin: 36,
      startDate: "23 September, 2024",
      endDate: "23 September, 2024",
    },
    {
      score: 54,
      distanceKm: 16.5,
      durationMin: 36,
      startDate: "23 September, 2024",
      endDate: "23 September, 2024",
    },
    {
      score: 12,
      distanceKm: 16.5,
      durationMin: 36,
      startDate: "23 September, 2024",
      endDate: "23 September, 2024",
    },
  ];
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 ">
      <h1 className="text-2xl md:text-3xl font-black text-gray-900">
        Past Trips
      </h1>
      <div className="mt-6 rounded-2xl ring-1 ring-black/10 overflow-hidden p-5">
        <div className="flex items-center uppercase  border-b border-b-black/10 justify-between px-5 py-3 pb-5 text-xs font-semibold text-gray-500">
          <span>Score</span>
          <span className="text-center">Start Date</span>
          <span className="text-right">End Date</span>
        </div>
        <div className="divide-y divide-gray-100">
          {trips.map((t, i) => (
            <TripRow key={i} {...t} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTrips;
