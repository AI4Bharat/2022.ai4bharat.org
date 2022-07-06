import { Blocks } from "../components/blocks-renderer";
import { ExperimentalGetTinaClient } from "../.tina/__generated__/types";
import { useTina } from "tinacms/dist/edit-state";
import { Layout } from "../components/layout";
//import { FooterDataType } from '../utils/types'
import matter from 'gray-matter'

export default function HomePage(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  return (
    <Layout data={data.global as any}>
      <Blocks {...data.page} />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const client = ExperimentalGetTinaClient();
  const tinaProps = await client.ContentQuery({
    relativePath: `${params.filename}.md`
  });

  // const datasets: FooterDataType['datasets'] = matter.read('./content/pages/datasets.md').data.blocks[1].items;

  return {
    props: {
      data: tinaProps.data,
      query: tinaProps.query,
      variables: tinaProps.variables,
      // footerData: {
      //   datasets
      // }
    },
  };
};

export const getStaticPaths = async () => {
  const client = ExperimentalGetTinaClient();
  const pagesListData = await client.pageConnection();
  return {
    paths: pagesListData.data.pageConnection.edges.map((page) => ({
      params: { filename: page.node._sys.filename },
    })),
    fallback: false,
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;
