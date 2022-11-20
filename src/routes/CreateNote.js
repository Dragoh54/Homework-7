import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../components/userContext";

function CreateNote() {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSetTitle = useCallback((e) => setTitle(e.target.value), []);
  const handleSetBody = useCallback((e) => setBody(e.target.value), []);

  console.log(user);

  const handleAddNote = useCallback(() => {
    const note = {
      title: title,
      body: body,
      userId: user.id,
      createdAt: new Date().toLocaleString(),
    };

    fetch(`http://localhost:5000/notes`, {
      method: "POST",
      body: JSON.stringify(note),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      navigate("/notes");
    });
  });

  return (
    <div className="flex flex-col ">
      <div className="text-4xl font-bold text-center py-10">
        Create new note
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-2 ">
          <input
            type="text"
            className="w-[900px] h-[50px] px-4 mt-5 bg-slate-100 text-2xl rounded-md active:bg-slate-300"
            placeholder="Name"
            value={title}
            onChange={handleSetTitle}
          />
          <input
            type="text"
            className="w-[900px] h-[200px] px-4 mt-5 bg-slate-100 text-2xl align-top rounded-md active:bg-slate-300"
            placeholder="Note text..."
            value={body}
            onChange={handleSetBody}
          />
        </div>
        <Link
          className="flex justify-center p-2 border-2 w-44 h-16 rounded-md bg-slate-100 hover:bg-slate-300 text-3xl my-8"
          to="/notes"
          onClick={handleAddNote}
        >
          Create
        </Link>
      </div>
    </div>
  );
}

export default CreateNote;
