import { useState } from "react";

export const useGeolocation = () => {
  const [geoState, setGeoState] = useState({
    lat: 0,
    lon: 0,
    source: "",
    loading: false,
    error: null as string | null,
  });

  const start = () => setGeoState({ ...geoState, lat: 10, lon: 20, source: "auto", loading: true });
  const stop = () => setGeoState({ ...geoState, loading: false });
  const setManualLocation = (lat: number, lon: number) => setGeoState({ ...geoState, lat, lon, source: "manual" });

  return { geoState, start, stop, setManualLocation };
};
