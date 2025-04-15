export default async function RevisionHub() {
    const revisionItems = await fetchRevisionItems(); // Server-side fetch
  
    return (
      <div className="p-4">
        <h1 className="text-3xl font-bold">Revision Hub</h1>
        <div className="tabs">
          <a className="tab tab-lifted">All</a>
          <a className="tab tab-lifted">Quizzes</a>
          <a className="tab tab-lifted">Notes</a>
        </div>
        <input type="text" placeholder="Search" className="input input-bordered w-full my-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {revisionItems.map(item => (
            <div key={item.id} className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>Type: {item.type}</p>
                <button className="btn btn-primary">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }