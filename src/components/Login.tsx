import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Shield } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { GoogleLogin } from "@react-oauth/google";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

interface User {
  email?: string;
  name?: string;
  image?: string;
}

const authAPI = {
  loginWithGoogle: async (googleToken: string) => {
    await api.post("/auth/google", { token: googleToken });
    const res = await api.get("/auth/me");
    return res.data;
  },
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const { login } = useAuth();   // ✅ moved here
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleLogin = async (googleToken: string) => {
    setIsLoading(true);
    setError("");
    try {
      const user: User = await authAPI.loginWithGoogle(googleToken);
      login(user); // ✅ works now
      navigate("/profile");
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || "Google login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen flex justify-center px-4 py-20 relative overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-b from-[#1A0033] to-[#2D1B69]"
          : "bg-gradient-to-b from-gray-50 to-white"
      }`}
    >
      <div
        className={`relative z-10 p-8 rounded-3xl shadow-2xl w-full max-w-md border ${
          isDarkMode
            ? "bg-gray-900/95 dark:border-white/20"
            : "bg-white/95 border-gray-200"
        }`}
      >
        <div className="text-center mb-8">
          <Shield className="w-10 h-10 text-purple-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-purple-600">Login</h2>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
            {error}
          </div>
        )}

        {/* Google Login Button */}
        <div className="my-6 flex justify-center">
          <GoogleLogin
            onSuccess={(res) => {
              if (res.credential) handleGoogleLogin(res.credential);
            }}
            onError={() => setError("Google login failed")}
          />
        </div>

        {isLoading && (
          <p className="text-center text-sm text-gray-500">Logging in...</p>
        )}

        <p className="text-center mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-purple-600">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
