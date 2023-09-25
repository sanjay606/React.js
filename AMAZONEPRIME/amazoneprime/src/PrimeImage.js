import React from "react";
import "./PrimeImg.css";
import { Link } from "react-router-dom";
const PrimeImage = () => {
  return (
    <div>
    <div>
      <img
        className="mainimage"
        src="https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP.jpg"
      ></img>
      <div className="welcome">
        <h2 className="">Welcome to Prime Video</h2>
        <p className="">
          Watch the latest movies, TV shows, and award-winning Amazon Originals
        </p>
        <button className="btn-1"><Link to="/Sign in to join prime"><h4> Sign in to join Prime </h4></Link></button>
      </div>
      </div>
<div>
<img className="mainimage"src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/TVOD/TVOD_MLP_Left.jpg">
</img>

<div className="welcome-2">
<h3>Movie rentals on Prime Video</h3>
<p>Early Access to new movies, before digital subscription</p>
<button className="btn-2">Rent Now</button>
</div>
      </div>
      
      <div className="fav-channel">
      <div className="fav-wel">
        <h1 className="">Your favorite channels all in one place</h1>
        <p className="">
          With Prime Video Channels, find shows and movies from your favorite
          channels all in one place. Enjoy with an add-on subscription to
          Channels of your choice
        </p>
      </div>
        <div className="channel-img">
        <div className="img-1">
        <img  src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/LionsgatePlay-426X2946_V1.jpg"></img>
        </div>
        <div  className="img-2">
        
        <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Discovery.jpg"></img>
        </div>
        <div  className="img-3" >
        
        <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Erosnow-426X2948_V1.jpg"></img>
        </div>
          <div  className="img-4" >
            
            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_MANORAMAMAX.jpg"></img>
          </div>
          <div  className="img-5">
            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/hoichoi-426X2946_V1.jpg"></img>
          </div>
          <div  className="img-6">
            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Vrott.png"></img>
          </div>
          <div  className="img-7">
            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Amc.png"></img>
          </div>
          <div className="img-8">
            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Docubay-426X2947_V1.jpg"></img>
          </div>
          <div  className="img-9">
            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Mubi-426X2946_V1.jpg"></img>
          </div>
          <div  className="img-10">
            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/iWonder.png"></img>
          </div>
          <div  className="img-11">
            
            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Stingray.png"></img>
          </div>
          <div  className="img-12">
            
            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/426x294_CuriosityStream.png"></img>
          </div>
        </div>
      </div>

      <div>
        <img
          className="mainimage"
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/MLP_Template_Image_Left.jpg"
        ></img>
        <div className="welcome-3">
          <h2 className="">Even better with Fire TV Stick</h2>
          <p className="">
            The biggest movies and TV shows are always better on a big screen.
            Simply plug in your Amazon Fire TV Stick and stream on any
            HDTV.Press the voice button on the remote and say the name of the
            title you want to watch to find it in seconds. Get started
          </p>
          <button className="btn-3">Get Started</button>
        </div>
      </div>
      <div>
        <img
          className="mainimage"
          src="https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/IN-kids-30Jan._CB1517304519_.jpg"
        ></img>
        <div className="welcome-4">
          <h2 className="">Family Friendly</h2>
          <p className="">
            With easy to use Parental Controls and a dedicated kids page, enjoy
            secure, ad-free kids entertainment. Kids can enjoy popular TV shows
            like Peppa Pig, Powerpuff Girls, and Chhota Bheem.
          </p>
          <button className="btn-4">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default PrimeImage;
