import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { json } from "./components/surveyQuestions/surveyJson";
import axios from "axios";

function App() {
  const survey = new Model(json);
  survey.onComplete.add(async (sender) => {
    let msg = sender.data;
    console.log(msg);
    try {
      await axios.post("http://localhost:5000/", {
        msg,
      });
    } catch (e) {
      console.log(e);
    }
  });
  return <Survey model={survey} />;
}

export default App;
