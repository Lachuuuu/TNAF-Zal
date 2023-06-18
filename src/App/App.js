import './App.css';
import ContactBox from "../Components/Contact/ContactBox";
import AboutMe from "../Components/AboutMe/AboutMe";
import Experience from "../Components/Experience/Experience";
import Background from "../Components/Background/Background";
import FadeIn from "../Components/FadeIn/FadeIn";

function App() {
  return (
      <div>
          <Background/>
        <div className="App">
            <FadeIn>
                <ContactBox/>
            </FadeIn>
            <FadeIn>
                <AboutMe/>
            </FadeIn>
            <FadeIn>
                <Experience/>
            </FadeIn>
        </div>
      </div>
  );
}

export default App;
