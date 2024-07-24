import DragAndDrop from "@/components/DragAndDrop";
import { Container, Main, Title } from "@/styles/shared";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>DICOM Checker</title>
        <meta
          name="description"
          content="Check if a file is a valid DICOM file"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>
          DICOM <span>Checker</span>
        </Title>
        <DragAndDrop />
      </Main>
    </Container>
  );
};

export default Home;
