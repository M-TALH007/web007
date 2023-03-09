import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 12;

  constructor() {
    super();
    this.state = {
      country: "in",
      // progress:0,
    };
  }

  // setProgress=(progress)=>{
  //   this.setProgress({progress:progress})
  // }

  //   setCountry({country:country}){
  // 		this.setState({
  //       ...this.state,
  //       country:this.state.country
  //   })
  // }
  setCountry({ country }) {
    this.setState(...this.state, country);
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar setCountry={this.setCountry} />
          {/* <LoadingBar
        color='#f11946'
        progress={this.state.progress}
       
      /> */}

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  /*setProgress={this.setProgress}*/ key="business"
                  pageSize={this.pageSize}
                  country={this.state.country}
                  catagory=""
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  /*setProgress={this.setProgress}*/ key="business"
                  pageSize={this.pageSize}
                  country={this.state.country}
                  catagory="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  /*setProgress={this.setProgress}*/ key="entertainment"
                  pageSize={this.pageSize}
                  country={this.state.country}
                  catagory="entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  /*setProgress={this.setProgress}*/ key="general"
                  pageSize={this.pageSize}
                  country={this.state.country}
                  catagory="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  /*setProgress={this.setProgress}*/ key="health"
                  pageSize={this.pageSize}
                  country={this.state.country}
                  catagory="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  /*setProgress={this.setProgress}*/ key="science"
                  pageSize={this.pageSize}
                  country={this.state.country}
                  catagory="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  /*setProgress={this.setProgress}*/ key="sports"
                  pageSize={this.pageSize}
                  country={this.state.country}
                  catagory="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  /*setProgress={this.setProgress}*/ key="technology"
                  pageSize={this.pageSize}
                  country={this.state.country}
                  catagory="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
