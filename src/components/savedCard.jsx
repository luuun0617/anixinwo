function SavedCard({ house }) {
  return (
    <div className="row saved-list">
      <div className="col-sm-6">
        <div className="card">
          <img src="/assets/images/1.png" alt="hus1" />
          <div className="card-body">
            <h5 className="card-title">忠孝敦化｜​高樓​層樓​中​樓露​台戶​／​3​套​房＋傭房​／​3​車​位​</h5>
            <p className="card-text">台北市​大安區復興​南路​一​段​ 178 號 5​ 樓​之​ ​2</p>
            <ul>
              <li>4房4廳、坪數200</li>
              <li>距忠孝敦化 200 公尺</li>
              <li>有電梯</li>
            </ul>
            <p className="card-text">$40,000 / 月租</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card">
          <img src="/assets/images/2.png" alt="hus2" />
          <div className="card-body">
            <h5 className="card-title">忠孝敦化｜​高樓​層樓​中​樓露​台戶​／​3​套​房＋傭房​／​3​車​位​</h5>
            <p className="card-text">台北市​大安區復興​南路​一​段​ 178 號 5​ 樓​之​ ​2</p>
            <ul>
              <li>4房4廳、坪數200</li>
              <li>距忠孝敦化 200 公尺</li>
              <li>有電梯</li>
            </ul>
            <p className="card-text">$60,000 / 月租</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavedCard;