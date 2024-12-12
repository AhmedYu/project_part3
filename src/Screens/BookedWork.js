export default function BookedWork({ acceptedJobs }) {
  return (
    <div className="container">
      <h2>Booked Work</h2>
      {acceptedJobs.length === 0 ? (
        <p>No jobs booked yet.</p>
      ) : (
        <ul>
          {acceptedJobs.map((job) => (
            <li key={job.id}>
              <strong>{job.title}</strong> - {job.location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
