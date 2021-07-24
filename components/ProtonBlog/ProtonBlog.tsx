import FeaturedArticle from "./FeaturedArticle";
import Posts from "./Posts";
import Featured from "@/data/blog/Featured"; // Please note the {Featured[0]}, as this provides extendability in the future
import Articles from "@/data/blog/Articles";
import styles from "./ProtonBlog.module.scss";

export const ProtonBlog = () => {
  return (
    <div className={styles.container}>
      <FeaturedArticle data={Featured[0]} />
      <Posts data={Articles} />
    </div>
  );
};
export default ProtonBlog;
