import React, { Component } from "react";
import Data from './Data';
import loading from '../images/loading2.gif'

export default class AllData extends Component {


 
  render() {
    const { allData } = this.props;
    if (!allData) {
      return (
        <div className="text-center">
          <img src={loading} width="250"/>
        </div>
      );
    };
    return (    
      <div className="allData row my-3">
        {allData.map((data, index) => {
          return (
            <Data key={index} country={data.country} totalCases={data.totalCases} newCases={data.newCases} totalDeaths={data.totalDeaths} newDeaths={data.newDeaths} totalRecovered={data.totalRecovered} activeCases={data.activeCases}></Data>
          );
          
        })}
      </div>
    );
  }
}
