export default async function NotesViewer({ params }) {
    const note = await fetchNote(params.noteId);
  
    return (
      <div className="modal modal-open">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{note.title}</h3>
          {note.format === 'text' ? (
            <p>{note.content}</p>
          ) : note.format === 'pdf' ? (
            <a href={note.content} className="btn btn-primary">Download PDF</a>
          ) : (
            <img src={note.content} alt="Note" />
          )}
          <div className="modal-action">
            <button className="btn">Close</button>
          </div>
        </div>
      </div>
    );
  }