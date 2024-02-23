import axios from "axios";
import { endpoints } from "./endPoints";

export async function handleRequest(endpoint, payload, auth, method) {
  console.log("URL", `${endpoints.BASEURL}${endpoint}`);
  const headers = {
    "Content-Type": "application/json",
  };

  // if (auth) {
  //   // Get the token from cookies
  //   const { value } = cookies().get("token");
  //   headers["Authorization"] = `Bearer ${value}`;
  // }

  try {
    let response;
    if (method === "GET") {
      response = await axios.get(`${endpoints.BASEURL}${endpoint}`, {
        headers: headers,
      });
    } else if (method === "POST") {
      response = await axios.post(
        `${endpoints.BASEURL}${endpoint}`,
        JSON.stringify(payload),
        {
          headers: headers,
        }
      );
    } else if (method === "PUT") {
      response = await axios.put(
        `${endpoints.BASEURL}${endpoint}`,
        JSON.stringify(payload),
        {
          headers: headers,
        }
      );
    } else {
      throw new Error("Unsupported HTTP method");
    }

    return response.data;
  } catch (error) {
    // Return the error message
    console.error("Error in handleRequest:", error.message);
    return { error: error.message };
  }
}
