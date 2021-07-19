import Head from "next/head";
import ProtonBlog from "@/components/ProtonBlog";

export const Blog = () => {
  return (
    <main>
      <Head>
        <title>ProtonMail Blog - Secure email news</title>
        <meta name="description" content="Free encrypted mail available to everyone." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProtonBlog />
    </main>
  );
};

export default Blog;
