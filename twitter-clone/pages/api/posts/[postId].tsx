import React from 'react';
import { useRouter } from 'next/router';
import usePost from '../../../hooks/usePost';
import { ClipLoader } from 'react-spinners';
import Header from '../../../components/Header/Header';
import PostItem from '../../../components/Posts/PostItem/PostItem';
import Form from '../../../components/Form/Form';

const PostView = () => {
	const router = useRouter();
	const { postId } = router.query;

	const { data: fetchedPost, isLoading } = usePost(postId as string);

	if (isLoading || !fetchedPost) {
		return (
			<div className="flex justify-center items-center h-full">
				<ClipLoader color="lightblue" size={80} />
			</div>
		);
	}
	return (
		<>
			<Header label="Tweet" showBackArrow />
            <PostItem data={fetchedPost}/>
            <Form postId={postId as string} isComment placeholder='Tweet your reply'/>
		</>
	);
};

export default PostView;
