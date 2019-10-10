import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import InputPage from './InputPage';
import FilterPage from './FilterPage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/">
              <span className="navbar-brand">Dashboard</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/">
                    <span className="nav-link">Home</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/filter">
                    <span className="nav-link">Filter</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div>
            <Route path="/" exact component={InputPage}></Route>
            <Route path="/filter" exact component={FilterPage}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
