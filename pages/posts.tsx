import { Container } from "../components/util/container";
import { Section } from "../components/util/section";
import { Posts } from "../components/posts";
import { ExperimentalGetTinaClient } from "../.tina/__generated__/types";
import { Layout } from "../components/layout";
import matter from 'gray-matter'
import type { FooterDataType } from "../utils/types";

export default function HomePage(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  const posts = props.data.postConnection.edges;

  return (
    <Layout footerData={props.footerData}>
      <Section className="flex-1">
        <Container size="large">
          <Posts data={posts} />
        </Container>
      </Section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const client = ExperimentalGetTinaClient();
  const tinaProps = await client.PageQuery();
  
  const datasets: FooterDataType['datasets'] = matter.read('./content/pages/datasets.md').data.blocks[1].items;
  
  return {
    props: {
      ...tinaProps,
      footerData: {
        datasets
      }
    },
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;
