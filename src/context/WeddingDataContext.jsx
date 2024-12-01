import React, { createContext, useContext } from "react";
import weddingData from "../data.json"; // Import the JSON file

// Define the function to format dates with ordinals
function formatDateWithOrdinal(date) {
  const options = {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  };

  const day = new Date(date).getDate();

  const getSuffix = (day) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const formattedDate = new Date(date).toLocaleDateString("en-US", options);
  return formattedDate.replace(/(\d{1,2})/, day + getSuffix(day));
}

// Create Context
const WeddingDataContext = createContext();

// Provider Component
export const WeddingDataProvider = ({ children }) => {
  const value = { ...weddingData, formatDateWithOrdinal }; // Add the function to the context

  return (
    <WeddingDataContext.Provider value={value}>
      {children}
    </WeddingDataContext.Provider>
  );
};

// Custom Hook to Access Context
export const useWeddingData = () => {
  const context = useContext(WeddingDataContext);
  if (context === undefined) {
    throw new Error("useWeddingData must be used within a WeddingDataProvider");
  }
  return context;
};
