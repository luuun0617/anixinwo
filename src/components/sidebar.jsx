function Sidebar() {
  return (
    <div className="col-3 col-md-4 mb-md-36 p-md-0 flex-md-nowrap overflow-x-md-auto">
      <div className="list-group list-group-flush me-24">
        <button className="list-group-item list-group-item-action h6 active">個人資料編輯</button>
        <button className="list-group-item list-group-item-action h6">我的收藏</button>
        <button className="list-group-item list-group-item-action h6">刊登物件管理</button>
      </div>
    </div>
  );
}

export default Sidebar;