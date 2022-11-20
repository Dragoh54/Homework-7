import { useUserContext } from "../components/userContext";

function About() {
  const { user } = useUserContext();
  return (
    <div className="flex flex-col">
      <h1>Email: {user.email}</h1>
      <h1>Name: {user.name}</h1>
      <h1>Date of registeration: {user.date}</h1>
    </div>
  );
}

export default About;
