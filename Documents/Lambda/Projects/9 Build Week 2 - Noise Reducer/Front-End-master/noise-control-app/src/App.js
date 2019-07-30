import React from "react";
import Login from "./components/Login";
import OnboardingWelcome from "./components/OnboardingWelcome";
import OnboardingBasic from "./components/OnboardingBasic";
import OnboardingIntake from "./components/OnboardingIntake";
import OnboardingPreferences from "./components/OnboardingPreferences";
import Class from './components/Class';
import sampleData from './sampleData';
import WelcomePage from "./components/WelcomePage";

import "./App.scss";


const teacher = sampleData;
console.log(teacher);

function App() {
  return (
    <div className="App">
      <WelcomePage />
      <Login />
      <OnboardingWelcome />
      <OnboardingBasic />
      <OnboardingIntake />
      <OnboardingPreferences />
      <Class teacher={teacher} />
    </div>
  );
}

export default App;
