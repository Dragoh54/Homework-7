import { Suspense } from "react";
import {
  Await,
  Link,
  redirect,
  useLoaderData,
  useNavigate,
} from "react-router-dom";

function Note() {
  const navigate = useNavigate();

  const { notes } = useLoaderData();

  const goBack = () => {
    return navigate(-1);
  };

  const handleDelNote = (e) => {
    fetch(`http://localhost:5000/notes/${e.currentTarget.id}`, {
      method: "DELETE",
    });
    return goBack();
  };

  return (
    <div className="w-5/6 mt-20 flex flex-col justify-center mx-auto items-center">
      <div className="text-black pb-5 flex flex-row justify-center pt-5 text-3xl">
        <div className="pt-3 flex justify-center font-semibold">Note</div>
      </div>
      <Suspense fallback={<h2 className="text-xl">Loading...</h2>}>
        <Await resolve={notes}>
          {(resNote) => {
            console.log(resNote);
            return (
              <div className="flex flex-col gap-10 p-10 w-[900px]">
                <div className="flex text-2xl border-b-4 p-2">
                  <h1 className="min-w-[200px] font-semibold">title:</h1>
                  <h1>{resNote.title}</h1>
                </div>
                <div className="flex text-2xl border-b-4 p-2">
                  <h1 className="min-w-[200px] font-semibold">body:</h1>
                  <h1> {resNote.body}</h1>
                </div>
                <div className="flex text-2xl border-b-4 p-2">
                  <h1 className="min-w-[200px] font-semibold">date:</h1>
                  <h1>{resNote.createdAt}</h1>
                </div>
                <div className="flex justify-between mx-5 py-2">
                  <button id={resNote.id} onClick={handleDelNote}>
                    <img src="/del.png" alt="del" width="100" height="100" />
                  </button>
                  <button
                    onClick={goBack}
                    className="flex justify-center p-2 border-2 w-44 h-16 rounded-md bg-slate-100 hover:bg-slate-300 text-3xl my-8"
                  >
                    goBack
                  </button>
                  <Link to={`/edit`}>
                    <img src="/pen.png" alt="del" width="100" height="100" />
                  </Link>
                </div>
              </div>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
}

export const loader = async ({ params: { noteId } }) => {
  const notes = await fetch(`http://localhost:5000/notes/${noteId}`).then(
    (note) => note.json()
  );
  if (Object.keys(notes).length === 0) {
    return redirect("/*");
  }
  return { notes };
};

export default Note;
