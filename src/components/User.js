import React from "react";

export default function User({ user, emoji }) {
  return (
    <div className="user">
      <img className="avatar" src={user.avatar} />
      <div style={{ fontSize: "x-large", paddingRight: "1rem" }}>
        {emoji.emoji}
      </div>
      <div>{user.first_name + user.last_name}</div>
    </div>
  );
}
