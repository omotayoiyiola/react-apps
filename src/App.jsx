import "./App.css";
import Counter from "./components/Counter";
import Hero from "./components/Hero";
import RockPaperScissors from "./components/RockPaperScissors";
import Subscription from "./components/Subscription";
import Todo from "./components/Todo";
import ToggleApp from "./components/ToggleApp";
import VideoSegment from "./components/VideoSegment";
import WeatherFetcher from "./components/WeatherFetcher";

function App() {
  return (
    <>
      <RockPaperScissors />
      {/* <WeatherFetcher /> */}
      {/* <ToggleApp />
      <Todo />
      <Counter />
      <Hero />
      <VideoSegment />
      <Subscription /> */}
    </>
  );
}

export default App;
