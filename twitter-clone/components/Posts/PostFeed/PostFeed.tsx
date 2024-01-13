import usePosts from "@/hooks/usePosts";
import PostItem from "../PostItem/PostItem";


interface PostFeedProps {
    userId?: string;
}

const PostFeed: React.FC<PostFeedProps> = ({
    userId,
}) => {
    const { data: posts = [] } = usePosts(userId as string);
  return (
    <>
        {posts.map((post: Record<string, any>) => (
           <PostItem userId={userId} key={post.id} data={post}/> 
        ))}
    </>
  )
}

export default PostFeed