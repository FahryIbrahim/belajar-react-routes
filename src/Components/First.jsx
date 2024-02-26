import { useNavigate } from "react-router-dom";

const First = () => {
    const navigate = useNavigate()
  return (
    <>
      <h2>Homepage Route</h2>
      <button onClick={() => navigate("/about")}>Check About</button>
    </>
  );
};

export default First;
