import React from 'react'
import Productview from './Productview.Layout.jsx'
import { useState } from 'react'

export default function Homeview() {
    const [color, setColor] = useState("brown");
    return (
        <div>
            <h1>Homeview</h1>
            <button onClick={() => setColor("black")}>Black</button>
            <button onClick={() => setColor("red")}>Red</button>
            <button onClick={() => setColor("blue")}>Blue</button>
            <Productview color = {color} />
        </div>
    )
}