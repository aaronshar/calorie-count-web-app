import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'images/austin-formula1-redbull-car.jpg',
        thumbnail: 'images/austin-formula1-redbull-car.jpg',
        description: 'Redbull Racing Formula 1 car',
        originalHeight: '450px',
    },
    {
        original: 'images/hawaii-big-island-waterfall.jpg',
        thumbnail: 'images/hawaii-big-island-waterfall.jpg',
        description: 'Hawaii Big Island waterfall',
        originalHeight: '450px',
    },
    {
        original: 'images/homemade-carrot-cake.jpg',
        thumbnail: 'images/homemade-carrot-cake.jpg',
        description: 'carrot cake cream cheese frosting',
        originalHeight: '450px',
    },
    {
        original: 'images/homemade-uni-pasta.jpg',
        thumbnail: 'images/homemade-uni-pasta.jpg',
        description: 'uni pasta',
        originalHeight: '450px',
    },
    {
        original: 'images/japan-ghibli-museum-robot.jpg',
        thumbnail: 'images/japan-ghibli-museum-robot.jpg',
        description: 'Ghibli Museum robot exhibit',
        originalHeight: '450px',
    },
    {
        original: 'images/singapore-airport-photo.jpg',
        thumbnail: 'images/singapore-airport-photo.jpg',
        description: 'Changi Airport indoor waterfall',
        originalHeight: '450px',
    },
    {
        original: 'images/tahoe-winter-river.jpg',
        thumbnail: 'images/tahoe-winter-river.jpg',
        description: 'Lake Tahoe small river winter',
        originalHeight: '450px',
    },
    {
        original: 'images/taiwan-jiufen-photo.jpg',
        thumbnail: 'images/taiwan-jiufen-photo.jpg',
        description: 'Jiufen area in Taiwan',
        originalHeight: '450px',
    },
    {
        original: 'images/tokyo-unicorn-gundam-statue-odaiba.jpg',
        thumbnail: 'images/tokyo-unicorn-gundam-statue-odaiba.jpg',
        description: 'Gundam statue in Tokyo',
        originalHeight: '450px',
    },
    {
        original: 'images/tokyo-japan-shibuya-crossing.jpg',
        thumbnail: 'images/tokyo-japan-shibuya-crossing.jpg',
        description: 'Shibuya Crossing in Tokyo',
        originalHeight: '450px',
    },
]

function GalleryPage(){
    return(
        <>
            <h2>Gallery</h2>
            <p>Some pictures i've taken in the last couple years</p>
            <article className="gallery">
                <ImageGallery items={images} />
            </article>
        </>
    );
}

export default GalleryPage;