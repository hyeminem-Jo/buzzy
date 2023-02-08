import AppLayout from "../components/AppLayout";
import Head from "next/head";

const Home = () => {
	return (
		<>
			<Head>
				<title>Buzzy</title>
			</Head>
			<AppLayout>
				<div>홈 입니다</div>
			</AppLayout>
		</>
	);
};

export default Home;
