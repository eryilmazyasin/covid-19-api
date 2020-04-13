import React from 'react'
import News from './News'
import TotalData from './TotalData'
import CountryData from './CountryData'
import AllData from './AllData'

export default function Dashboard(props) {
    return (
      <section className="dashboard">
        <div className="app-row">
          <div className="col-md-3">
            <News news={props.news}></News>
          </div>
          <div className="col-md-8">
            <TotalData total={props.totalData}></TotalData>
            <CountryData turkeyData={props.turkeyData}></CountryData>
            <AllData allData={props.allData}></AllData>
          </div>
        </div>
      </section>
    );
}
