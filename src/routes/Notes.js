import { Suspense, useMemo } from "react";
import { Await, defer, NavLink, useLoaderData } from "react-router-dom";
import Draggable from "react-draggable";
import { useUserContext } from "../components/userContext";

function Notes() {
  const { notes } = useLoaderData();
  const { user } = useUserContext();

  const handleDelNote = (e) => {
    fetch(`http://localhost:5000/notes/${e.currentTarget.id}`, {
      method: "DELETE",
    });
    window.location.reload();
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold text-center my-2">Notes</h1>
      <h2 className="text-2xl text-center my-1">You can drag all notes!</h2>
      <NavLink
        to="/create"
        className="bg-slate-200 rounded-md p-2 text-xl m-auto my-2"
      >
        Create Note
      </NavLink>
      <div className="flex flex-wrap">
        <Suspense fallback={<h2 className="text-xl">Loading...</h2>}>
          <Await resolve={notes}>
            {(resNotes) => {
              return resNotes.map((note) => {
                if (user.id === note.userId) {
                  return (
                    <Draggable>
                      <div
                        key={note.id}
                        className="border-4 w-80 flex flex-col gap-3 p-2 m-5 bg-slate-100"
                      >
                        <h3 className="text-2xl border-b-2 text-center">
                          {note.title}
                        </h3>
                        <h3 className="text-xl">{note.body}</h3>
                        <h3 className="text-md text-center">
                          {note.createdAt}
                        </h3>
                        <div>
                          <button id={note.id} onClick={handleDelNote}>
                            <img
                              src="del.png"
                              alt="del"
                              width="20"
                              height="20"
                            />
                          </button>
                        </div>
                      </div>
                    </Draggable>
                  );
                }
              });
            }}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}

export const getNotes = async () => {
  const notes = await fetch(`http://localhost:5000/notes`);
  return notes.json();
};

export const notesLoader = async () => {
  return defer({
    notes: getNotes(),
  });
};

export default Notes;
