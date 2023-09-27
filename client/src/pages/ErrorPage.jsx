import React, {useState} from "react";

const ErrorPage = (error = "") => {
    const [message, setMessage] = useState("");
    const [obj, setObj] = useState({})
    const [isObject, setIsObject] = useState(false)
    if(typeof error === "string" && error.data.startsWith("\n<!doctype html>\n")){
        setMessage(error)
    } else if (!Array.isArray(error)){
        setObj(error);
        setIsObject(true);
    }
    return (
        <>
        <div>{"Internal Error: You are here because some scripts on the frontend has error" }
        </div>
        <div>{isObject ? obj : message }</div>    
            </>
    )
}

export default ErrorPage;