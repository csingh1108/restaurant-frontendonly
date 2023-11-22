import {images} from '../../constants'
import './Gallery.css';
import {SubHeading} from "../../components/index.js";
import React from "react";
import {BsArrowLeftShort, BsArrowRightShort, BsInstagram} from "react-icons/bs";

const galleryImages = [images.gallery01, images.gallery02, images.gallery03 , images.gallery04]

const Gallery = () => {
    const scrollRef = React.useRef(null)

    const scroll=(direction) => {
        const {current} = scrollRef;
        if(direction === 'left'){
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;
        }
    }

    return (
        <div className="app__gallery flex__center">
            <div className="app__gallery-content">
                <SubHeading title="Instagram"/>
                <h1 className="headtext__cormorant">Photo Gallery</h1>
                <p className="p__opensans" style={{color: '#AAA', marginTop: '2rem'}}>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <button type="button" className="custom__button">View More</button>
            </div>
            <div className="app__gallery-images">
                <div className="app__gallery-images_container" ref={scrollRef}>
                    {galleryImages.map((image, index) => (
                        <div className="app__gallery-images_card flex__center" key={`galley_image-${index + 1}`}>
                            <img src={image} alt={`galleryimage-${index}`} />
                            <BsInstagram className="gallery__image-icon" />
                        </div>
                    ))}
                </div>
                <div className="app__gallery-images_arrows">
                    <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
                    <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
                </div>
            </div>

        </div>
    );
}


export default Gallery;
