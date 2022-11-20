import { useUserContext } from "../components/userContext";

function Home() {
  const { user } = useUserContext();
  console.log(user);
  return <div>Hello, {user.name}!</div>;
}

export default Home;
