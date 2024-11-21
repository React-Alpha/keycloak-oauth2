import axios from "axios";

const backendUrl = "http://localhost:9873/api/secure-endpoint"; // Your Spring Boot API endpoint

const callSecureEndpoint = async (accessToken) => {
  try {
    console.log(accessToken);

    const response = await axios.get(backendUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`, // Attach the access token
      },
    });
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error accessing secure endpoint:",
      error.response?.data || error.message
    );
  }
};

export default callSecureEndpoint;
