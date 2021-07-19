import FeaturedArticle from "./FeaturedArticle";
import Posts from "./Posts";
import styles from "./ProtonBlog.module.scss";
import featured from "@/data/blog/Featured.json"; // Please note the {featured[0]}, as this provides extendability in the future
import articles from "@/data/blog/Articles.json";

export const ProtonBlog = () => {
  return (
    <div className={styles.container}>
      <FeaturedArticle data={featured[0]} />
      <Posts data={articles} />
    </div>
  );
};
export default ProtonBlog;
