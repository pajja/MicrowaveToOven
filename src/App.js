import React from "react";
import Navigation from "./components/Navigation";
import ConversionTables from "./components/ConversionTables";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts";
import { Route, Routes } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Navigation />
        </div>
        <div>
          <Routes>
            <Route exact path="/" element={<ConversionTables />} />
            <Route exact path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
