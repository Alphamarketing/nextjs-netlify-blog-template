import Head from "next/head";
import config from "../../lib/config";

type Props = {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  url: string;
};
export default function BasicMeta({
  title,
  description,
  keywords,
  author,
  url,
}: Props) {
  return (
    <Head>
      <meta name="google-site-verification" content="tZqt7Sff7jc-TV1MAIWqUyyocBioQa6AovSv1GgIEkY" />
      <title>
        {title ? [title, config.site_title].join(" | ") : config.site_title}
      </title>
      <meta
        name="description"
        content={description ? description : config.site_description}
      />
      <meta
        name="keywords"
        content={
          keywords
            ? keywords.join(",")
            : config.site_keywords.map((it) => it.keyword).join(",")
        }
      />
      {author ? <meta name="author" content={author} /> : null}
      <link rel="canonical" href={config.base_url + url} />
    </Head>
  );
}
