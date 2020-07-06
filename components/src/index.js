import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetails from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
const App = () => {
  return (
    <div className="ui contaner comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>Do you want to continue?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Sam"
          timeAgo="Today at 4:45PM"
          message="Very Good!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Alex"
          timeAgo="Today at 2:00AM"
          message="I love it"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Jane"
          timeAgo="Yesterday at 5:00PM"
          message="Sarange"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
