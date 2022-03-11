
import { useState, Fragment, ChangeEvent } from "react";


// メンバーとタスクの型を定義する
type Member = "Alice" | "Bob" | "Carol";

type Task = {
  id: number;
  assignee: Member;
  title: string;
  description: string;
};

// タスクリストを作成。
const allTasks: Task[] = [
  {
    id: 1,
    assignee: "Alice",
    title: "React 学習",
    description: "v18 の機能についてキャッチアップする",
  },
  // 同じ要領で適当にタスクを作っていく
]

function TaskCard(task: Task) {
  const { assignee, title, description } = task;

  const getBorderColor = (member: Member): string => {
    if (member === "Alice") return "aqua";
    if (member === "Bob") return "lime";
    return "orange";
  };

  return (
    <div
      style={{
        border: `5px solid ${getBorderColor(assignee)}`,
        borderRadius: "18px",
        margin: "20px",
        padding: "10px",
        width: "200px",
      }}
    >
      <div style={{ fontSize: "22px" }}>{title}</div>
      <div style={{ fontSize: "14px", fontWeight: "bold" }}>{assignee}</div>
      <hr />
      <div style={{ fontSize: "14px" }}>{description}</div>
    </div>
  );
}

function TaskCardList({ taskList }: { taskList: Task[] }) {
  return taskList.length > 0 ? (
    <ul style={{ listStyleType: "none" }}>
      {taskList.map((task) => {
        return (
          <li key={task.id}>
            <TaskCard {...task} />
          </li>
        );
      })}
    </ul>
  ) : null;
}

function App() {
  const [selectedMember, setSelectedMember] = useState<Member>();
  const [headline, setHeadline] = useState<string>("");
  const [taskList, setTaskList] = useState<Task[]>([]);

  const members: Member[] = ["Alice", "Bob", "Carol"];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const member = e.currentTarget.value as Member;
    setSelectedMember(member);
    setHeadline(`${member}'s task`);
    setTaskList(() => {
      return allTasks.filter((t) => t.assignee === member);
    });
  };

  return (
    <>
      {members.map((m) => {
        return (
          <Fragment key={m}>
            <input
              type="radio"
              value={m}
              onChange={handleChange}
              checked={m === selectedMember}
            />
            {m}{" "}
          </Fragment>
        );
      })}
      <h1>{headline}</h1>
      <TaskCardList taskList={taskList} />
    </>
  );
}

export default App;
