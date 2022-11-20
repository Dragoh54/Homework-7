import { NavLink, useNavigate } from "react-router-dom";

function EditNote() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex flex-col font-bold text-7xl items-center p-20 gap-4">
      <h1>This page is not done</h1>
      <h2>please return</h2>
      <div className="flex gap-10 justify-between">
        <NavLink to="/" className="text-blue-200">
          <h2>Go Home</h2>
        </NavLink>
        <div className="border-4" />
        <button onClick={goBack} className="pointer">
          GoBack
        </button>
      </div>
    </div>
  );
}

export default EditNote;
