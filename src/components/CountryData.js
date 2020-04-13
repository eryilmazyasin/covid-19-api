import React from "react";

export default function CountryData({ turkeyData }) {
  if(turkeyData.country === 'Turkey'){
      turkeyData.country = 'Türkiye';
  }

  return (
    <div className="countryData">
      <div className="country">
        <div className="cname">{turkeyData.country}</div>
        <div className="cinformation">
          <div className="cinfo">
            <span>Toplam Vaka </span> {turkeyData.totalCases}
          </div>
          
          <div className="cinfo">
            <span>Yeni Vaka </span> {turkeyData.newCases}
          </div>

          <div className="cinfo">
            <span>Toplam Ölüm </span> {turkeyData.totalDeaths}
          </div>

          <div className="cinfo">
            <span>Yeni Ölüm </span> {turkeyData.newDeaths}
          </div>
          <div className="cinfo">
            <span>İyileşmiş Vaka </span> {turkeyData.totalRecovered}
          </div>
          <div className="cinfo">
            <span>Aktif Vaka </span> {turkeyData.activeCases}
          </div>
        </div>
      </div>
    </div>
  );
}
