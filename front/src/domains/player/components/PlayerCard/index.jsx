import PropTypes from 'prop-types';
import { ChevronRight, Clock } from "../../../common/Icons";
import { formatHeight, formatWeight, formatAge } from "../../utils";

const PlayerCard = ({ player }) => {
  return (
    <div className="font-black w-fit bg-white p-4 rounded-sm shadow shadow-slate-300">
      <div className="flex flex-col items-center">
        <img
          className="w-20 h-20 rounded-full"
          src={player.picture}
          alt="player picture"
        />
        <p className="text-neutral-500 mt-2 text-md'">
          {player.firstname} {player.lastname}
        </p>
      </div>
      <p className="text-center text-xs">Rank: {player.data.rank}</p>
      <div className="text-xs mt-4">
        <p className="uppercase">stats</p>
        <div className="w-80 bg-slate-100 rounded-md mt-2 p-2">
          <div>
            <span className="font-medium">Points:</span> &nbsp;
            <span className="font-bold">{player.data.points}</span>
          </div>

          <div>
            <span className="font-medium">Height:</span> &nbsp;
            <span className="font-bold">
              {formatHeight(player.data.height)}
            </span>
          </div>

          <div>
            <span className="font-medium">Wheight:</span> &nbsp;
            <span className="font-bold">
              {formatWeight(player.data.weight)}
            </span>
          </div>

          <div>
            <span className="font-medium">Age:</span> &nbsp;
            <span className="font-bold">{formatAge(player.data.age)}</span>
          </div>
        </div>
      </div>

      <div className="w-full p-2 bg-black text-white rounded-md mt-2 flex items-center justify-center">
        <div className="flex items-center gap-1.5 w-fit">
          <span>
            <Clock className="fill-white h-3.5 w-3.5" />
          </span>
          <span className="text-xs font-light">Total played time :</span> &nbsp;
          <span className="font-medium">193 hours</span>
        </div>
      </div>

      <div className="flex flex-row justify-end mt-4 cursor-pointer">
        <div className="flex flex-row items-center gap-1.5 w-fit">
          <span className="text-slate-600 font-light text-xs">See details</span>
          <ChevronRight className="fill-slate-600 h-2.5 w-2.5" />
        </div>
      </div>
    </div>
  );
};

PlayerCard.propTypes = {
  player: PropTypes.shape({
    country: PropTypes.shape({
      code: PropTypes.string,
      picture: PropTypes.string,
    }),
    data: PropTypes.shape({
      age : PropTypes.number,
      height : PropTypes.number,
      last : PropTypes.arrayOf(PropTypes.number),
      points : PropTypes.number,
      rank : PropTypes.number,
      weight : PropTypes.number
    }),
    firstname : PropTypes.string,
    id : PropTypes.number,
    lastname : PropTypes.string,
    picture : PropTypes.string,
    sex : PropTypes.string,
    shortname : PropTypes.string
  })
};

export default PlayerCard;
