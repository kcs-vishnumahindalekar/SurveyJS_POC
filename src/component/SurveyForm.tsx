import { useCallback } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";

type TSurveyForm = {
  surveyJson: types.TSurvey;
};

const SurveyForm = ({ surveyJson }: TSurveyForm) => {
  const survey = new Model(surveyJson);

  const alertResults = useCallback(
    (sender: { data: { [key: string]: string | number }[] }) => {
      const results = JSON.stringify(sender.data, null, 3);
      alert(results);
    },
    []
  );

  survey.onComplete.add(alertResults);

  return <Survey model={survey} />;
};

export default SurveyForm;
