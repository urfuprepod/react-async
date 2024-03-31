import React from "react";
import Post from "../Post/Post";
import styles from './styles.module.css';
import { withLoading } from "../../hocs/withLoading";

const PostsList = ({ posts }) => {
    return (
        <div className={styles["post-list"]}>
            {posts?.map((post) => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    );
};

// export default PostsList;
export default withLoading(PostsList);