import Layout from '@/components/layout';
import Head from 'next/head';

const axios = require('axios');

function About({ user }) {
  return <>
	<Head> 
		<meta rel="description" content="ASd" />
	</Head>
	<div>{JSON.stringify(user)}</div>
  </>
}

export async function getServerSideProps() {
	const res = await axios.get('https://randomuser.me/api/');
	const user = res.data;

	return {
		props: {
			user,		
		}
	}
}

About.getLayout = (page) =>  {
	return <Layout>{ page }</Layout>
}

export default About;
