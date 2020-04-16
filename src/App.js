import React, { Component } from "react";
import { About, Nav, NotFound, Dashboard } from "./components/";
import axios from "axios";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends Component {
  state = {
    news: null,
    totalData: {},
    turkeyData: {},
    allData: "",
    instagram: {}
  };

  async componentDidMount() {
    const token = "6ca6PB0jkrJ2Sj99gEKMT6:7IqqvPHXnLYCgY1pW1cbDU";
    const newsUrl = "https://api.collectapi.com/corona/coronaNews";
    const totalDataUrl = "https://api.collectapi.com/corona/totalData";
    const countryData = "https://api.collectapi.com/corona/countriesData";
   
    //Fetch News
    await axios
      .get(newsUrl, {
        headers: {
          authorization: "apikey " + token,
          "content-type": "application/json",
        },
      })
      .then((result) => {
        this.setState({
          news: result.data.result,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    //Fetch totalCases
    await axios
      .get(totalDataUrl, {
        headers: {
          authorization: "apikey " + token,
          "content-type": "application/json",
        },
      })
      .then((result) => {
        this.setState({
          totalData: result.data.result,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    //Fetch Country Data
    axios
      .get(countryData, {
        headers: {
          authorization: "apikey " + token,
          "content-type": "application/json",
        },
      })
      .then((result) => {
        this.setState({
          turkeyData: result.data.result[15],
          allData: result.data.result,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { news, totalData, turkeyData, allData, instagram } = this.state;
    return (
      <Router>
        <div className="app-container">
          <Nav></Nav>
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Dashboard
                  news={news}
                  totalData={totalData}
                  turkeyData={turkeyData}
                  allData={allData}
                ></Dashboard>
              )}
            ></Route>
            <Route
              path="/about"
              exact
              render={(props) => <About instagram={instagram}> </About>}
            ></Route>
            <Route exact component={NotFound}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
