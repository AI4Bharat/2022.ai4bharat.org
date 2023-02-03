import { Container } from "../components/util/container";
import { Section } from "../components/util/section";
import { Bhashaverse } from "../components/bhashaverse";
import { ExperimentalGetTinaClient } from "../.tina/__generated__/types";
import { Layout } from "../components/layout";

export default function HomePage(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  const bhashaverseData = props.data.bhashaverseConnection.edges;

  return (
    <Layout>
      <Section className="flex-1">
        <Container size="large">
          <Bhashaverse data={bhashaverseData} />
        </Container>
      </Section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const client = ExperimentalGetTinaClient();
  const tinaProps = await client.PageQuery();
  return {
    props: {
      ...tinaProps,
    },
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;
