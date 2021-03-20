import React, { Component } from "react";

export class Mood extends Component {
  render() {
    const moods = {
      happy: " 😄 ",
      sad: " 😭 ",
    };

    return (
      <div>
        <MoodEmoji mood={moods.happy} />
      </div>
    );
  }
}

export default Mood;

const MoodEmoji = ({ mood }) => {
  return <p>{mood}</p>;
};
