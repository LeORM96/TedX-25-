import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

const images = [
  "./carousel/image1.jpg",
  "./carousel/image2.jpg",
  "./carousel/image3.jpg",
  "./carousel/image4.jpg",
  "./carousel/image5.jpg"
];

const gridItems = [
  {
    image: "/images/e.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque justo eget leo placerat, ut ornare sapien pretium. Duis vehicula tincidunt erat, a scelerisque elit consequat a. Donec feugiat tristique libero, ac scelerisque magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque justo eget leo placerat, ut ornare sapien pretium. Duis vehicula tincidunt erat, a scelerisque elit consequat a. Donec feugiat tristique libero, ac scelerisque magna."
  },
  {
    image: "/images/b.jpeg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque justo eget leo placerat, ut ornare sapien pretium. Duis vehicula tincidunt erat, a scelerisque elit consequat a. Donec feugiat tristique libero, ac scelerisque magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque justo eget leo placerat, ut ornare sapien pretium. Duis vehicula tincidunt erat, a scelerisque elit consequat a. Donec feugiat tristique libero, ac scelerisque magna."

  },
  {
    image: "/images/c.jpeg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque justo eget leo placerat, ut ornare sapien pretium. Duis vehicula tincidunt erat, a scelerisque elit consequat a. Donec feugiat tristique libero, ac scelerisque magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque justo eget leo placerat, ut ornare sapien pretium. Duis vehicula tincidunt erat, a scelerisque elit consequat a. Donec feugiat tristique libero, ac scelerisque magna."

  },
  {
    image: "/images/d.jpeg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque justo eget leo placerat, ut ornare sapien pretium. Duis vehicula tincidunt erat, a scelerisque elit consequat a. Donec feugiat tristique libero, ac scelerisque magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque justo eget leo placerat, ut ornare sapien pretium. Duis vehicula tincidunt erat, a scelerisque elit consequat a. Donec feugiat tristique libero, ac scelerisque magna."

  },
  {
    image: "/images/f.jpeg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque justo eget leo placerat, ut ornare sapien pretium. Duis vehicula tincidunt erat, a scelerisque elit consequat a. Donec feugiat tristique libero, ac scelerisque magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque justo eget leo placerat, ut ornare sapien pretium. Duis vehicula tincidunt erat, a scelerisque elit consequat a. Donec feugiat tristique libero, ac scelerisque magna."
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false // Hide navigation buttons
};

const App = () => {
  return (
    <div className="container">
<h1 className="main-heading">2024 : Nurturing the Ne<span style={{ color: "red" }}>X</span>t</h1>

      <p>The theme "Nurturing the NeXt" celebrated growth and innovation, guided by lessons from the past. It emphasised that success requires continuous nurturing of oneself and empowering the next generation of thinkers, innovators, and leaders to remain at the forefront of progress.</p>
    
      <p>Held on January 13, 2024, at IIM Bangalore as part of its 50th-year celebration, this edition featured 11 exceptional speakers sharing transformative ideas and stories. Their insights highlighted the importance of mentorship, knowledge transfer, and creating an environment for innovation while reflecting on past learnings.</p>
    
      <p>The event inspired participants to explore new possibilities while staying grounded in values and experiences. By celebrating the journeys of trailblazers, TEDxIIMBangalore encouraged the audience to nurture future generations and continue building a legacy of enduring success and innovation.</p>

      <h2>Event <span style={{ color: "red" }}>Highlights</span></h2>      
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      <h2 style={{ color: "red" }}>Speakers</h2>
      <p style={{marginTop:"-20px"}}>Here is the lineup of speakers for the 2024 edition</p>
      <div className="grid-container">
        {gridItems.map((item, index) => (
          <div key={index} className="grid-item">
            <img src={item.image} alt={`TEDx Image ${index + 1}`} />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
