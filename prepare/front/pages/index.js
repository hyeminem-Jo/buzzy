import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { useSelector } from "react-redux";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

const Home = () => {
	const me = useSelector(({user}) => user.me)
	const mainPosts = useSelector(({post}) => post.mainPosts)
	return (
		<>
			<Head>
				<title>Buzzy</title>
			</Head>
			<AppLayout>
				<div>홈 입니다</div>
				{me && <PostForm />}
				{mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
			</AppLayout>
		</>
	);
};

export default Home;
