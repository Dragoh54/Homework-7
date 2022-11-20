import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import { useUserContext } from "../components/userContext";

function Notes() {
  const { notes } = useLoaderData();
  const { user } = useUserContext();
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">Notes</h1>
      <Suspense fallback={<h2 className="text-xl">Loading...</h2>}>
        <Await resolve={notes}>
          {(resNotes) => {
            return resNotes.map((note) => {
              if (user.id === note.userId) {
                return (
                  <div key={note.id}>
                    <h3>{note.title}</h3>
                    <h2>{note.body}</h2>
                  </div>
                );
              }
            });
          }}
        </Await>
      </Suspense>
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
