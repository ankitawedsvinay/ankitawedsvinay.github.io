import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { WeddingDataProvider } from "./context/WeddingDataContext.jsx";

const RootComponent = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 300) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  if (isSmallScreen) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "1.5rem",
        }}
      >
        Please choose a larger device to view this page
      </div>
    );
  }

  return (
    <WeddingDataProvider>
      <RouterProvider router={router} />
    </WeddingDataProvider>
  );
};

// Define the routes for the application
const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  },
]);

// Render the root component
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RootComponent />
  </StrictMode>
);
