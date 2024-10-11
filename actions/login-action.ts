import axios from "axios";

export const loginAction = async ({ email, password }: { email: string; password: string }) => {
  try {
    const client_id = process.env.EXPO_PUBLIC_CLIENT_ID;
    const secret = process.env.EXPO_PUBLIC_CLIENT_SECRET;
    const authUrl = process.env.EXPO_PUBLIC_API_AUTH_URL;

    const response = await axios.post(`${authUrl}/api/v3/auth/login`, {
      email,
      secret,
      password,
      client_id,
      scope: "*",
    });

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
