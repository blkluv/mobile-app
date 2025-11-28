import { Swiper, SwiperSlide } from "swiper/react";
import AnimatedText from "../../../../components/animatedText";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ConfigContext } from "../../../../utils/configContext";
import { Autoplay } from "swiper/modules";

function Testimonials() {
  const {
    home: { testimonials },
  } = useContext(ConfigContext)!;
  if (!testimonials) return null;

  return (
    <section className="max-w-screen-lg mx-auto px-4 py-12">
      <div className="mb-6 max-w-none flex flex-col items-center prose prose-lg text-center">
        <h1 className="mb-0">
          <AnimatedText text={testimonials.title} />
        </h1>
        <motion.p
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 0.7 }}
          viewport={{ once: true }}
          className="text-xl max-w-lg"
        >
          {testimonials.subtitle}
        </motion.p>
      </div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Swiper
          loop
          autoplay
          modules={[Autoplay]}
          spaceBetween={32}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          slidesPerView={1}
        >
          {testimonials.cards.map(({ qrCode, company, role, location }, index) => (
            <SwiperSlide className="!h-[22rem] my-2" key={index}>
              <div className="h-full card shadow bg-primary">
                <div className="p-6 card-body items-center text-center">
                  {/* Job QR Code Image */}
                  <div className="w-32 h-32 mb-4 bg-white rounded-lg p-2">
                    <img 
                      src={qrCode} 
                      alt={`Apply for ${role} at ${company}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Company and Role Info */}
                  <h2 className="card-title text-primary-content mb-1 text-lg">
                    {company}
                  </h2>
                  <p className="text-primary-content/90 font-semibold mb-1">
                    {role}
                  </p>
                  <p className="text-primary-content/70 text-sm mb-4">
                    📍 {location}
                  </p>
                  
                  {/* Application CTA */}
                  <div className="mt-auto">
                    <p className="text-primary-content/80 text-sm mb-2">
                      Scan to apply with 1-minute reel
                    </p>
                    <div className="badge badge-accent badge-sm">
                      🎬 Video Application
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}

export default Testimonials;