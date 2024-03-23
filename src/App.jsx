import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, HardSkills, Realiser, Optimiser, Administrer, Gerer, Conduire, Collaborer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <HardSkills />
        <Routes>
          <Route path="/realiser" element={<Realiser />} />
          <Route path="/optimiser" element={<Optimiser />} />
          <Route path="/administrer" element={<Administrer />} />
          <Route path="/gerer" element={<Gerer />} />
          <Route path="/conduire" element={<Conduire />} />
          <Route path="/collaborer" element={<Collaborer />} />
        </Routes>
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
