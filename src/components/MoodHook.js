import React, { useContext, createContext } from "react";

const moods = {
  happy: " 😄 ",
  sad: " 😭 ",
};

const MoodContext = createContext(moods);

export const MoodHook = () => {
  return (
    <MoodContext.Provider value={moods.happy}>
      <MoodEmoji />
    </MoodContext.Provider>
  );
};

const MoodEmoji = () => {
  const mood = useContext(MoodContext);

  return <p>{mood}</p>;
};
