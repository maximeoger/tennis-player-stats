import usePlayerContext from "../../PlayerContext";
import PlayerCard from "../PlayerCard";

const PlayerSelection = () => {
  const { selectedPlayers } = usePlayerContext();
  return (
    <div className="flex md:flex-row md:space-x-16 md:justify-center md:space-y-0 mt-8 flex-col items-center space-y-4 pb-8">
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
