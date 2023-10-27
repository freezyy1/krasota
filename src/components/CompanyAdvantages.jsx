import React from 'react';

const CompanyAdvantages = () => {
    return (
        <div className="container text-center">
            <h1 className="font-weight-bold mb-5 ">Преимущества компании</h1>
            <div className="row">
                <div className="col-md-3 d-flex align-items-center mb-4">
                    <img src="kot.jpg" alt="Медицинское образование" style={{ maxWidth: '150px', marginLeft: "auto" }} />
                </div>
                <div className="col-md-9">
                    <h2 className="font-weight-bold fs-3">Медицинское образование</h2>
                    <p>
                        Потому что косметология – это наука не только о красоте, но и, прежде всего, о здоровье кожи.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 d-flex align-items-center mb-4">
                    <img src="kot.jpg" alt="Качество и доступность услуг" style={{ maxWidth: '150px', marginLeft: "auto" }} />
                </div>
                <div className="col-md-9">
                    <h2 className="font-weight-bold">Качество и доступность услуг</h2>
                    <p>
                        Я постоянно повышаю свою квалификацию и обучаюсь работе с новыми препаратами. Все горячие новинки только у меня!
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 d-flex align-items-center mb-4">
                    <img src="kot.jpg" alt="Есть онлайн консультация" style={{ maxWidth: '150px', marginLeft: "auto" }} />
                </div>
                <div className="col-md-9">
                    <h2 className="font-weight-bold">Есть онлайн консультация</h2>
                    <p>
                        Вы можете написать мне в любом популярном мессенджере с любой точки мира и я вас проконсультирую онлайн совершенно бесплатно.
                    </p>
                </div>
            </div>
        </div>
    );
};

export { CompanyAdvantages };
