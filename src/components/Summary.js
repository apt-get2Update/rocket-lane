import React, { useState } from "react";
import User from "./User";
export default function Summary(props) {
  const [tap, selectTap] = useState(0);
  const { emojis = [], reactedUsers, content, users } = props;
  const filter = (c) => {
    if (tap == 0) return true;
    return c.content_id == content.id && c.reaction_id == tap;
  };
  return (
    <div className="summary">
      <div className="summary-header">Reactions</div>
      <div className="tap-wrapper">
        <span
          onClick={(event) => {
            selectTap(0);
            event.stopPropagation();
          }}
          className={tap == 0 ? "tap tap-selected" : "tap"}
        >
          All
        </span>
        {emojis.map((e) => (
          <span
            className={tap == e.id ? "tap tap-selected" : "tap"}
            key={e.id}
            onClick={(event) => {
              selectTap(e.id);
              event.stopPropagation();
            }}
          >
            {e.emoji}.
            {
              reactedUsers.filter(
                (c) => c.content_id == content.id && c.reaction_id == e.id
              ).length
            }
          </span>
        ))}
      </div>
      <div className="tap-body">
        {reactedUsers.filter(filter).map((user) => (
          <User
            key={user.id}
            emoji={emojis.find((e) => e.id == user.reaction_id)}
            user={users.find((u) => u.id == user.user_id)}
          />
        ))}
      </div>
    </div>
  );
}
