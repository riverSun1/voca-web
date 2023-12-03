// import dummy from "../db/data.json";
// url에 포함된 값을 얻을때 useParams를 사용한다.
import { useParams } from "react-router-dom";
import Word from "./Word";
// import { useEffect } from "react";
import useFetch from "../hooks/useFetch";

export default function Day() {
    // const day = 1;
    
    // const a = useParams();
    // console.log(a);

    const {day} = useParams();
    const words = useFetch(`http://localhost:3001/words?day=${day}`)
    
    //const wordList = dummy.word.filter(word => word.day === Number(day));
    
    // const [words, setWords] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:3001/words?day=${day}`)
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then(data => {
    //         setWords(data);
    //     });
    // },[day]);

    return (
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word={word} key={word.id}/>
                    ))}
                </tbody>
            </table>
        </>
    );
}