import React from "react";
import EmojiButton from "./EmojiButton";
export default function Content({
  content,
  reactions,
  user,
  users,
  reactedUsers,
  reactionHandler,
  selectSummary,
  selectedSummary,
}) {
  console.log(content);
  return (
    <div className="card">
      <div className="card-body">
        <div
          style={{
            fontWeight: "bold",
            borderBottom: "1px solid #ae4444",
            padding: "1rem",
          }}
        >
          {content.item}
        </div>
        <div className="block">
          <div className="flex">
            <div>Representative Name </div>:
            <div>{content.representative_name}</div>
          </div>
          <div className="flex">
            <div>region </div>:<div> {content.region}</div>
          </div>
          <div className="flex">
            <div>total</div> : <div>{content.total}</div>
          </div>
          <div className="flex">
            <div>unit_cost </div>: <div>{content.unit_cost}</div>
          </div>
          <div className="flex">
            <div>quantity </div>: <div>{content.quantity}</div>
          </div>
        </div>
      </div>

      <hr />
      <div className="emoji-container">
        <EmojiButton
          reactionHandler={reactionHandler}
          content={content}
          emojis={reactions}
          user={user}
          users={users}
          reactedUsers={reactedUsers}
          selectSummary={selectSummary}
          selectedSummary={selectedSummary}
        />
      </div>
    </div>
  );
}
