import "./App.css";
import { Header } from "./layout/header/header";
import { Main } from "./layout/main/Main";
import { Projects } from "./layout/projects/Projects";
import { Techno } from "./layout/Technologies/Techno";
import { Expirience } from "./layout/experience/Experience";
import { Footer } from "./layout/footer/footer";
import { Particle } from "./components/particle/Particle";

function App() {
  return (
    <div className="App">
      <Particle/>
      <Header />
      <Main />
      <Projects />
      <Techno />
      <Expirience />
      <Footer />
    </div>
  );
}

export default App;

{
  /* <label for="file">File progress:</label>

<progress id="file" max="100" value="70">70%</progress> */
}
