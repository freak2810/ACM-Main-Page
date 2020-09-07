import React,{useState,useCallback} from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import {photos} from "components/galleryPage/IMAGES_DATA";
import styles from  "components/galleryPage/Gallery.module.css"
import Header from "components/header/Header";

export default function ImageGallery() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);


    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };


    return <div className={styles.gallery}>
        <Header name="Gallery" description="ACM MVSR - Student Chapter has snapshot all the events happened in the past as they serve as a memory and a constant remainder of our efforts and the need to share and improve knowledge"/>
        <div className={styles.galleryHeading} >
            <h1>Gallery</h1>
        </div>
        <div className={styles.galleryImages}>
            <Gallery
                photos={photos}
                onClick={openLightbox}
            margin={5}
            />
            <ModalGateway >
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    </div>
}