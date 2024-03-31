import styles from "./styles.module.css";
import PostsList from "../../components/PostsList/PostsList";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTodos, fetchTodosThunk } from "../../store/todos/actionsCreators";
import { Link } from "react-router-dom";

function App() {
    const { todos, isLoading, error } = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodosThunk({}))
    }, [])

    return (
        <div className={styles.container}>
            <h1 className={styles["post__header"]}>Приложение постов</h1>
            <Link to="/test">На тестовую страницу</Link>
            <PostsList isLoading={isLoading} error={error} posts={todos} />
        </div>
    );
}

export default App;
