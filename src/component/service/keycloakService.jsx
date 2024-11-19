import axios from "axios";

const KEYCLOAK_URL = "http://localhost:9090/realms/dev/protocol/openid-connect/token";

const getKeycloakToken = async (username, password) => {
  const data = new URLSearchParams({
    client_id: "c_dev", // Replace with your Keycloak Client ID
    client_secret: "pydqjX0JXDTTcCOZ3rNcGoWVpFTNUFIk",
    grant_type: "password",
    username,
    password,
    scope: "openid", // Scopes to request
  });

  try {
    const response = await axios.post(KEYCLOAK_URL, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data; // Contains access_token and id_token
  } catch (error) {
    console.error("Failed to authenticate:", error.response?.data || error.message);
    throw error;
  }
};

export default getKeycloakToken;
