import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { ArticleProperties } from "@/types/BlogArticle";
import styles from "./Post.module.scss";
import { HumanDate, unixToUTCDate } from "@/functions/TimeDate";

library.add(faComment, faArrowAltCircleRight);

export const Post = ({ data }: { data: ArticleProperties }) => {
  return (
    <div className={styles.container}>
      <div className={styles.featuredImage}>
        <Link href={data.link}>
          <a>
            <Image src={data.image.path} alt="" width={1054} height={512} />
          </a>
        </Link>
      </div>
      <div className={styles.summary}>
        <Link href={data.link}>
          <a style={{ textDecoration: "none" }}>
            <h2 className={styles.title}>{data.title}</h2>
          </a>
        </Link>
        <p className={styles.meta}>
          <time
            className={styles.date}
            dateTime={unixToUTCDate(data.meta.date)}
            title={unixToUTCDate(data.meta.date)}
          >
            Posted {HumanDate(data.meta.date)} ago
          </time>
        </p>
        <p className={styles.excerpt}>{data.excerpt}</p>
      </div>
      <span className={styles.linkAndComments}>
        <span className={styles.link}>
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            height="1rem"
            style={{ marginRight: "0.33rem", verticalAlign: "bottom" }}
          />
          <Link href={data.link}>
            <a>Read more</a>
          </Link>
        </span>

        <span className={styles.commentsCount}>
          <FontAwesomeIcon
            icon={faComment}
            height="1rem"
            style={{ marginRight: ".33rem", verticalAlign: "bottom" }}
          />
          {data.meta.comments.commentsCount == 0 && "No comments"}
          {data.meta.comments.commentsCount == 1 && "One comment"}
          {data.meta.comments.commentsCount > 1 && `${data.meta.comments.commentsCount} comments`}
        </span>
      </span>
    </div>
  );
};
export default Post;
