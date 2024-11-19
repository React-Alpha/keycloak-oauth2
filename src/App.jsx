import { useState } from "react";
import getKeycloakToken from "./component/service/keycloakService";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [tokens, setTokens] = useState(null);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const result = await getKeycloakToken(username, password);
      setTokens(result); // Save the tokens
      setError("");
    } catch (err) {
      setError("Authentication failed. Please check your credentials.", err);
    }
  };

  return (
    <div>
      <h1>Keycloak Login</h1>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {tokens && (
        <div>
          <h3>Access Token:</h3>
          <p>{tokens.access_token}</p>
          <h3>ID Token:</h3>
          <p>{tokens.id_token}</p>
        </div>
      )}
    </div>
  );
};

export default App;
