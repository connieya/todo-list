import React from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { setConstantValue } from "typescript";

interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

interface IForm {
  toDo: string;
}

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

const ToDoList = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onSubmit = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <div>
      <h1>To dos</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("toDo", {
            required: "Please write a To Do",
          })}
          placeholder='to do 입력하기'
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}> {toDo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
