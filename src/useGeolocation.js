import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [positionData, setPositionData] = useState({
    message: "Allow location access"
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        p => setPositionData(p),
        e => setPositionData(e)
      );
    } else {
      return null;
    }
  }, []);
  return positionData;
};
export default useGeolocation;
