import React from 'react';
import './../styles/feedback.scss';
import avatarImg from './../images/avatar1.jpg';

const Feedback = () => {
    const feedbackData = [
        {
            id: 1,
            text: "Наконец таки мы собрались и записались)) Выражаю большую благодарность за себя и за свою мамочку!!! Светлана, у вас волшебные ручки! Огромное Вам спасибо за чудные процедуры! В восторге! ",
            author: "Мария Бородулина",
        },
        {
            id: 2,
            text: "Побывала на косметических процедурах у Светланы, осталась довольна результатом. Отличный мастер с золотыми руками... Осталась безумно довольна)))",
            author: "Ольга Игушкина",
        },
        {
            id: 3,
            text: "Сходила сегодня на чистку лица и осталась довольна. Мне она просто необходима, боль терпима, а самое главное эффективно\nВсё очень понравилось, всё супер!",
            author: "Юлия Гордиевская",
        },
        {
            id: 4,
            text: "Была сегодня у Светланы на чистке лица. Так давно мечтала снова попасть и вот радость. Как всегда все на высоте, ощущения превосходные! Кожа сияет и дышит!",
            author: "Наталья Лазарева",
        },
    ];


    return (
        <div>
            <section id="feedback" className="feedback">
                <div className="container">
                    <h1 className="feedback__title display-4 fw-medium">
                        Отзывы наших клиентов
                    </h1>
                    <div className="feedback__inner">
                        {feedbackData.map((feedback) => (
                            <div key={feedback.id} className="feedback__item ">
                                <img src={avatarImg} alt="Avatar"/>
                                <div className="feedback__box">
                                    <p className="feedback__text fs-5">{feedback.text}</p>
                                    <h5 className="feedback__box-title">{feedback.author}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export {Feedback};
