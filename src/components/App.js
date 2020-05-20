import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";

import MainSection from "./MainSection";
import BottomSection from "./BottomSection";

import AttractingInvestors from "./links/AttractingInvestors";
import Comercialization from "./links/Comercialization";
import Crowdfunding from "./links/Crowdfunding";
import Grants from "./links/Grants";
import Immovables from "./links/Immovables";
import IncreasingProductivity from "./links/IncreasingProductivity";
import Insurance from "./links/Insurance";
import InternationalAccouting from "./links/InternationalAccouting";
import InternationalLaw from "./links/InternationalLaw";
import Marketing from "./links/Marketing";
import ProjectManagement from "./links/ProjectManagement";
import TradeFinance from "./links/TradeFinance";



function App() {
  return (
      <Router>
          <Switch>
              <Route exact path='/'>
                  <div className="App">
                      <MainSection/>
                      <BottomSection/>
                  </div>
              </Route>
          </Switch>
          <Switch>
              <Route path='/project_management'>
                  <ProjectManagement/>
              </Route>
          </Switch>
          <Switch>
              <Route path='/grants'>
                  <Grants/>
              </Route>
          </Switch>
          <Switch>
              <Route path='/international_accouting'>
                  <InternationalAccouting/>
              </Route>
          </Switch>
          <Switch>
              <Route path='/international_law'>
                  <InternationalLaw/>
              </Route>
          </Switch>
          <Switch>
              <Route path='/trade_finance'>
                  <TradeFinance/>
              </Route>
          </Switch>
          <Switch>
              <Route path='/attracting_investors'>
                  <AttractingInvestors/>
              </Route>
          </Switch>
          <Switch>
              <Route path='/immovables'>
                  <Immovables/>
              </Route>
          </Switch>
          <Switch>
              <Route path='/commercialization'>
                  <Comercialization/>
              </Route>
          </Switch>
          <Switch>
              <Route path='/increasing_productivity'>
                  <IncreasingProductivity/>
              </Route>
          </Switch>
          <Switch>
              <Route path='/crowdfunding'>
                  <Crowdfunding/>
              </Route>
          </Switch>
          <Switch>
              <Route path='/insurance'>
                  <Insurance/>
              </Route>
          </Switch>
          <Switch>
              <Route path='/marketing'>
                  <Marketing/>
              </Route>
          </Switch>
      </Router>

  );
}

export default App;
