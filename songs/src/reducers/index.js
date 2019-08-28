import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:04" },
    { title: "Macarena", duration: "2:08" },
    { title: "I want it That Way", duration: "4:16" },
    { title: "Cha Cha Slide", duration: "4:16" }
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
})