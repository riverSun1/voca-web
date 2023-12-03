import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateDay() {
    const days = useFetch("http://localhost:3001/days");
    const navigate = useNavigate();

    function addDay(e) {
        fetch(`http://localhost:3001/days/`, {
            method: "POST",
            headers: { // Content-Type : 보내는 리소스의 타입
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                day: days.length + 1
            }),
        }).then((res) => {
            if (res.ok) { // 응답을 받아서 응답이 ok이면.
                alert("생성이 완료 되었습니다");
                navigate(`/`);
            }
        });
    }

    return (
        <div>
            <h3>현재 일수 : {days.length}일</h3>
            <button onClick={addDay}>Day 추가</button>
        </div>
    );
}