import { useState } from "react";

export default function Word({ word: w }) {
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow() {
        setIsShow(!isShow);
    }

    function toggleDone() {
        // setIsDone(!isDone);
        fetch(`http://localhost:3001/words/${word.id}`, {
            // mothod: 'PUT',
            method: 'PUT',
            // Content-Type : 보내는 리소스의 타입
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...word,
                isDone: !isDone,
            }),
        }).then((res) => {
            if (res.ok) { // 응답을 받아서 응답이 ok이면.
                setIsDone(!isDone);
            }
        });
    }

    function del() {
        if (window.confirm('삭제 하시겠습니까?')) {
            fetch(`http://localhost:3001/words/${word.id}`, {
                method: "DELETE",
            }).then((res) => {
                if (res.ok) {
                    setWord({
                        ...word,
                        id: 0,
                    });
                }
            });
        }
    }
    if (word.id === 0) {
        return null;
    }

    return (
        <tr className={isDone ? "off" : ""}>
            <td><input type="checkbox" checked={isDone} onChange={toggleDone} /></td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
                <button onClick={del} className="btn_del">삭제</button>
            </td>
        </tr>
    );
}

// npm install -g json-server
// json-server --watch ./src/db/data.json --port 3001

// REST API
// - url 주소와 메소드로 CRUD 요청을 하는 것.
// - C : Create = Post
// - R : Read = Get
// - U : Update = Put
// - D : Delete = Delete


// useEffect(( ) => {

// }, [count])

// : count가 변경되었을 때만 해당 함수가 실행. 의존성 배열이라고 부름.

// 목적은 api 호출.
// 렌더링이 일어나고 api를 호출함.
// 렌더링이 완료되고 최초의 1번만 api호출을 해야함.
// 그럴 때는 의존성 배열에 빈 배열을 입력한다.

// useEffect(( ) => {

// }, [ ])