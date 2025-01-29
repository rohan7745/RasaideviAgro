import React from "react";
import "./Advertise.css";
import img1 from "../Assets/images/Sliding images/one.png";
import img2 from "../Assets/images/Sliding images/two.png";
import img3 from "../Assets/images/Sliding images/three.png";
import img4 from "../Assets/images/Sliding images/four.png";
import img5 from "../Assets/images/Sliding images/five.png";
import img6 from "../Assets/images/Sliding images/six.png";
import img7 from "../Assets/images/Sliding images/seven.png";
import img8 from "../Assets/images/Sliding images/eight.png";
import img9 from "../Assets/images/Sliding images/nine.png";
import img10 from "../Assets/images/Sliding images/ten.png";
import img11 from "../Assets/images/Sliding images/eleven.png";
import img12 from "../Assets/images/Sliding images/twelve.png";
import img13 from "../Assets/images/Sliding images/thirteen.png";

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13
];

const Advertise = () => {
  return (
    <div className="Advertise container-fluid">
      <div className="card">
        <div className="card-body">
          <h5 className="text-center card-header">
            आमच्याकडे गावरान चिक्स, अंडी तसेच पोल्ट्रीचे सर्व साहित्य योग्य दरात मिळेल.
          </h5>
          <div className="image-slider">
            <div className="slider-wrapper">
              {images.concat(images).map((img, index) => (
                <img key={index} src={img} alt={`slide-${index}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
