import useForm from "../hooks/useForm";

const LoginForm = (initialValues) => {
//   const { values, handleChange, resetForm } = useForm(""); //이 초기화 방법이 틀린 이유(더보기...)
// -> 위의 초기화 방법이 틀린 이유:
//      => 죄송합니다. 이해에 혼란을 드린 것 같습니다. 처음에 작성하신 코드 const { values, handleChange, resetForm } = useForm("");은 초기화를 위해 useForm 커스텀 훅을 사용하는 것은 맞습니다. 그러나 초기값을 빈 문자열로 설정하면 문제가 발생합니다.

// useForm 커스텀 훅은 initialValues 매개변수를 통해 초기값을 받는데, 여기서 초기값은 객체 형태로 전달되어야 합니다. 따라서, LoginForm 컴포넌트에서 초기값을 전달할 때 객체 형태로 전달해야 합니다. 예를 들어, const { values, handleChange, resetForm } = useForm({ username: "", password: "" });와 같이 사용해야 합니다.

// 이렇게 수정하면 resetForm 함수를 호출하면 username과 password가 모두 초기값인 빈 문자열로 리셋됩니다. 이전에 드린 답변에 오해를 불러일으킨 점에 대해 사과드립니다. 이해에 혼란을 드려 죄송합니다.
const { values, handleChange, resetForm } = useForm({ username: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    resetForm(); //여기?
  };
  return (
    <div>
      <p>this is a LoginForm.js</p>
      <form onSubmit={handleSubmit}>
        <label>사용자명: </label>
        <input
          name="username"
        //   value={values.name} //왜 이건 reset 안되냐고
          value={values.username}
          onChange={handleChange}
          type="text"
        />
        <label>password</label>
        <input
          name="password"
          value={values.password}
          onChange={handleChange}
          type="password"
        />
        <button type="submit"> login</button>
      </form>
    </div>
  );
};

export default LoginForm;
