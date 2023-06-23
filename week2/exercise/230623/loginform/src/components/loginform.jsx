import React, { useState } from "react";

// 로그인폼 만들기
// 사용자명: admin, password: password => 로그인 성공 if not, 로그인 실패

function LoginForm() {
  const [user, setUser] = useState("");
  const [pw, setPw] = useState("");

  const HandleLogin = () => {
    const user = document.getElementById("user");
    const pw = document.getElementById("pw");

    if (user.value === "admin" && pw.value === "password") {
      alert("success!");
    } else {
      alert("fail");
    }
  };

  return (
    <>
      <div>
        user:{" "}
        <input
          id="user"
          type="text"
          value={user}

          // input 요소의 값이 변경될 때마다 호출되는 이벤트 핸들러.
          // e는 이벤트 객체를 나타내며, e.target.value는 input 요소의 현재 값.
          // setUser(e.target.value)는 useState 훅을 사용하여 상태 값을 업데이트하는 함수. 
          // setUser 함수에 e.target.value를 전달하여 사용자명 상태 값을 변경함.
          // 이렇게 작성된 이벤트 핸들러는 입력된 값을 상태로 업데이트하여 React가 해당 값을 추적하고 필요한 경우 컴포넌트를 다시 렌더링한다. 
          // 따라서 입력 필드에 값을 입력할 때마다 상태가 업데이트되고, 화면에 표시된 값도 함께 업데이트된다.
          onChange={(e) => setUser(e.target.value)}
        />
        pw:{" "}
        <input
          id="pw"
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        <button id="btn" onClick={HandleLogin}>
          login
        </button>
      </div>
    </>
  );
}

export default LoginForm;

// 왜 LoginForm은 일반함수형태고, HandleLogin은 arrow function 일까?
// = > LoginForm은 그냥 함수 형태로 작성되었을 뿐입니다. 일반 함수 형태로 작성된 이유는 LoginForm이 React 컴포넌트가 아닌 단순히 JSX를 반환하는 함수이기 때문입니다. LoginForm은 상태를 관리하지 않고, 단지 입력값을 받아와 JSX로 렌더링하는 역할을 수행합니다.

// 반면에 handleLogin은 화살표 함수 형태로 작성되었습니다. 화살표 함수는 자신의 컨텍스트에서 실행되며, 함수를 선언한 컨텍스트의 this를 바인딩합니다. 화살표 함수를 사용하면 함수 내에서 this를 사용할 때 일반 함수의 this 동작과 다르게 동작하므로, 주로 이벤트 핸들러와 같은 콜백 함수에서 유용하게 사용됩니다. handleLogin은 이벤트 핸들러로 사용되는 함수이므로 화살표 함수로 작성되었습니다.

// 따라서 LoginForm과 handleLogin은 각각 다른 용도로 사용되기 때문에 함수의 형태가 다르게 작성되었습니다.


//그렇다면 이벤트 핸들러로 사용되는 함수는 꼭 arrow function 형태로 적어야 할까?
// No, it is not necessary to always use arrow functions for event handlers. You can use both regular functions and arrow functions as event handlers in React. The choice between them depends on your specific requirements and preferences.

// Arrow functions have some advantages when used as event handlers because they automatically bind the lexical this value, which can be useful in certain situations. It helps to avoid potential issues with the this binding that may occur when using regular functions.

// On the other hand, regular functions provide access to their own this value, which can be beneficial in certain scenarios where you need to refer to the function's context or use the this value for other purposes.

// In summary, both regular functions and arrow functions can be used as event handlers in React. The choice between them depends on your specific needs and coding style preferences.

//아니요, React에서 이벤트 핸들러로서 화살표 함수를 사용하는 것이 필수적이지는 않습니다. React에서는 일반 함수와 화살표 함수를 모두 이벤트 핸들러로 사용할 수 있습니다. 어떤 방식을 선택할지는 특정 요구사항과 개발자의 선호도에 따라 달라집니다.

// 화살표 함수는 이벤트 핸들러로 사용될 때, 렉시컬 this 바인딩을 자동으로 처리해주기 때문에 특정 상황에서 유용할 수 있습니다. 이는 일반 함수를 사용할 때 발생할 수 있는 this 바인딩과 관련된 잠재적인 문제를 피하는 데 도움이 됩니다.

// 반면에 일반 함수는 자체적으로 this 값을 갖고 있어서, 함수의 컨텍스트에 접근하거나 this 값을 다른 목적으로 활용해야 하는 경우에 유용할 수 있습니다.

// 요약하자면, React에서 이벤트 핸들러로서 일반 함수와 화살표 함수를 모두 사용할 수 있습니다. 어떤 방식을 선택할지는 특정 요구사항과 개발자의 코딩 스타일에 따라 다를 수 있습니다.


//재욱님이 하신 것
// import React, { useState } from "react";

// function Practice01() {
//   const [id, setID] = useState("");
//   const [pw, setPW] = useState("");

//   const onChangePassword = (event) => {
//     setPW(event.target.value);
//   };

//   const onChangeID = (event) => {
//     setID(event.target.value);
//   };

//   const onClickSubmit = () => {
//     if (id === "admin" && pw === "password") {
//       alert("로그인 성공");
//     }
//   };

//   return (
//     <div>
//       <h1>로그인</h1>
//       <input type="text" onChange={onChangeID} />
//       <br />
//       <input type="password" onChange={onChangePassword} />
//       <br />
//       <button onClick={onClickSubmit}>로그인</button>
//     </div>
//   );
// }

// export default Practice01;