const songsReducer = () => {
  return [
    { title: "no scrubs", duration: "4:05" },
    { title: "allstar", duration: "2:30" },
    { title: "I want it all", duration: "3:00" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
