import React from 'react';
import { Galleria } from 'primereact/galleria';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
import "./ImageCarousel.css"
const images = [
  {
    itemImageSrc: image1,
    title: 'Empowering Financial Security for Everyone',
    thumbnailImageSrc: image1,
    alt: 'Image 1',
  },
  {
    itemImageSrc: image2,
    title: 'Empowering Financial Security for Everyone',
    thumbnailImageSrc: image2,
    alt: 'Image 2'
  },
  {
    itemImageSrc: image3,
    title: 'Empowering Financial Security for Everyone',
    thumbnailImageSrc: image3,
    alt: 'Image 3'
  }
];

const itemTemplate = (item) => {
  return (
    <div className="image-container" style={{ width: '100%', textAlign: 'center' }}>
      <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />

      <div className="carousel-text-heading">
        {item.title}
      </div>
      <div className="carousel-text-paragraph">
        We are committed to providing accessible and reliable financial services to help individuals and families.
      </div>
    </div>
  );
}

const thumbnailTemplate = (item) => {
  return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
}

export const ImageCarousel = () => {
  return (
    <div className="card" style={{ width: '100%', height: '100%', margin: '0 auto' }}>
      <Galleria
        value={images}
        numVisible={5}
        circular
        responsiveOptions={[
          {
            breakpoint: '1024px',
            numVisible: 3
          },
          {
            breakpoint: '768px',
            numVisible: 2
          },
          {
            breakpoint: '560px',
            numVisible: 1
          }
        ]}
        showThumbnails={false}
        showItemNavigators
        item={itemTemplate}
        thumbnail={thumbnailTemplate}
        autoPlay={true}
        transitionOptions={{ easing: 'ease-in-out', duration: 1500 }}
      />
    </div>
  );
}