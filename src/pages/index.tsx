import Card from "@/components/Card";
import Header from "@/components/Header";
import styled from "@emotion/styled";
import Head from "next/head";

const SimpleGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 80px;
  gap: 30px;
`;

const Home = () => {
  return (
    <>
      <Head>
        <title>Clean UI</title>
        <meta
          name="description"
          content="A simple UI made for practise purposes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next.svg" />
      </Head>
      <Header />
      <SimpleGrid>
        <Card
          imageAlt="shoes"
          imageUrl="https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60"
          title="#B8/457843"
          label="Enoch Citizen"
          price={260}
          favNum={92}
          buttonText="BID NOW"
        />
        <Card
          imageAlt="glass"
          imageUrl="https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          title="#B8/457843"
          label="Enoch Citizen"
          price={260}
          favNum={32}
          buttonText="BID NOW"
        />
        <Card
          imageAlt="box"
          imageUrl="https://images.unsplash.com/photo-1634283715079-d91bbed0ece0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHByb2R1Y3R8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          title="#B8/457843"
          label="Enoch Citizen"
          price={260}
          favNum={92}
          buttonText="ADD TO CART"
          hasExtraButton
        />
      </SimpleGrid>
    </>
  );
};

export default Home;
