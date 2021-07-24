import Image from "next/image";
import Link from "next/link";
import { NewsArticles as data } from "@/data/home/NewsArticles";
import styles from "./NewsArticles.module.scss";

export const NewsArticles = () => {
  return (
    <div className={styles.container}>
      {data.map((article, index) => (
        <Link key={index} href={article.link}>
          <a className={styles.article} title={`${article.author}: ${article.title}`}>
            <Image
              src={article.image.location}
              width={article.image.width}
              height={article.image.height}
              alt={`${article.author}: ${article.title}`}
              className={styles.article}
            />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default NewsArticles;
