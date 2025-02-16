import { useEffect, useState } from "react";

export default function Front() {
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
        fetch("http://localhost:8080/api/message") //spring bootのAPIを呼び出す
        .then((response) => response.json())
        .then((data) => setMessage(data.message));
    }, []);

    return <h1>{message}</h1>; //画面に表示
}
