import React from "react"

const CatalogBanner = () => (
  <div className="banner">
    <div className="banner-wrapper">
      <div className="banner-wrapper_image">
        <img src={"/banner/banner.png"} alt="Banner"/>
      </div>
      <div className="banner-wrapper_heading">
        <span className="banner-wrapper_heading-item">Принтер</span>
        <span className="banner-wrapper_heading-item">Олд скулл</span>
      </div>
      <div className="banner-wrapper_desc">
        <span className="banner-wrapper_desc-item">описание товара или артикул</span>
      </div>
      <div className="banner-wrapper_cta">
        <span className="banner-wrapper_cta-item">CALL TO ACTION</span>
      </div>
    </div>
  </div>
)

export default CatalogBanner