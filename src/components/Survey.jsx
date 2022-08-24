import React, { useState } from "react";
import { useNavigate, useHistory } from "react-router-dom";

const Survey = (props) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const sendSurvey = (e) => {
    e.preventDefault();
    // do something with the data
    navigate("/results");
  };

  return (
    <form onSubmit={sendSurvey}>
      <label>Your Name:</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <label>Your Comment:</label>
      <textarea
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      ></textarea>
      <input type="submit" value="Submit Survey" />
    </form>
  );
};
export default Survey;
