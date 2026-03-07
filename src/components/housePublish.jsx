
function HousePublish() {
  return (
    <section>
      <div className="d-flex align-center mb-40 mb-md-24">
        <img src="src\assets\image\arrow-left.svg" alt="arrow-left" className="me-24 me-md-16" />
        <p className="m-0 h5 text-gray-400">所有已刊登物件</p>
        <button type="submit" className="btn addHouses-btn h6 m-0 ms-auto align-center d-none d-md-inline-flex">儲存物件資訊<img src="src\assets\image\Icons-correct.svg" alt="Icons-correct" className="ms-16" /></button>
      </div>
      <div class="bg-primary-white p-36 p-md-16 mb-md-24">
        {/* 物件標題 */}
        <div className="mb-24 mb-md-16">
          <label htmlFor="houseTitle" className="form-label body-2 text-gray-400">物件標題 <span className="body-2 text-system-accent">*</span></label>
          <input type="text" className="form-control" id="houseTitle" placeholder="輸入物件標題" required />
        </div>
        {/* 物件類型 */}
        <div className="mb-24 mb-md-16">
          <label htmlFor="objectSelectionButton" className="form-label body-2 text-gray-400">物​件​類型​ <span className="body-2 text-system-accent">*</span></label>
          <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group single-select flex-wrap" role="group" aria-label="First group">
              <button type="button" className="btn btn-outline me-8 mb-md-8">整層住家</button>
              <button type="button" className="btn btn-outline me-8 mb-md-8">獨立套房</button>
              <button type="button" className="btn btn-outline me-8 mb-md-8">分租套房</button>
              <button type="button" className="btn btn-outline me-8">雅房</button>
              <button type="button" className="btn btn-outline me-8">商辦</button>
            </div>
          </div>
        </div>
        {/* 物件坪數 */}
        <div className="d-flex flex-column flex-md-row form-row mb-24 mb-md-16">
          <div className="house-pin house-pin-md flex-fill">
            <label htmlFor="housePin" className="form-label body-2 text-gray-400">物件坪數 <span className="body-2 text-system-accent">*</span></label>
            <input type="text" className="form-control flex-fill" id="housePin" placeholder="物件坪數" required />
          </div>
          <div className="flex-fill">
            <label htmlFor="houseTotalPin" className="form-label body-2 text-gray-400">物件總坪數 <span className="body-2 text-system-accent">*</span></label>
            <input type="text" className="form-control" id="houseTotalPin" placeholder="物件總坪數" required />
          </div>
        </div>
        {/* 物件圖片 */}
        <div className="mb-24 mb-md-16">
          <label htmlFor="formFile" className="form-label body-2 text-gray-400">物件圖片 <span className="body-2 text-system-accent">*</span></label>
          <div className="d-flex flex-wrap">
            <div className="image-upload me-16 mb-md-16">
              <img src="src\assets\image\hus-1.png" alt="hus-1" className="upload-img" />
              <button type="button" className="delete-btn " id="deleteBtn"><img src="src\assets\image\delete.svg" alt="img-delete" className="img-del" /></button>
            </div>
            <div className="image-upload me-16 mb-md-16">
              <img src="src\assets\image\hus-2.png" alt="hus-2" className="upload-img" />
              <button type="button" className="delete-btn" id="deleteBtn"><img src="src\assets\image\delete.svg" alt="img-delete" className="img-del" /></button>
            </div>
            <div className="image-upload me-16 mb-md-16">
              <img src="src\assets\image\hus-3.png" alt="Image-3" className="upload-img" />
              <button type="button" className="delete-btn" id="deleteBtn"><img src="src\assets\image\delete.svg" alt="img-delete" className="img-del" /></button>
            </div>
            <div className="image-upload me-16 mb-md-16">
              <img src="src\assets\image\hus-4.png" alt="Image-4" className="upload-img" />
              <button type="button" className="delete-btn" id="deleteBtn"><img src="src\assets\image\delete.svg" alt="img-delete" className="img-del" /></button>
            </div>
            <label htmlFor="file1" className="upload-box">
              <img src="src\assets\image\image-button.png" alt="image-button" />
            </label>
            <input type="file" id="file1" hidden />
          </div>
        </div>
        {/* 物件地址 */}
        <div className="mb-24 mb-md-16">
          <label htmlFor="inputAddress" className="form-label body-2 text-gray-400">物件地址 <span className="body-2 text-system-accent">*</span></label>
          <div className="d-flex flex-wrap">
            <select id="inputCity" className="form-select state-style">
              <option selected>縣市</option>
              <option>台北市</option>
              <option>台中市</option>
              <option>台南市</option>
              <option>高雄市</option>
            </select>
            <select id="inputDist" className="form-select state-style">
              <option selected>地區</option>
              <option>鹽埕區</option>
              <option>鼓山區</option>
              <option>左營區</option>
              <option>楠梓區</option>
            </select>
            <input type="text" className="form-control address-style" id="inputAddress" placeholder="輸入完整地址" required />
          </div>
        </div>
        {/* 房屋守則 */}
        <div className="mb-24 mb-md-16">
          <label htmlFor="houseRules" className="form-label body-2 text-gray-400">其他 - 房屋守則</label>
          <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group me-2" role="group" aria-label="First group">
              <button type="button" className="btn btn-outline me-8">可開伙</button>
              <button type="button" className="btn btn-outline me-8">可養寵物</button>
              <button type="button" className="btn btn-outline me-8">不含管理費</button>
            </div>
          </div>
        </div>
        {/* 提供設備 */}
        <div className="mb-24 mb-md-16">
          <label htmlFor="furnished" className="form-label body-2 text-gray-400">其他 - 提供設備</label>
          <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
            <div className="furnished-list me-2 d-flex flex-wrap" role="group" aria-label="First group">
              <button type="button" className="btn btn-outline me-8 mb-8 mb-8">電梯</button>
              <button type="button" className="btn btn-outline me-8 mb-8">車位</button>
              <button type="button" className="btn btn-outline me-8 mb-8">冰箱</button>
              <button type="button" className="btn btn-outline me-8 mb-8">桌椅</button>
              <button type="button" className="btn btn-outline me-8 mb-8">單人床</button>
              <button type="button" className="btn btn-outline me-8 mb-8">雙人床</button>
              <button type="button" className="btn btn-outline me-8 mb-8">對外窗</button>
              <button type="button" className="btn btn-outline me-8 mb-8">沙發</button>
              <button type="button" className="btn btn-outline me-8 mb-8">電視</button>
              <button type="button" className="btn btn-outline me-8 mb-8">衣櫃</button>
              <button type="button" className="btn btn-outline me-8 mb-8">網路</button>
              <button type="button" className="btn btn-outline me-8 mb-8">第四台</button>
              <button type="button" className="btn btn-outline me-8 mb-8">洗衣機</button>
              <button type="button" className="btn btn-outline me-8 mb-8">烘衣機</button>
              <button type="button" className="btn btn-outline me-8 mb-8">冷氣</button>
              <button type="button" className="btn btn-outline me-8 mb-8">熱水器</button>
            </div>
          </div>
        </div>
        {/* 物件屋齡 */}
        <div className="mb-24 mb-md-16">
          <label htmlFor="houseAge" className="form-label body-2 text-gray-400">物件屋齡 <span className="body-2 text-system-accent">*</span></label>
          <select id="houseAge" className="form-select">
            <option selected>請選擇屋齡</option>
            <option>0 - 5 年</option>
            <option>5 - 10 年</option>
            <option>10 - 20 年</option>
            <option>20 - 30 年</option>
            <option>30 年以上</option>
          </select>
        </div>
        {/* 物件租金、管理費 */}
        <div className="d-flex flex-column form-row flex-md-row mb-md-16">
          <div className="mb-24 me-24 flex-fill mb-md-8 objectSqm-md-0">
            <label htmlFor="rent" className="form-label body-2 text-gray-400">物件租金 (月) <span className="body-2 text-system-accent">*</span></label>
            <input type="text" className="form-control flex-fill" id="rent" placeholder="輸入物件租金" required />
          </div>
          <div className="mb-24 flex-fill mb-md-0">
            <label htmlFor="hoaFee" className="form-label body-2 text-gray-400">物件管理費 <span className="body-2 text-system-accent">*</span></label>
            <input type="text" className="form-control" id="hoaFee" placeholder="輸入物件管理費" required />
          </div>
        </div>
        {/* 聯絡人、聯絡電話 */}
        <div className="d-flex flex-column form-row flex-md-row mb-md-16">
          <div className="mb-24 flex-fill contact-name">
            <label htmlFor="contactName" className="form-label body-2 text-gray-400">聯絡人 <span className="body-2 text-system-accent">*</span></label>
            <input type="text" className="form-control flex-fill" id="name" placeholder="輸入聯絡人姓名" required />
          </div>
          <div className="mb-24 flex-fill mb-md-0">
            <label htmlFor="contactNumber" className="form-label body-2 text-gray-400">聯絡電話 <span className="body-2 text-system-accent">*</span></label>
            <input type="tel" className="form-control text-gray-200" id="tel" placeholder="輸入聯絡電話" required />
          </div>
        </div>
      </div>
      <button type="submit" class="btn addHouses-btn h6 text-primary-500 m-0 d-block d-md-none mx-auto">儲存物件資訊<img src="src\assets\image\Icons-correct.svg" alt="Icons-correct" class="ms-16" /></button>
    </section>

  );
}

export default HousePublish;