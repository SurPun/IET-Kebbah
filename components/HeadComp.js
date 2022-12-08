import Head from "next/head";
export default function HeadComp({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        lang="en"
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        description="description of the page for Google and other search engines"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
