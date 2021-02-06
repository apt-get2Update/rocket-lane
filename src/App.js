import "./App.css";
import React from "react";
import Login from "./components/Login";
import ContentView from "./components/ContentWrapper";

import api from "./utils/api";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      users: [],
      reactedUsers: [],
      reactions: [],
      contents: [],
      selectedSummary:null
    };
  }

  async componentDidMount() {
    const users = await api.getAllUsers();
    const reactions = await api.getReactions();
    const reactedUsers = await api.getReactedDetails();
    const contents = await api.getAllContent();
    this.setState({ users, reactedUsers, reactions, contents });
  }
  handleLogin(data) {
    this.setState({ user: data });
  }
  selectSummary(id){
    console.log(id);
    this.setState({selectedSummary:id})
  }
  async reactionHandler(emoji, user, content) {
    const { reactedUsers } = this.state;
    //deep clone the object
    const temp = JSON.parse(JSON.stringify(reactedUsers));
    const reactions = reactedUsers.filter(
      (r) => r.user_id == user.id && r.content_id == content.id
    );
    const payload = {
      user_id: user.id,
      reaction_id: emoji.id,
      content_id: content.id,
    };
    if (reactions.length == 0) {
      const data = await api.postReaction(payload);
      temp.push(data);
      this.setState({ reactedUsers: temp });
      console.log("post", data);
    } else {
      const reaction = reactions.find((r) => r.reaction_id == emoji.id);
      if (reaction) {
        const data = await api.deleteReaction(reaction.id);
        this.setState({
          reactedUsers: temp.filter((t) => t.id != reactions[0].id),
        });
        console.log("delete", data);
      } else {
        const data = await api.updateReaction(reactions[0].id, payload);
        this.setState({
          reactedUsers: [...temp.filter((t) => t.id != reactions[0].id), data],
        });
        console.log("update", data);
      }
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.user ? (
          <ContentView
            reactionHandler={(emji, user, content) =>
              this.reactionHandler(emji, user, content)
            }
            selectSummary={(id)=>this.selectSummary(id)}
            selectedSummary={this.state.selectedSummary}
            contents={this.state.contents}
            user={this.state.user}
            users={this.state.users}
            reactions={this.state.reactions}
            reactedUsers={this.state.reactedUsers}
          />
        ) : (
          <Login handleLogin={(d) => this.handleLogin(d)} />
        )}
      </div>
    );
  }
}

export default App;
