import { PlayerProvider } from "./domains/player/PlayerContext";
import PlayerSelection from "./domains/player/components/PlayerSelection";

function App() {
  return (
    <PlayerProvider>
      <div className="min-h-screen bg-slate-100">
        <div className="bg-black text-white text-center font-bold p-1.5">
          EuroStat
        </div>
        <div className="text-center font-bold text-2xl mt-6">
          <span>vs</span>
        </div>
        <PlayerSelection />
      </div>
    </PlayerProvider>
  );
}

export default App;
