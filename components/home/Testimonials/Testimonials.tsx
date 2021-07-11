import styles from "./Testimonials.module.scss";
import TestimonialsCarousel from "./TestimonialsCarousel";
import NewsArticles from "./NewsArticles";

export const Testimonials = () => {
  return (
    <section className={styles.container}>
      <div className={styles.carousel}>
        <TestimonialsCarousel />
      </div>
      <div className={styles.articles}>
        <NewsArticles />
      </div>
    </section>
  );
};

export default Testimonials;
