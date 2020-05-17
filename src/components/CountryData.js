import React from "react";

export default function CountryData({ turkeyData }) {
  if (turkeyData.country === "Turkey") {
    turkeyData.country = "Türkiye";
  }

  return (
    <div className="countryData">
      <div className="country">
        <div className="cname">{turkeyData.country}</div>
        <div className="cinformation">
          <ul class="list-group">
            <li class="list-group-item">
              Toplam Vaka
              <span class="badge badge-primary badge-pill">
                {turkeyData.totalCases}
              </span>
            </li>
            <li class="list-group-item">
              Yeni Vaka
              <span class="badge badge-primary badge-pill">
                {turkeyData.newCases}
              </span>
            </li>
            <li class="list-group-item">
              Toplam Ölüm
              <span class="badge badge-primary badge-pill">
                {turkeyData.totalDeaths}
              </span>
            </li>
            <li class="list-group-item">
              Yeni Ölüm
              <span class="badge badge-primary badge-pill">
                {turkeyData.newDeaths}
              </span>
            </li>
            <li class="list-group-item">
              İyileşmiş Vaka
              <span class="badge badge-primary badge-pill">
                {turkeyData.totalRecovered}
              </span>
            </li>
            <li class="list-group-item">
              Aktif Vaka
              <span class="badge badge-primary badge-pill">
                {turkeyData.activeCases}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
