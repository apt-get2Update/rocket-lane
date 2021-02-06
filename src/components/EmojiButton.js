import React, { useState } from "react";
import Summary from "./Summary";

export default function EmojiButton(props) {
  const {
    reactedUsers = [],
    content,
    user,
    reactionHandler = () => {},
    emojis = [],
    selectSummary,
    selectedSummary,
  } = props;
  const handleClick = (e) => {
    reactionHandler(e, user, content);
  };

  return (
    <div style={{ position: "relative" }} className="wrapper">
      {selectedSummary == content.id && <Summary {...props} />}
      {reactedUsers
        .filter((ru) => ru.content_id == content.id && ru.user_id == user.id)
        .map((ru) => (
          <button
            onClick={(event) => {
              selectSummary(ru.content_id);
              event.stopPropagation();
            }}
            key={ru.id}
            className={"reaction"}
          >
            {emojis.find((e) => e.id == ru.reaction_id) &&
              emojis.find((e) => e.id == ru.reaction_id).emoji}{" "}
            . 1
          </button>
        ))}
      <div className="box">
        <div className="smily-wrapper label-reactions">
          <button className="btn">👍</button>
        </div>
        <div className="toolbox"></div>
        {emojis.map((e, i) => (
          <button
            onClick={() => handleClick(e)}
            key={e.id}
            style={{ left: i * 50 + "px" }}
            className={"reaction-" + e.name}
          >
            {e.emoji}
            <span className="legend-reaction">{e.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
