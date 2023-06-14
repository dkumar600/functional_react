import React from 'react'

function Productview(props) {
    return (
        <div>
            <h1>Productview</h1>
            <p style={{color:props.color}}>You clicked me and color is {props.color}</p>
        </div>
    )
}
Productview.defaultProps = {
    color: 'brown'
};

export default Productview;

//Debug this code
//What is the use of props
//What is the use of state
//What is the use of useState
//What is the use of setState
//What is the use of useEffect
//What is the use of useReducer
//What is the use of useContext