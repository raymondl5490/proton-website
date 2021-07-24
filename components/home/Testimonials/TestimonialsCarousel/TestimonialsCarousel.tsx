import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { TestimonialProperties } from "@/types/Testimonials";
import testimonialsData from "@/data/home/Testimonials.json";
import styles from "./TestimonialsCarousel.module.scss";

const data: TestimonialProperties[] = testimonialsData;

export const TestimonialsCarousel = () => {
  return (
    <div className={styles.container}>
      <Carousel autoPlay={true} showThumbs={false}>
        {data.map((testimonial, index) => (
          <div key={index} className={styles.testimonial}>
            <p className={styles.author}>{testimonial.author}</p>
            <Link href={testimonial.link}>
              <a className={styles.link}>
                <p className={styles.quote}>&quot;{testimonial.quote}&quot;</p>
              </a>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialsCarousel;
