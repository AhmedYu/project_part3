const WorkHistory = ({ acceptedJobs }) => {
  return (
    <div className="container">
      <h2>Work History</h2>
      {acceptedJobs.length === 0 ? (
        <p>No jobs completed yet.</p>
      ) : (
        <ul>
          {acceptedJobs.map((job) => (
            <li key={job.id}>
              <strong>{job.title}</strong> - {job.date} - {job.location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkHistory;
