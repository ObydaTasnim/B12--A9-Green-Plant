import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroSection = () => {
  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        className="h-[500px] md:h-[600px]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full bg-gray-200">
            <img
              src="https://media.istockphoto.com/id/1402801804/photo/closeup-nature-view-of-palms-and-monstera-and-fern-leaf-background.jpg?s=612x612&w=0&k=20&c=0pX8CbzsrqvMQKMa4853JRUw8oGy8NnsOC812H3o9Xo="
              alt="Tropical Plants"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4">
                <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
                  Bring Nature Home
                </h1>
                <p className="text-white text-lg md:text-2xl">
                  Transform your space with lush greenery
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full bg-gray-200">
            <img
              src="https://images.finegardening.com/app/uploads/2024/05/11162504/GPOD-Hayes-Hershey-Gardens-rattlesnake-calathea-thumb-1x1.jpg"
              alt="Plant Care"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4">
                <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
                  Grow with Love
                </h1>
                <p className="text-white text-lg md:text-2xl">
                  Expert care tips for thriving plants
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-full bg-gray-200">
            <img
              src="https://i0.wp.com/www.gardening4joy.com/wp-content/uploads/2021/01/Caring-for-spider-plants-Main.jpg?resize=1080%2C904&ssl=1"
              alt="Spider Plant"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4">
                <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
                  Green Living, Happy Life
                </h1>
                <p className="text-white text-lg md:text-2xl">
                  Breathe fresh air with our plant collection
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSection;
