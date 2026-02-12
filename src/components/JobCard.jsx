function JobCard({ job }) {
  return (
    <div
      className="border rounded-xl p-4 bg-white shadow-sm 
                hover:shadow-lg hover:scale-105 
                transition duration-300 ease-in-out"
    >
      <h2 className="text-lg font-semibold mb-1">{job.title}</h2>

      <p className="text-sm flex items-center gap-2">
        <span className="text-gray-700 font-medium">{job.company}</span>
        <span className="text-gray-700 pt-1.5 font-bold">*</span>
        <span className="text-gray-600 font-medium">{job.location}</span>
      </p>

      <span className="inline-block mt-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
        {job.type}
      </span>
    </div>
  );
}

export default JobCard;
