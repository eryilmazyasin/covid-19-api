import React, { Component } from "react";
import github from "../images/github.webp";
import gitlab from "../images/gitlab.png";

export default class About extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <img src={github} alt="github" width="60" />
            <a href="https:www.github.com/eryilmazyasin" className="ml-3">eryilmazyasin</a>
          </div>
          <div className="col-md-4 text-right">
            <img src={gitlab} alt="gtlab" width="60" />
            <a href="https:www.gitlab.com/eryilmazyasin" className="ml-3">eryilmazyasin</a>
          </div>
        </div>
      </div>
    );
  }
}
