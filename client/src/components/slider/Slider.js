import React from 'react';
import SliderSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../../imagenes/book.jpg';
import slider2 from '../../imagenes/coffee.jpg';
import slider3 from '../../imagenes/colored-pencils.jpg';
import slider4 from '../../imagenes/desk.jpg';
import slider5 from '../../imagenes/desk1.jpg';
import slider6 from '../../imagenes/notebook.jpg';


const Slider = () => {
	var settings = {
	    dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
		autoplay: true,
		cssEase: "linear",
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
		
	  };

	return(
			<>
			    <section className="hero">
			        <div className="hero-container">
			        	<SliderSlick {...settings}>
					      <div>
					        <img src={slider1} alt="carrousel" />
					      </div>
					      <div>
					        <img src={slider2} alt="carrousel" />
					      </div>
					      <div>
					        <img src={slider3} alt="carrousel" />
					      </div>
					      <div>
					        <img src={slider4} alt="carrousel" />
					      </div>	
                          <div>
					        <img src={slider5} alt="carrousel" />
					      </div>
                          <div>
					        <img src={slider6} alt="carrousel" />
					      </div>				     
					    </SliderSlick>
			        </div>
			    </section>
			</>
		)
}

export default Slider;