// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import backgroundImage from "../public/images/hero-bg.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Swiper
        slidesPerView={1}
      >
      <SwiperSlide>
        {" "}
        <div className="text-white items-center h-[30rem] px-10 flex">
          <div className="grid grid-cols-7 lg:grid-cols-10">
            <div className="col-span-5">
              {" "}
              <h1 className="font-dancing text-5xl">Fast Food Restaurant</h1>
              <p className="font-raleway text-lg my-10">
                Doloremque, itaque aperiam facilis rerum, commodi, temporibus
                sapiente ad mollitia laborum quam quisquam esse error unde.
                Tempora ex doloremque, labore, sunt repellat dolore, iste
                magni quos nihil ducimus libero ipsam.
              </p>
              <a href="" className="bg-primary p-2 rounded-md">
                Order Now
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      
      <SwiperSlide>
        {" "}
        <div className="text-white items-center h-[30rem] px-10 flex">
          <div className="grid grid-cols-7 lg:grid-cols-10">
            <div className="col-span-5">
              {" "}
              <h1 className="font-dancing text-5xl">Fast Food Restaurant</h1>
              <p className="font-raleway text-lg my-10">
                Doloremque, itaque aperiam facilis rerum, commodi, temporibus
                sapiente ad mollitia laborum quam quisquam esse error unde.
                Tempora ex doloremque, labore, sunt repellat dolore, iste
                magni quos nihil ducimus libero ipsam.
              </p>
              <a href="" className="bg-primary p-2 rounded-md">
                Order Now
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
