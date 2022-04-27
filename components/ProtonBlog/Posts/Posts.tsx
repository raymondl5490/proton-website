import Post from "./Post/Post";
import styles from "./Posts.module.scss";
import { ArticleProperties } from "@/models/BlogArticle";

export const Posts = ({ data }: { data: ArticleProperties[] }) => {
  return (
    <section className={styles.container}>
      {data.map((post, index) => (
        <Post data={post} key={index} />
      ))}
    </section>
  );
};
export default Posts;
