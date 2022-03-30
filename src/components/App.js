import React, { useState, useRef } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import AboutUs from "./Main/AboutUs";
import Footer from "./Footer/Footer";
let isClicked=false;
const App = () => {const ref=useRef();
  const [appState, setAppState] = useState({
    CurrentPage: "About",
    Resume: {
      About: {
        Name: "Priyadharshini Rajaram",
        Location: "London, United Kingdom",
        CurrentPosition: "Product Owner at Cloudroit",
        Summary:
          "Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model and thorough understanding of React JS and its core principles. Experience with popular React.js workflows (such as Flux or Redux). Familiarity with newer specifications of EcmaScript.",
      },
      Experience: [],
      Education: [],
      Awards: [],
      Projects: [],
      Skills: [],
      Hobbies: [],
      Contact: {
        Email: "priya@cloudroit.co.uk",
        Website: "priya.ws",
        Phone: "+44 7894561230",
      }
    },
  });
  const ChangePage = (CurrentPage) => {
    setAppState({ ...appState, CurrentPage: CurrentPage });
  };
  const SetSection = (Section, Content) => {
    setAppState({ Resume: { ...appState.Resume, [Section]: Content } });
   };
 
  return (
    <div className="rezume">
      <Header
        ChangePage={ChangePage}
        Resume={appState.Resume}
        CurrentPage={appState.CurrentPage}
        ref={ref}
      />
     {
     (!isClicked) ? <Main
        CurrentPage={appState.CurrentPage}
        Resume={appState.Resume}
        SetSection={SetSection}
      /> :
      <AboutUs /> }
      <Footer/>
    </div>
  );
};

export default App;
