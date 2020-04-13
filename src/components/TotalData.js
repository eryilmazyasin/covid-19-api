import React from "react";


export default function TotalData({ total }) {
  return (
      //buradaki col-md-4'leri template oluştur ve renkleri gelen verinin datasına göre class ata öRn = totalDeaths ise bg-danger
    <div className="totalData row">
      <div className="col-md-4">
        <div className="card bg-light mb-3">
          <div className="card-header">Toplam Ölü Sayısı</div>
          <div className="card-body">
            <h5 className="card-title">{total.totalDeaths}</h5>
            <p className="card-text">
              Bu veriler Dünya üzerinde bilinen toplam ölü sayısını göstermektedir.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card bg-lights mb-3">
          <div className="card-header">Toplam İyileşen Sayısı</div>
          <div className="card-body">
            <h5 className="card-title">{total.totalRecovered}</h5>
            <p className="card-text">
                Bu veriler Dünya üzerinde bilinen toplam iyileşen vaka sayısını göstermektedir.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card bg-lightg mb-3">
          <div className="card-header">Toplam Vaka Sayısı</div>
          <div className="card-body">
            <h5 className="card-title">{total.totalCases}</h5>
            <p className="card-text">
                Bu veriler Dünya üzerinde bilinen toplam vaka sayısını göstermektedir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
