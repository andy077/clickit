import React from 'react';
import ContentData from './ContentData.jsx';

const Hero = () => {
    return (
        <div className="hero_div">
            <div className="title_div">
                <h2>Images for your every need...</h2>
                <p>With more than 100+ high quality images uploaded every week, Clikit provides more than
                    10000+ images of different categories for your desktop background and websites. </p>
            </div>

            <div className="content_div">
                {ContentData && ContentData.map((data, index) => (
                    <div className="content_col" key={index}>
                        <img src={require('' + data.imgSrc)} />
                        <p>{data.title}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Hero;
