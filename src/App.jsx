import {useEffect} from 'react'

import './assets/all.scss';

import SavedList from "./components/saveList";
import HousePublish from "./components/housePublish";
import SavedCard from './components/savedCard';



function App() {
  
  useEffect (()=>{
    (async ()=>{
      
    })()
  },[])

  
  return (
    <>
      <div className="d-flex align-center bg-primary-100 justify-between px-12 py-20 py-md-14">
          <a href="index.html"><img src="src\assets\image\Logo.png" alt="Logo" /></a>
          <div>
              <a href="function.html" className="me-24"><img src="src\assets\image\Icon-account.svg" alt="Icon-account" /></a>
              <a href="#"><img src="src\assets\image\Icon-option.svg" alt="Icons-option" /></a>
          </div>
      </div>

      <div className="container">
        <div className="row list-group-row">
          <div className="col-3 col-md-4 mb-md-36 p-md-0 flex-md-nowrap overflow-x-md-auto">
            <div className="list-group list-group-flush me-24" id="list-tab" role="tablist">
              <a className="list-group-item list-group-item-action h6 active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home"><img src="src\assets\image\Icons-person.svg" alt="Icons-person" className="icon-title  icon" fill="currentColor" />個人​資料​編輯</a>
              <a className="list-group-item list-group-item-action h6" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile"><img src="src\assets\image\Icons-heart.svg" alt="Icons-heart" className="icon-title  icon" />我​的​收藏​</a>
              <a className="list-group-item list-group-item-action h6" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages"><img src="src\assets\image\Icons-write.svg" alt="Icons-write" className="icon-title" />刊​登物​件​管理​</a>
            </div>
          </div>
          <div className="col-9 col-md-4 p-md-0">
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">個人​資料​編輯</div>
              <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                我​的​收藏卡片
                <SavedCard />
              </div>
              <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
                {/* 所有已刊登物件 */}
                <HousePublish />
              </div>
            </div>
          </div>
        </div>
      </div> 
      
    </>
  )
}

export default App
