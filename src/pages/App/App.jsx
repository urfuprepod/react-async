import { useState } from "react";
import Post from "../../components/Post/Post";
import styles from "./styles.module.css";

function App() {
    const [posts, setPosts] = useState([]);

    return (
        <div className={styles.container}>
            <h1 className={styles["post__header"]}>Приложение постов</h1>
            <div className={styles["post-list"]}>
                {posts.map((post) => (
                    <Post post={post} />
                ))}
            </div>
        </div>
    );
}

export default App;
