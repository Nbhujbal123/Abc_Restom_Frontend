// Centralized API configuration for RestoM
// Note: All backend routes use /api prefix (defined in Backend/index.js)
export const API_BASE_URL = import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL}/api` : "https://abc-restom-backend.onrender.com/api";
export const API_BASE_URL_WITHOUT_API = import.meta.env.VITE_API_URL || "https://abc-restom-backend.onrender.com";
export const FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL || "https://abc-restom-frontend.onrender.com";
