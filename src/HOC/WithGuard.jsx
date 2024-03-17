import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const WithGuard = ({ children }) => {
  const [showButton, setShowButton] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [location]);

  return showButton && children;
};

export default WithGuard;
