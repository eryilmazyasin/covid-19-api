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
                  <div className="card-body">
                    <div>
                      <span>Toplam Vaka </span> {totalCases}
                    </div>
                    <div>
                      <span>Yeni Vaka </span> {newCases}
                    </div>
                    <div>
                      <span>Toplam Ölüm </span> {totalDeaths}
                    </div>
                    <div>
                      <span>Yeni Ölüm </span> {newDeaths}
                    </div>
                    <div>
                      <span>İyileşmiş Vaka </span> {totalRecovered}
                    </div>
                    <div>
                      <span>Aktif Vaka </span> {activeCases}
                    </div>
                  </div>
    }
                  </div>
                  </div>
            
    )
    
    }
    
}
