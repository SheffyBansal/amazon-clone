import React from "react";
import "./home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      ></img>
      <div className="home__row">
        <Product
          id="id"
          title="Mobile N More Wireless Bluetooth in Ear Neckband Earphone Design 14"
          price={2000}
          rating={4}
          image="https://m.media-amazon.com/images/I/41iyn4d6yEL._SX300_SY300_QL70_FMwebp_.jpg"
        ></Product>
        <Product
          id="id"
          title="Acnos Analogue Men's Watch (Pack of 3)"
          price={299}
          rating={4}
          image="https://m.media-amazon.com/images/I/51NjcaaN5cL._AC_UL480_FMwebp_QL65_.jpg"
        ></Product>
        <Product
          id="id"
          title="Yes Cart Home® Non Slip Rubber Doormat | Floor Covering Mat for Home |"
          price={524}
          rating={3}
          image="https://m.media-amazon.com/images/I/61NYy58JzDS._AC_UL480_FMwebp_QL65_.jpg"
        ></Product>
        <Product
          id="id"
          title="Kartique Brass Laxmi Ganesh Saraswati Idol Gold Color Height 7 Inches"
          price={7598}
          rating={5}
          image="https://m.media-amazon.com/images/I/7190Faq6iAL._AC_UL480_FMwebp_QL65_.jpg"
        ></Product>
        <Product
          id="id"
          title="Procus ONE Virtual Reality Headset 40MM Lenses"
          price={2000}
          rating={4}
          image="https://m.media-amazon.com/images/I/6176A7LJyTL._SX522_.jpg"
        ></Product>
        <Product
          id="id"
          title="Spigen Rugged Armor Case with Strap Compatible with Nintendo Switch - Matte Black [Video GameMobile N More Wireless Bluetooth in Ear Neckband Earphone Design 14"
          price={2000}
          rating={4}
          image="https://m.media-amazon.com/images/S/aplus-media-library-service-media/00b9f665-9e25-41fe-85fd-1d85ba85aa6d.__CR0,0,970,600_PT0_SX970_V1___.jpg"
        ></Product>
        
      </div>
    </div>
  );
}

export default Home;
