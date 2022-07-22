import { useSelector } from "react-redux";
import { selectTodoList } from "../rdx/todoList/selectors";

export const Home = () => {
    const items = useSelector(selectTodoList);

    return (
        <div>
            {items.map((i) => <div key={i.id}>{i.title}</div>)};
        </div>
    )       
}