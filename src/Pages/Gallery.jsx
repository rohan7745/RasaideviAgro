import React, { useState } from 'react'
import './Css/Gallery.css'
import ScrollBtn from '../Components/ScrollTop/ScrollTop';
import all_product from '../Components/Assets/Data/Gallery';
import chicksVideo from '../Components/Assets/images/Gallery/chicksVideo.mp4'
//new video
import newVideo1 from '../Components/Assets/images/Gallery/new-5.mp4'
import newVideo2 from '../Components/Assets/images/Gallery/new-9.mp4'
import newVideo3 from '../Components/Assets/images/Gallery/new-12.mp4'



const Gallery = () => {


    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const [tempImgDescription, setTempImgDescription] = useState('');

    const getImg = (imgsrc, imgDescription) => {
        setTempImgSrc(imgsrc);
        setTempImgDescription(imgDescription);
        setModel(true);
    }


    return (
        <>
            <div className={model ? "model open" : "model"}>
                <img src={tempImgSrc} alt="" />
                <h2 className='imgDescription mx-1'>{tempImgDescription}</h2>
                <i className="fa-solid fa-circle-xmark" onClick={() => setModel(false)} style={{ color: "#ffffff" }}></i>
            </div>
            < div className='gallery'>
                {all_product.map((item, index) => {
                    return (
                        <div className="pics" key={index} onClick={() => getImg(item.imgsrc, item.imgDescription)}>
                            <img src={item.imgsrc} alt={item.id} style={{ width: "100%" }} className='img-thumbnail' />
                        </div>
                    );
                })}
                <video height="300" controls>
                    <source src={chicksVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video height="300" controls>
                    <source src={newVideo1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video height="300" controls>
                    <source src={newVideo2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video height="300" controls>
                    <source src={newVideo3} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </div >
            <ScrollBtn />
        </>

    )
}

export default Gallery