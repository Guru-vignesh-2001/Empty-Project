import { BrowserRouter, Route, Routes as Switches } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact-us";

const Routes = () => {

  return (
    <BrowserRouter>
      <Switches>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
      </Switches>
    </BrowserRouter>
  );
};

export default Routes;
