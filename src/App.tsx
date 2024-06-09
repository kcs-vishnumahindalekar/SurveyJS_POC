import SurveyForm from "./component/SurveyForm";
import { demoJson } from "./surveyJson/demoJson";

function App() {
  return <SurveyForm surveyJson={demoJson} />;
}

export default App;
