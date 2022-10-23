import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import Main from '../components/Main';
import { getClient } from '../lib/sanity.server';
import groq from 'groq';

export const getStaticProps = async ({ preview = false }) => {
  const headerInfo = await getClient(preview).fetch(groq`
    *[_type == "headerInfo"] | order(publishedAt desc) {
      _id,
      title,
      h1,
      typed1,
      typed2,
      typed3,
      typed4,
      h2
    }
  `);
  const aboutUs = await getClient(preview).fetch(groq`
    *[_type == "aboutUs"] | order(publishedAt desc) {
      _id,
      title,
      h2,
      h2span,
      pspan1,
      pspan2,
      pspan3,
      experience1,
      experience2,
      experience3,
    }
  `);
  const plan = await getClient(preview).fetch(groq`
    *[_type == "plan"] | order(publishedAt desc) {
      _id,
      title,
      plan1,
      plan2,
      plan3,
      plan4,
      plan5,
    }
  `);
  const prices = await getClient(preview).fetch(groq`
    *[_type == "prices"] | order(publishedAt desc) {
      _id,
      title,
      prices1,
      prices2,
      prices3,
      prices4,
    }
  `);
  return {
    props: {
      headerInfo,
      aboutUs,
      plan,
      prices
    }
  }
}

const index = ({ headerInfo, aboutUs, plan, prices }) => {
  return (
    <ContainerIndex>
      <Head>
        <title>Project FS</title>
        <link rel="icon" href="./fs.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet" /> */}
      </Head>
      <Main headerInfo={headerInfo} aboutUs={aboutUs} plan={plan} prices={prices} />
    </ContainerIndex>
  )
}

const ContainerIndex = styled.div``;

export default index;
