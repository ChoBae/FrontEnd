import useHttp from "../../hooks/use-http";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  // 커스텀 훅 사용 -> 같은 로직을 효과적으로 줄여줄 수 있다.
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();
  // 새로운 일 추가 기능
  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    // 2개의 파라미터값을 갖는 커스텀 훅 내의 기능
    // task를 추가하는 것이라서 post와 post시 주어져야하는 것을을 객체로 보내주고, 두번째 파라미터값으로 task를 추가하는 함수가 실행된다. 
    // bind는 보통 변수에 다른 함수를 불러오려할때 가져오지 못하는데 그 경우 bind를 써서 불러오게 함
    // 파라미터값으로 데이터를 주어줘야할때도 사용하는듯?
    sendTaskRequest(
      {
        url: "https://react-http-9ba90-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        body: { text: taskText },
        headers: {
          "Content-Type": "application/json",
        },
      },
      createTask.bind(null, taskText)
    );
  };
  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
