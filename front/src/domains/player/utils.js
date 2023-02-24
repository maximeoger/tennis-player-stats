export const selectTwoRandomPlayers = (players) => {
  let playersToCompare = players;
  let selection = [];

  const getRandomPlayerFromList = () =>
    playersToCompare[Math.floor(Math.random() * playersToCompare.length)];
  const removePlayerFromList = (playerIndex) =>
    playersToCompare.splice(playerIndex, 1);

  for (let i = 0; i < 2; i++) {
    let selectedPlayer = getRandomPlayerFromList();
    selection.push(selectedPlayer);
    removePlayerFromList(playersToCompare.indexOf(selectedPlayer));
  }

  return selection;
};

export const formatWeight = (value) =>
  (value / 1000).toFixed().toString() + "Kg";
export const formatHeight = (value) =>
  (value / 100).toString().replace(".", "m");
export const formatAge = (value) => value.toString() + " ans";
