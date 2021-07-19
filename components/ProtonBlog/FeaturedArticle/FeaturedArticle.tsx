import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/components/site/callToActionButton";
import styles from "./FeaturedArticle.module.scss";
import { ArticleProperties } from "@/types/BlogArticle";
import { HumanDate, unixToUTCDate } from "@/functions/TimeDate";

export const FeaturedArticle = ({ data }: { data: ArticleProperties }) => {
  return (
    <section className={styles.container}>
      <div className={styles.summary}>
        <h1 className={styles.title}>It is time to ban surveillance-based advertising</h1>
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
        <Link href={data.link}>
          <a>
            <CTAButton type={4}>Read more</CTAButton>
          </a>
        </Link>
      </div>
      <div className={styles.featuredImage}>
        <Image
          src={data.image.path}
          width={data.image.dimensions.width}
          height={data.image.dimensions.height}
          alt={data.image.description}
        />
      </div>
    </section>
  );
};
export default FeaturedArticle;
