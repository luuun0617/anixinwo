import SavedCard from "./savedCard";

function SavedList() {

  const houses = [
    {
      id: 1,
      img: "/assets/images/1.png",
      title: "忠孝敦化｜高樓層樓中樓露台戶",
      address: "台北市大安區復興南路一段178號",
      room: "4房4廳、坪數200",
      mrt: "距忠孝敦化 200 公尺",
      elevator: "有電梯",
      price: "40000"
    },
    {
      id: 2,
      img: "/assets/images/2.png",
      title: "忠孝敦化｜高樓層樓中樓露台戶",
      address: "台北市大安區復興南路一段178號",
      room: "4房4廳、坪數200",
      mrt: "距忠孝敦化 200 公尺",
      elevator: "有電梯",
      price: "60000"
    }
  ];

  return (
    <div className="tab-pane fade">

      <h3>我的收藏</h3>

      <div className="row saved-list">

        {houses.map((house) => (
          <SavedCard
            key={house.id}
            house={house}
          />
        ))}

      </div>

    </div>
  );
}

export default SavedList;