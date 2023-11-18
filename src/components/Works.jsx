import React from "react";
import './../styles/Works.scss';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import work1 from "../images/work1.jpg"
import work2 from "../images/work2.jpg"
import work3 from "../images/work3.jpg"
import work4 from "../images/work4.jpg"
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";


function Works() {
    const [open, setOpen] = React.useState(false);
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);



    const mockImage = [
        { src: work3, alt: "img-3"},
        { src: work4, alt: "img-4"},
        { src: work2, alt: "img-2"},
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