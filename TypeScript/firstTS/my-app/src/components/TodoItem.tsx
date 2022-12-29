import classes from "./TodoItem.module.css";
// prop 중 text를 받는데 타입은 string임.
const TodoItem: React.FC<{ text: string; onRemoveTodo: ()=> void }> = (props) => {
  return <li className={classes.item} onClick={props.onRemoveTodo}>{props.text} </li>;
};

export default TodoItem;
