import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (props) => {
  return (
    <ul className={classes.todo}>
      {props.items.map((item) => (
        // <li key={item.id}>{item.text}</li>
        <TodoItem
          key={item.id}
              text={item.text}
              // js -> bind 함수를 사용해서 함수를 호출할 때 this를 바인딩할 수 있다.
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        ></TodoItem>
      ))}
    </ul>
  );
};

export default Todos;
