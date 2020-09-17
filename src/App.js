import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RegistrationPage from "./components/Registration/RegistrationPage";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import ToursProvider from "./contexts/tours/tours.context";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer'

function App() {
  return (
    <ToursProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/main">
              <NavigationBar />
              <Main />
              <Footer/>
            </Route>
            <Route path="/registration">
              <NavigationBar />
              <RegistrationPage />
            </Route>
            <Route path="/">
              <Header />
            </Route>
          </Switch>
        </div>
      </Router>
    </ToursProvider>
  );
}

function mapStateToProps(state) {}

export default App;
