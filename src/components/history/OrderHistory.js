import React from 'react'

export default function OrderHistory() {
    return (
        <div className="history">
            <div className="history_wrapper">
                <div className="history_wrapper-item">
                    <div className="history_wrapper-item_heading">
                        <span className="history_wrapper-item_heading-text">История заказов</span>
                    </div>
                </div>
                <div className="history_wrapper-item">
                    <div className="history_wrapper-item_row">
                        <div className="history_wrapper-item_row-item history_wrapper-item_row-item-title">
                            <span className="history_wrapper-item_row-item_text">Дата заказа</span>
                        </div>
                        <div className="history_wrapper-item_row-item history_wrapper-item_row-item-title">
                            <span className="history_wrapper-item_row-item_text">Номер заказа</span>
                        </div>
                        <div className="history_wrapper-item_row-item history_wrapper-item_row-item-title">
                            <span className="history_wrapper-item_row-item_text">Юр. лицо</span>
                        </div>
                        <div className="history_wrapper-item_row-item history_wrapper-item_row-item-title">
                            <span className="history_wrapper-item_row-item_text">Сумма</span>
                        </div>
                    </div>

                    <div className="history_wrapper-item_row">
                        <div className="history_wrapper-item_row-item history_wrapper-item_row-item-selected">
                            <span className="history_wrapper-item_row-item_val">07.12.2019</span>
                        </div>
                        <div className="history_wrapper-item_row-item history_wrapper-item_row-item-selected">
                            <span className="history_wrapper-item_row-item_val">1001</span>
                        </div>
                        <div className="history_wrapper-item_row-item history_wrapper-item_row-item-selected">
                            <span className="history_wrapper-item_row-item_val">OOO "Рога и копыта"</span>
                        </div>
                        <div className="history_wrapper-item_row-item history_wrapper-item_row-item-selected">
                            <span className="history_wrapper-item_row-item_val">234545 руб.</span>
                        </div>
                    </div>

                    <div className="history_wrapper-item_row">
                        <div className="history_wrapper-item_row-item">
                            <span className="history_wrapper-item_row-item_val">10.07.2019</span>
                        </div>
                        <div className="history_wrapper-item_row-item">
                            <span className="history_wrapper-item_row-item_val">2773</span>
                        </div>
                        <div className="history_wrapper-item_row-item">
                            <span className="history_wrapper-item_row-item_val">ИП "Рога и копыта"</span>
                        </div>
                        <div className="history_wrapper-item_row-item">
                            <span className="history_wrapper-item_row-item_val">543 руб.</span>
                        </div>
                    </div>

                    <div className="history_wrapper-item_row">
                        <div className="history_wrapper-item_row-info history_wrapper-item_row-item-header">
                            <span className="history_wrapper-item_row-item_text">№ заказа</span>
                        </div>
                        <div className="history_wrapper-item_row-info history_wrapper-item_row-item-header">
                            <span className="history_wrapper-item_row-item_text">Наименование</span>
                        </div>
                
                        <div className="history_wrapper-item_row-info history_wrapper-item_row-item-header">
                            <span className="history_wrapper-item_row-item_text">Количество</span>
                        </div>
                        <div className="history_wrapper-item_row-info history_wrapper-item_row-item-header">
                            <span className="history_wrapper-item_row-item_text">Стоимость</span>
                        </div>
                        <div className="history_wrapper-item_row-info history_wrapper-item_row-item-header">
                            <span className="history_wrapper-item_row-item_text">Сумма</span>
                        </div>
                    </div>

                    <div className="history_wrapper-item_row">
                        <div className="history_wrapper-item_row-info">
                            <span className="history_wrapper-item_row-item_val">01</span>
                        </div>
                        <div className="history_wrapper-item_row-info">
                            <span className="history_wrapper-item_row-item_val">Чёрный тонер-картридж TC-CE285A для принтеров и МФУ: ОЕМ-номер: CE285A.</span>
                        </div>
                
                        <div className="history_wrapper-item_row-info">
                            <span className="history_wrapper-item_row-item_val">01</span>
                        </div>
                        <div className="history_wrapper-item_row-info">
                            <span className="history_wrapper-item_row-item_val">1987 руб.</span>
                        </div>
                        <div className="history_wrapper-item_row-info">
                            <span className="history_wrapper-item_row-item_val">10298 руб.</span>
                        </div>
                    </div>

                    <div className="history_wrapper-item_row">
                        <div className="history_wrapper-item_row-info">
                            <span className="history_wrapper-item_row-item_val">02</span>
                        </div>
                        <div className="history_wrapper-item_row-info">
                            <span className="history_wrapper-item_row-item_val">Чёрный тонер-картридж TC-CE285A для принтеров и МФУ: ОЕМ-номер: CE285A.</span>
                        </div>
                
                        <div className="history_wrapper-item_row-info">
                            <span className="history_wrapper-item_row-item_val">02</span>
                        </div>
                        <div className="history_wrapper-item_row-info">
                            <span className="history_wrapper-item_row-item_val">6785 руб.</span>
                        </div>
                        <div className="history_wrapper-item_row-info">
                            <span className="history_wrapper-item_row-item_val">343242 руб.</span>
                        </div>
                    </div>

                    <div className="history_wrapper-item_row">
                        <div className="history_wrapper-item_row-info">
                            <span className="history_wrapper-item_row-item_val">03</span>
                        </div>
                        <div className="history_wrapper-item_row-info">
                            <span className="history_wrapper-item_row-item_val">Чёрный тонер-картридж TC-CE285A для принтеров и МФУ: ОЕМ-номер: CE285A.</span>
                        </div>
                
                        <div className="history_wrapper-item_row-info">
                            <span className="history_wrapper-item_row-item_val">03</span>
                        </div>
                        <div className="history_wrapper-item_row-info">
                            <span className="history_wrapper-item_row-item_val">56678 руб.</span>
                        </div>
                        <div className="history_wrapper-item_row-info">
                            <span className="history_wrapper-item_row-item_val">91826 руб.</span>
                        </div>
                    </div>

                    <div className="history_wrapper-item_row">
                        <div className="history_wrapper-item_row-info">
                            <span className="history_wrapper-item_row-item_val">04</span>
                        </div>
                        <div className="history_wrapper-item_row-info">
                            <span className="history_wrapper-item_row-item_val">Чёрный тонер-картридж TC-CE285A для принтеров и МФУ: ОЕМ-номер: CE285A.</span>
                        </div>
                
                        <div className="history_wrapper-item_row-info">
                            <span className="history_wrapper-item_row-item_val">04</span>
                        </div>
                        <div className="history_wrapper-item_row-info">
                            <span className="history_wrapper-item_row-item_val">324 руб.</span>
                        </div>
                        <div className="history_wrapper-item_row-info">
                            <span className="history_wrapper-item_row-item_val">28 098 887 руб.</span>
                        </div>
                    </div>

                    <div className="history_wrapper-item_row">
                        <div className="history_wrapper-item_row-total-cta">
                            <span className="history_wrapper-item_row-total-cta_content">Положить в корзину</span>
                        </div>
                        <div className="history_wrapper-item_row-total">
                            <div className="history_wrapper-item_row-total_content">
                                <span className="history_wrapper-item_row-total_content-title">Итого:</span>
                                <span className="history_wrapper-item_row-total_content-value">265 ед.</span>
                            </div>
                        </div>
                        <div className="history_wrapper-item_row-total">
                            <div className="history_wrapper-item_row-total_content">
                                <span className="history_wrapper-item_row-total_content-title">Итого:</span>
                                <span className="history_wrapper-item_row-total_content-value">123 484 958 руб.</span>
                            </div>

                            <div className="history_wrapper-item_row-total_btns">
                                <div className="history_wrapper-item_row-total_btns-btn"><span>Закрыть</span></div>
                                <div className="history_wrapper-item_row-total_btns-btn"><span>Повторить заказ</span></div>
                            </div>
                            

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
