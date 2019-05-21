import React from 'react';
import ReactDOM from 'react-dom';
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
function SamplePrevArrow(props) {
const { className, style, onClick } = props;
return (
    <div
    className={className}
    style={{ ...style, display: "block", background: "green" }}
    onClick={onClick}
    />
);
}

class Carousel extends React.Component {
    render() {
      const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 100,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
      return (
        <div>
          <Slider {...settings}>
            <div>
                <img className="slider" src="https://pixel.nymag.com/imgs/daily/selectall/2018/12/26/snapdog_00.w700.h700.jpg" />
            </div>
            <div>
                <img className="slider" src="data:image/jpeg;base64,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" />
            </div>
            <div>
                <img className="slider" src="https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg" />
            </div>
            <div>
                <img className="slider" src="https://i.ytimg.com/vi/bPdRgYcKfyQ/maxresdefault.jpg" />
            </div>
            <div>
                <img className="slider" src="data:image/jpeg;base64,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" />
            </div>
            <div>
                <img className="slider" src="https://www.sciencenews.org/sites/default/files/2018/08/main/articles/082918_lh_crispr-beagles_feat_REV.jpg" />
            </div>
          </Slider>
        </div>
      );
    }
  }

  export default Carousel;