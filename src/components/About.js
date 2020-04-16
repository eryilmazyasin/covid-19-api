
import React, { Component } from 'react'

import axios from "axios"; 
import User from './User';

export default class About extends Component {
  state = {
    value : '',
    instagram: ''
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
    console.log(this.state.value);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let val = this.state.value;
    axios
    .get(
     `https://www.instagram.com/${val}/?__a=1&fbclid=IwAR3B5_HaB65jOlr_ixE6C0g_7DdUo0BspGxVsQYULAn1vhXHWqogeDsC5GU`
    )
    .then((result) => {
      this.setState({
        instagram: result.data.graphql.user,
      });
    })
    .catch((error) => {
      console.log(error);
    });


  }

  render() {
    return (
      <div className="container mt-5">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Fotoğrafını görmek istediğin hesabın kullanıcı adını yaz"/>
          <input type="submit" value="Görüntüle" className="btn btn-primary mt-2" />
        </form>
        <User instagram={this.state.instagram}></User>
      </div>
    )
  }
}



 