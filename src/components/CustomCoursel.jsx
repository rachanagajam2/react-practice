import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CustomCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYp8Lf1yOv9z7Kt2PWaDwUjEhVEbeZXQeeBQ&s' text="First slide" className='w-100' style={{height:"500px"}}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://static.startuptalky.com/2024/06/Blinkit-Business-Model-StartupTalky.jpg' text="Second slide" className='w-100' style={{height:"500px"}}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXn35CF9QJEbb2OP_02-0iKPPf6xpBT8jZg&s' text="Third slide" className='w-100'style={{height:"500px"}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;