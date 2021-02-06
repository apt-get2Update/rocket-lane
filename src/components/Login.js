import React from "react";
import api from "../utils/api";
export default function Login(props) {
  const [error, setError] = React.useState(null);
  const [email, handleInput] = React.useState();
  const handleLogin = async () => {
    const data = await api.login(email);
    console.log(data);
    if (data.length > 0) {
      props.handleLogin(data[0]);
    }
    setError("invalid User");
  };
  return (
    <section>
      <h3>Enter Your Email address</h3>
      <input type="text" onChange={(e) => handleInput(e.target.value)} />
      <button onClick={handleLogin}>Goto</button>
      {error && <div>Given Email Id not Found</div>}
    </section>
  );
}
