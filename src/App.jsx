import { useState } from "react";
import jobsData from "./data/jobs";
import JobCard from "./components/JobCard";
import Filters from "./components/Filters";

function App() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [type, setType] = useState("All");

  const filteredJobs = jobsData.filter((job) => {
    return (
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (location === "All" || job.location === location) &&
      (type === "All" || job.type === type)
    );
  });

  return (
    <div
      className="min-h-screen p-6 bg-linear-to-r from-gray-200 to-indigo-400
"
    >
      <h1 className="text-2xl font-bold mb-6 text-center">Job Listing Board</h1>
      <Filters
        search={search}
        setSearch={setSearch}
        location={location}
        setLocation={setLocation}
        type={type}
        setType={setType}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <p>No jobs found</p>
        )}
      </div>
    </div>
  );
}

export default App;
