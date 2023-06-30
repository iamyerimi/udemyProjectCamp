import React, { useState } from "react";

const CharCount = () =>{

    const [charCount, setCharCount ] = useState(0);

    const charCountHandler =(event) => {
        setCharCount(event.target.value.length);
    }
    

    return(
        <div>
            <textarea onChange={charCountHandler}></textarea>
            <p>Character Count : {charCount}</p>
        </div>
    )
}

export default CharCount;


// 강사님이 하신 거
// import React, { useEffect, useState } from "react";

// const CharCount = () => {
//   const [charCount, setCharCount] = useState(0);
//   const [text, setText] = useState("");

//   useEffect(() => {
//     setCharCount(text.length);
//   }, [text]);
//   const charCountHandler = (event) => {
//     setText(event.target.value);
//   };

//   return (
//     <div>
//       <textarea value={text} onChange={charCountHandler}></textarea>
//       <p>Character Count : {charCount}</p>
//     </div>
//   );
// };

// export default CharCount;


//나와 강사님의 코드의 차이점과 어떤 게 더 나은 코드인지 gpt에게 물어보았다.
// 두 코드는 기능적으로 동일한 결과를 제공하지만, 몇 가지 차이점이 있습니다.

// useState의 사용:

// 첫 번째 코드: 하나의 상태 변수 charCount만을 사용하여 문자 수를 저장합니다.
// 두 번째 코드: 두 개의 상태 변수 charCount와 text를 사용하여 문자 수와 입력된 텍스트를 각각 저장합니다.
// useEffect의 사용:

// 첫 번째 코드: useEffect를 사용하지 않고, 입력된 텍스트의 길이를 직접 처리합니다.
// 두 번째 코드: useEffect를 사용하여 text 상태 변수가 변경될 때마다 charCount를 업데이트합니다.
// 어떤 코드가 더 좋은지는 상황에 따라 다를 수 있습니다. 첫 번째 코드는 간단하고 직관적이지만, useEffect를 사용하지 않아 매번 문자 수를 계산해야 합니다. 두 번째 코드는 입력된 텍스트가 변경될 때만 문자 수를 계산하므로 성능상 이점이 있습니다. 또한, 코드를 확장하거나 수정해야 할 경우 두 번째 코드가 더 유연한 구조를 가지고 있습니다. 따라서 상황과 요구사항에 따라 적절한 방식을 선택할 수 있습니다.
