import api from "../utils/api";

interface AuthResponse {
  token?: string;
  error?: string;
}

/**
 * ✅ Register a New User
 * @param email - User's email address
 * @param password - User's password
 * @returns JSON response or error
 */
export const registerUser = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    const response = await api.post("/api/auth/register", { email, password });
    return response.data;
  } catch (error: any) {
    console.error("❌ Registration Error:", error.response?.data || error);
    return { error: error.response?.data?.error || "Registration failed" };
  }
};

/**
 * 🔑 Login User
 * @param email - User's email address
 * @param password - User's password
 * @returns JSON response with token or error
 */
export const loginUser = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    const response = await api.post("/api/auth/login", { email, password });

    // ✅ Store token in localStorage
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }

    return response.data;
  } catch (error: any) {
    console.error("❌ Login Error:", error.response?.data || error);
    return { error: error.response?.data?.error || "Login failed" };
  }
};

/**
 * 🚪 Logout User
 */
export const logoutUser = () => {
  localStorage.removeItem("token");
};
