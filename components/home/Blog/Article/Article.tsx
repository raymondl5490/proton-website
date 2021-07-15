import Image from "next/image";
import Link from "next/link";
import humanizeDuration from "humanize-duration";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faComment } from "@fortawesome/free-regular-svg-icons";
library.add(faComment);
import { ArticleProperties } from "./Article.d";

import styles from "./Article.module.scss";

export const HumanDate = (unixTimestamp: number): string => {
  return humanizeDuration(Math.floor(Date.now() - unixTimestamp * 1000), {
    largest: 2,
    maxDecimalPoints: 0,
  });
};

export const unixToUTCDate = (unixTimestamp: number): string =>
  new Date(unixTimestamp * 1000).toUTCString();

export const Article = ({ data }: { data: ArticleProperties }) => {
  return (
    <article className={styles.container}>
      <div className={styles.image}>
        <Link href={data.link}>
          <a>
            <Image
              src={data.image.path}
              width={data.image.dimensions.width}
              height={data.image.dimensions.height}
              alt={data.image.description}
            />
          </a>
        </Link>
      </div>

      <Link href={data.link}>
        <a>
          <h1 className={styles.title}>{data.title}</h1>
        </a>
      </Link>

      <p className={styles.excerpt}>{data.excerpt}</p>

      <div className={styles.meta}>
        <time
          className={styles.date}
          dateTime={unixToUTCDate(data.meta.date)}
          title={unixToUTCDate(data.meta.date)}
        >
          Posted {HumanDate(data.meta.date)} ago
        </time>
        <span className={styles.comments}>
          <FontAwesomeIcon
            icon={faComment}
            height=".8rem"
            style={{ verticalAlign: "bottom", marginRight: ".33rem" }}
          />
          {data.meta.comments.commentsCount == 0 && "No comments"}
          {data.meta.comments.commentsCount == 1 && "One comment"}
          {data.meta.comments.commentsCount > 1 && `${data.meta.comments.commentsCount} comments`}
        </span>
      </div>
    </article>
  );
};

export default Article;
