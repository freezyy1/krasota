import React from "react";
import './../styles/Works.scss';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import kot from"../images/kot.jpg"
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";


function Works() {
    const [open, setOpen] = React.useState(false);
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);



    const mockImage = [
        { src: kot, alt: "img-1", title: "Slide title", description: "Slide description",},
        { src: "https://bit.ly/2rtIqMl", alt: "img-2"},
        { src: kot, alt: "img-3"},
        { src: kot, alt: "img-4"},
        { src: kot, alt: "img-5"},
        { src: kot, alt: "img-6"},
        { src: kot, alt: "img-7"},
        { src: kot, alt: "img-8"},
        { src: kot, alt: "img-9"}
    ];

    // Функция для открытия лайтбокса и установки текущего индекса
    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setOpen(true);
    };

    return (
        <section className="carousel">
            <div className="container">
                <h1 className="display-4 fw-medium animate-from-top" style={{ marginBottom: '50px', textAlign:"center"}}>Примеры наших работ</h1>
                <div className="carousel__box">
                    {mockImage.map((elm, index) => {
                        return (
                            <img
                                key={index}
                                onClick={() => openLightbox(index)}
                                src={elm.src}
                                alt={elm.alt}
                                className="imghovers animate-from-top"
                            />
                        );
                    })}

                    <Lightbox
                        plugins={[Slideshow, Captions]}
                        open={open}
                        close={() => setOpen(false)}
                        slides={mockImage.map(elm => ({ src: elm.src, alt: elm.alt }))}
                        index={currentImageIndex}
                    />
                </div>
            </div>
        </section>
    )
}

export { Works };