import { useState } from "react";

// useForm 커스텀 훅 정의(초기값을 매개변수로 받음.)
const useForm = (initialValues) => {
  // values: 입력값을 저장하는 상태 변수
  // setValues: 상태 변수를 업데이트하는 함수
  const [values, setValues] = useState(initialValues);

  // handleChange 함수: 입력값이 변경될 때 호출되는 함수
  //   event 매개변수는 이벤트 객체를 나타냄.
  const handleChange = (event) => {
    // 이벤트에서 name과 value 추출
    const { name, value } = event.target;
    // setValues를 사용하여 상태 변수를 업데이트
    // 기존의 values 객체를 복사한 후, 새로운 값을 할당. 이때, [name]: value를 사용하여 변경된 필드만 업데이트함.
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  // resetForm 함수: 폼을 초기화하는 함수
  //   resetForm() 함수는 values 객체를 초기화하는 역할을 합니다.
  const resetForm = () => {
    // 초기값으로 상태 변수를 업데이트
    setValues(initialValues);
  };

  // values, handleChange, resetForm을 반환
  // 다른 컴포넌트에서 이 커스텀 훅을 사용할 때, 이 값을 활용할 수 있음
  return { values, handleChange, resetForm };
};

// useForm 훅을 외부로 공개
export default useForm;
