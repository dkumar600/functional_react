import React from "react";
import { useParams } from "react-router-dom";

const DynamicFunc = () => {
    const params = useParams();
    console.log(params);
    return(<h1>Thanks {params.id}</h1>);
}
export default DynamicFunc;