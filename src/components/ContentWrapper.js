import React from "react";
import Content from "./Content";
function ContentWrapper({
  contents,
  user,
  users,
  reactedUsers,
  reactions,
  reactionHandler,
  selectSummary,
  selectedSummary,
}) {
  return (
    <section className="container" onClick={() => selectSummary(null)}>
      {contents.map((c) => (
        <Content
          key={c.id}
          content={c}
          reactions={reactions}
          user={user}
          users={users}
          reactionHandler={reactionHandler}
          reactedUsers={reactedUsers.filter((r) => r.content_id == c.id)}
          selectSummary={selectSummary}
          selectedSummary={selectedSummary}
        />
      ))}
    </section>
  );
}

export default ContentWrapper;
