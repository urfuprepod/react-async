import React from "react";
import Badge from "../Badge/Badge";
import styles from "./styles.module.css";

const Post = ({ post }) => {
    const { id, todo, completed, userId } = post;

    return (
        <div className={styles["post"]}>
            <div className={styles["post-header"]}>
                <h3 className={styles["post__title"]}>{ todo }</h3>
                <Badge>{id}</Badge>
            </div>
            <div className={styles["post-body"]}>
                <p>Автор: {userId}</p>
                <p>Выполнено: {completed ? "Да" : "Нет"}</p>
            </div>
        </div>
    );
};

export default Post;
