// index.js or App.js
import React from "react";
import { createRoot } from "react-dom";

import "./App.css"; // Import your styles

// Your App component or other components
import App from "./App.tsx";

const rootElement = document.getElementById('root');
createRoot(rootElement).render(<App />);