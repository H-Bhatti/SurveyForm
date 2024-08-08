import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { json } from "./components/surveyQuestions/surveyJson";

function App() {
  const survey = new Model(json);
  survey.onComplete.add((sender) => {
    console.log(sender.data);
  });
  return <Survey model={survey} />;
}

export default App;
