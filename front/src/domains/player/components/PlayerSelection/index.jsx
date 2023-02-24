import usePlayerContext from "../../PlayerContext";
import PlayerCard from "../PlayerCard";

const PlayerSelection = () => {
  const { selectedPlayers } = usePlayerContext();
  return (
    <div className="mt-8 flex space-x-16 justify-center">
      {selectedPlayers &&
        selectedPlayers.map((player, index) => (
          <div data-testid={`player-card-${index}`} key={player.id}>
            <PlayerCard player={player} />
          </div>
        ))}
    </div>
  );
};

export default PlayerSelection;
