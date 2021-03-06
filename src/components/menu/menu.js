import {Link} from "gatsby"
import React, {useState} from "react"

const Menu = () => {
    const [showed, setShowed] = useState(false)
    const [search, openSearch] = useState(false)
    const [menu, openMenu] = useState(false)

    const handler = (e) => {
        document.querySelector("body").classList.toggle('overflow');
        openMenu(!menu)
    }

    const menuHandler = (e) => {
        e.persist();
        e.preventDefault();

        setShowed(!showed);
    }

    return (
        <div className="menu">
            <div className="menu_wrapper">
                <div className="menu_wrapper-item">

                    <div className="menu_wrapper-item_hamburger">
                        <img src={"/menu/Mhamburger.svg"} alt="hamburger" className="desktop-hide" onClick={(e) => handler(e) }/>
                        <img src={"/menu/hamburger.svg"} alt="hamburger" className="mobile-hide"/>
                        <img src={'/header/MLOGO.png'} alt="logo" className="menu_wrapper-item_hamburger-logo"/>
                    </div>

                    <div className={`menu_wrapper-item_secondary ${menu ? "menu_visible" : ""}`}>
                        <div className="menu_Wrapper-item_secondary-item">
                            <ul className="menu_Wrapper-item_secondary-item_list">
                                <li className="menu_Wrapper-item_secondary-item_list-item">
                                    <Link to="/catalog">
                                        <span className="menu_Wrapper-item_secondary-item_list-item-text">
                                          Каталог
                                        </span>
                                    </Link>
                                    <img src={"/icons/arrow_right.svg"} alt="right" />
                                </li>
                                <li className="menu_Wrapper-item_secondary-item_list-item">
                                    <Link to="/sales">
                                      <span className="menu_Wrapper-item_secondary-item_list-item-text">
                                        Акции
                                      </span>
                                    </Link>
                                    <img src={"/icons/arrow_right.svg"} alt="right" />
                                </li>
                                <li className="menu_Wrapper-item_secondary-item_list-item">
                                    <Link to="/about">
                                      <span className="menu_Wrapper-item_secondary-item_list-item-text">
                                        О нас
                                      </span>
                                    </Link>
                                    <img src={"/icons/arrow_right.svg"} alt="right" />
                                </li>
                                <li className="menu_Wrapper-item_secondary-item_list-item">
                                    <Link to="/blog">
                                      <span className="menu_Wrapper-item_secondary-item_list-item-text">
                                        Блог
                                      </span>
                                    </Link>
                                    <img src={"/icons/arrow_right.svg"} alt="right" />
                                </li>
                                <li className="menu_Wrapper-item_secondary-item_list-item">
                                    <Link to="/contacts">
                                        <span className="menu_Wrapper-item_secondary-item_list-item-text">
                                          Контакты
                                        </span>
                                    </Link>
                                    <img src={"/icons/arrow_right.svg"} alt="right" />
                                </li>
                                <li className="menu_Wrapper-item_secondary-item_list-item">
                                    <Link to="/information">
                                        <span className="menu_Wrapper-item_secondary-item_list-item-text">
                                          Информация
                                        </span>
                                    </Link>
                                    <img src={"/icons/arrow_right.svg"} alt="right" />
                                </li>
                                <li className="menu_Wrapper-item_secondary-item_list-item">
                                    <Link to="/hits">
                                         <span className="menu_Wrapper-item_secondary-item_list-item-text">
                                            Хит - парад принтеров
                                         </span>
                                    </Link>
                                    <img src={"/icons/arrow_right.svg"} alt="right" />
                                </li>
                                <li className="menu_Wrapper-item_secondary-item_list-item vip-item">
                                  <img src={"/menu/tracking.svg"} alt="tracking" />
                                    <Link to="/tracking">
                                      <span className="menu_Wrapper-item_secondary-item_list-item-text">
                                        Трекинг заказа
                                      </span>
                                    </Link>
                                    <img src={"/icons/arrow_right.svg"} alt="right" className="arrow_right"/>
                                </li>
                                <li className="menu_Wrapper-item_secondary-item_list-item vip-item">
                                    <img src={"/menu/login.svg"} alt="login" />
                                    <Link to="/cabinet">
                                       <span className="menu_Wrapper-item_secondary-item_list-item-text">
                                        Личный кабинет
                                      </span>
                                    </Link>
                                    <img src={"/icons/arrow_right.svg"} alt="right" className="arrow_right"/>
                                </li>
                                <li className="menu_Wrapper-item_secondary-item_list-item vip-item">
                                    <img src={"/menu/cart.svg"} alt="cart" />
                                    <Link to="/cart">
                                     <span className="menu_Wrapper-item_secondary-item_list-item-text">
                                        Корзина
                                      </span>
                                    </Link>
                                    <img src={"/icons/arrow_right.svg"} alt="right" className="arrow_right"/>
                                </li>
                                <li className="menu_Wrapper-item_secondary-item_list-item vip-item">
                                  <img src={"/header/contact.svg"} alt="contact" className="contact_image"/>
                                  <span className="menu_Wrapper-item_secondary-item_list-item-text">
                                  <span className="menu_Wrapper-item_secondary-item_list-item-text_inner">
                                      <span>+7 (495) 775 50 53</span>
                                      <span>пн-пт 10:00 - 19:00</span>
                                    </span>
                                  </span>
                                </li>
                                <li className="menu_Wrapper-item_secondary-item_list-item">
                                  <img src={"/header/Mail.svg"} alt="mailer" />
                                  <span className="menu_Wrapper-item_secondary-item_list-item-text">
                                    kakayatopochta@gmail.com
                                  </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Link to="/" className="menu_wrapper-item_menuText-link">
                        <div className="menu_wrapper-item_menuText">
                            <img
                                src={"/icons/menu_decor.svg"}
                                className="menu_wrapper-item_menuText-decor"
                                alt="decor"
                            />

                            <div className="menu_wrapper-item_menuText-header">
                                <div>МЕНЮ</div>
                                {showed && (
                                    <ul className="menu_wrapper-item-main_menu-item-text_secondary" onMouseLeave={() => setShowed(!showed)}>
                                        <li className="menu_wrapper-item-main_menu-item-text_secondary-text">
                                            <Link to="/information#payments">
                                                <span>Оплата</span>
                                            </Link>
                                        </li>
                                        <li className="menu_wrapper-item-main_menu-item-text_secondary-text">
                                            <Link to="/information#delivery">
                                                <span>Доставка</span>
                                            </Link>
                                        </li>
                                        <li className="menu_wrapper-item-main_menu-item-text_secondary-text">
                                            <Link to="/information#guaranty">
                                                <span>Гарантия</span>
                                            </Link>
                                        </li>
                                    </ul>
                                )}

                                <ul className="menu_wrapper-item-main_menu">
                                    <li className="menu_wrapper-item-main_menu-item">
                                          <span className="menu_wrapper-item-main_menu-item-text">
                                            <Link to="/catalog">Каталог</Link>
                                            <img src={"/icons/arrow_right.svg"} alt="arrow"/>
                                          </span>
                                    </li>
                                    <li className="menu_wrapper-item-main_menu-item">
                                          <span className="menu_wrapper-item-main_menu-item-text">
                                            <Link to="/about">О нас</Link>
                                            <img src={"/icons/arrow_right.svg"} alt="arrow"/>
                                          </span>
                                    </li>
                                    <li className="menu_wrapper-item-main_menu-item">
                                          <span className="menu_wrapper-item-main_menu-item-text">
                                            <Link to="/hits">Хит парад принтеров</Link>
                                            <img src={"/icons/arrow_right.svg"} alt="arrow"/>
                                          </span>
                                    </li>
                                    <li className="menu_wrapper-item-main_menu-item">
                                          <span className="menu_wrapper-item-main_menu-item-text">
                                            <Link to="/hits">Акции</Link>
                                            <img src={"/icons/arrow_right.svg"} alt="arrow"/>
                                          </span>
                                    </li>
                                    <li className="menu_wrapper-item-main_menu-item">
                                          <span className="menu_wrapper-item-main_menu-item-text">
                                            <Link to="/blog">Блог</Link>
                                            <img src={"/icons/arrow_right.svg"} alt="arrow"/>
                                          </span>
                                    </li>
                                    <li
                                        className="menu_wrapper-item-main_menu-item"
                                        onClick={(e) => menuHandler(e)}
                                    >
                                          <span className="menu_wrapper-item-main_menu-item-text">
                                            <span>Информация</span>
                                            <img src={"/icons/arrow_right.svg"} alt="arrow"/>
                                          </span>
                                    </li>
                                    <li className="menu_wrapper-item-main_menu-item">
                                          <span className="menu_wrapper-item-main_menu-item-text">
                                            <Link to="/contacts">Контакты</Link>
                                            <img src={"/icons/arrow_right.svg"} alt="arrow"/>
                                          </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="menu_wrapper-item">
                    <div className={`menu_wrapper-item_search ${search ? "search_width" : ""}`}>
                        <div className="menu_wrapper-item_search_input">
                            <input
                                type="search"
                                name=""
                                placeholder="Введите модель принтера или артикул картриджа"
                            />
                        </div>
                        <div className="menu_wrapper-item_search_button" onClick={() => openSearch(!search)}>
                            <img src={"/menu/zoomin.svg"} alt="icon"/>
                        </div>
                    </div>
                </div>
                <div className="menu_wrapper-item">
                    <Link to="/tracking" className="menu_wrapper-item_tracking">
                        <div className="menu_wrapper-item_tracking_icon">
                            <img src={"/menu/tracking.svg"} alt="icon"/>
                        </div>
                        <div className="menu_wrapper-item_tracking_text">
                            <span>Трекинг заказа</span>
                        </div>
                    </Link>
                </div>
                <div className="menu_wrapper-item">
                    <Link to="/cabinet" className="menu_wrapper-item_personal">
                        <div className="menu_wrapper-item_personal_icon">
                            <img src={"/menu/login.svg"} alt=""/>
                        </div>
                        <div className="menu_wrapper-item_personal_text">
                            <span>Личный кабинет</span>
                            <img
                                src={"/icons/menu_decor.svg"}
                                className="menu_wrapper-item_menuText-decor"
                            />
                        </div>
                    </Link>
                </div>
                <div className="menu_wrapper-item">
                    <div className="menu_wrapper-item_cart">
                        <Link to="/cart">
                            <div className="menu_wrapper-item_cart_icon">
                                <img src={"/menu/cart.svg"} alt=""/>
                                <span className="menu_wrapper-item_cart_icon-amount">88</span>
                            </div>
                            <div className="menu_wrapper-item_cart_value">56834</div>
                            <div className="menu_wrapper-item_cart_currency">
                                <img src={"/menu/rub.svg"} alt="rub"/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
