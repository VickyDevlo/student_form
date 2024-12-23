import { createRoot } from "react-dom/client"; 
import App from "./App.jsx"; 
import AppContextProvider from "./context/StudentAppContext.jsx";

createRoot(document.getElementById("root")).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
