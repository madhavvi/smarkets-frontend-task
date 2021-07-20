import React from 'react';
import './App.css';
import EventList from './components/events/EventList';
import Header from './components/header/Header';
import {
  Switch,
  Route
} from "react-router-dom";
import EventDetails from './components/events/EventDetails';


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <div className="App-content">
          <Switch>
            <Route exact path="/">
              <EventList />
            </Route>
            <Route exact path="/events">
              <EventList />
            </Route>
            <Route exact path={`/events/:id`}>
              <EventDetails />
            </Route>
          </Switch>
      </div>
    </div>
  );
}


export default App;
