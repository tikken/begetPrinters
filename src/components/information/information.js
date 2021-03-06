import React from "react"

const InformationContent = () => (
  <div className="info">
    <div className="info_menu">
      <div className="info_menu-wrap">
        <div className="info_menu-wrap_item">
          <span className="info_menu-wrap_item-text">Физическим лицам</span>
        </div>
        <div className="info_menu-wrap_item info_active">
          <span className="info_menu-wrap_item-text">Юридическим лицам</span>
        </div>
      </div>
    </div>

    <div className="info_content">
      <div className="info_content-item" id="payments">
        <div className="info_content-item_inner">
          <div className="info_content-item_inner-icon payment">
            <img src={'/icons/payment.svg'} alt=""/>
          </div>
        </div>
        <div className="info_content-item_inner">
          <div className="info_content-item_inner-heading">оплата</div>
          <div className="info_content-item_inner-desc">Оплата производится безналичным расчетом.</div>
          <div className="info_content-item_inner-text">Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время
            некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для
            распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum
            является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник
            создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
          </div>
        </div>
      </div>

      <div className="info_content-item" id="delivery">
        <div className="info_content-item_inner">
          <div className="info_content-item_inner-icon delivery">
            <img src={'/icons/delivery.svg'} alt=""/>
          </div>
        </div>
        <div className="info_content-item_inner">
          <div className="info_content-item_inner-heading">доставка</div>
          <div className="info_content-item_inner-desc">Оплата производится безналичным расчетом.</div>
          <div className="info_content-item_inner-text">Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время
            некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для
            распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum
            является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник
            создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
          </div>
        </div>
      </div>

      <div className="info_content-item" id="guaranty">
        <div className="info_content-item_inner">
          <div className="info_content-item_inner-icon guaranty">
            <img src={'/icons/guaranty.svg'} alt=""/>
          </div>
        </div>
        <div className="info_content-item_inner">
          <div className="info_content-item_inner-heading">гарантия</div>
          <div className="info_content-item_inner-desc">Мы фанатично следим за качеством каждого картриджа и
            гарантируем, что они не испортят принтер.
          </div>
          <div className="info_content-item_inner-text">
            <span>Для каждой модели картриджа подобраны оптимальные чернила или тонер и фотобарабан. Каждая новая модель проходит умопомрачительно тщательную проверку на градиенты, фантомные изображения, ровность заливки и общее качество картинки. Пока мы не останемся довольны результатом, картридж не запускается в производство.</span>
            <span>Картридж собран из дорогих японских комплектующих, протестирован по стандартам STMC и ISO. Наши люди на заводе следят за всеми аспектами сборки, вплоть до крутящего момента при закручивании винтов. С каждого картриджа на заводе делаются тестовые отпечатки.</span>
            <span>Производитель принтера обязан принять ваш принтер на диагностику по гарантии. Если принтер сломался не из-за совместимого картриджа, его отремонтируют. Если принтер сломается из-за картриджа Т2, на него действует наша собственная гарантия: мы отремонтируем его за свой счёт.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default InformationContent
