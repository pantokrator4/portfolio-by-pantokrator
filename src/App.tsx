import "./App.css";
import styled from "styled-components";
import { Header } from "./layout/header/header";
import { Main } from "./layout/main/Main";
import { Projects } from "./layout/projects/Projects";
import { Techno } from "./layout/Technologies/Techno";
import { Expirience } from "./layout/experience/Experience";
import { Footer } from "./layout/footer/footer";

function App() {
  return (
    <div className="App">
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
