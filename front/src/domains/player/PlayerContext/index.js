import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { selectTwoRandomPlayers } from "../utils";

const PlayerContext = createContext(null);

export function PlayerProvider({ children }) {
  const [selectedPlayers, setSelectedPlayers] = useState(null);

  useEffect(() => {
    getPlayers();
  }, []);

  const getPlayers = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/api/players`
      );
      const selection = selectTwoRandomPlayers(response.data.players);
      setSelectedPlayers(selection);
    } catch (error) {
      throw new Error("ERROR");
    }
  };

  return (
    <PlayerContext.Provider value={{ selectedPlayers }}>
      {children}
    </PlayerContext.Provider>
  );
}

export default function usePlayerContext() {
  return useContext(PlayerContext);
}
