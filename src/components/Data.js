import React, { Component } from "react";
import posed from 'react-pose';

const Animate = posed.div({
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
});

export default class Data extends Component {
    state = {
        visible: false
    }

    toggle = () => {
        this.setState(prevstate => ({
            visible : !prevstate.visible
        }))
    }
    render(){
        

        if(this.state.visible){
            var title = 'Gizle';
        }
        else {
            title = 'Göster';
        }
        const {country,totalCases,newCases,totalDeaths,newDeaths,totalRecovered,activeCases} = this.props;
        return (
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-header" onClick={this.toggle} style={this.state.visible ? {background:'#bbbbbb', cursor:'pointer'} : {cursor:'pointer'}}>
                  <span className="font-weight-bold">{country}</span>
                  <span className="ml-3">{title}</span>
                </div>
                    {this.state.visible &&

                      <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between">
              Toplam Vaka
              <span class="badge badge-primary badge-pill">
              {totalCases}
              </span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              Yeni Vaka
              <span class="badge badge-primary badge-pill">
              {newCases}
              </span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              Toplam Ölüm
              <span class="badge badge-primary badge-pill">
              {totalDeaths}
              </span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              Yeni Ölüm
              <span class="badge badge-primary badge-pill">
              {newDeaths}
              </span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              İyileşmiş Vaka
              <span class="badge badge-primary badge-pill">
              {totalRecovered}
              </span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              Aktif Vaka
              <span class="badge badge-primary badge-pill">
              {activeCases}
              </span>
            </li>
          </ul>
                  
    }
                  </div>
                  </div>
            
    )
    
    }
    
}
