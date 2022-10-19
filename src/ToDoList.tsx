import React from "react";
import { useForm } from "react-hook-form";

const ToDoList = () => {
  const { register, watch } = useForm();
  return (
    <div>
      <form>
        <input {...register("todo")} placeholder='to do 입력' />
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDoList;
