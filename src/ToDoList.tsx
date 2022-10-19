import React from "react";
import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  username: string;
  password: string;
}

const ToDoList = () => {
  const { register, handleSubmit, formState } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = () => {};
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "이메일을 입력하세요",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "네이버 메일만 가능합니다.",
            },
          })}
          placeholder='email'
        />
        {formState.errors?.email?.message}
        <input
          {...register("username", { required: "이름을 입력하세요" })}
          placeholder='username'
        />
        {formState.errors?.username?.message}
        <input
          {...register("password", {
            required: "비밀번호를 입력하세요",
            minLength: 8,
          })}
          placeholder='password'
        />
        {formState.errors?.password?.message}
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDoList;
