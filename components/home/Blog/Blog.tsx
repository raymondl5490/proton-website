import Article from "./Article";
import data from "./Articles.json";
import styles from "./Blog.module.scss";

export const Blog = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Proton News</h1>
      <div className={styles.articles}>
        {data.map((article, index) => (
          <Article data={article} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
