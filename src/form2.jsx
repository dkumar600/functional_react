


//const {uAge,setAge} = useState(0);
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [profile, setProfile] = useState({name:"",
                                    gender:"",
                                    age:"",
                                    date:"",
                                    about:""});

  function handleClick(e) {
    e.preventDefault();
    setCount(count + 1);
    console.log("You clicked me times"+count);
    const inputAge = document.getElementById("age").value;
    setProfile({...profile,age : inputAge});
    const inputGender1 = document.getElementById("gender1");
    const inputGender2 = document.getElementById("gender2");
    console.log(inputGender1+ " " +inputGender2);
    let y=""
    if (inputGender1.checked == true){
      y = document.getElementById("gender1").value;
    } else if (inputGender2.checked == true){
      y = document.getElementById("gender2").value;
    }
    const inputDate = document.getElementById("date").value;
    setProfile({...profile,date : inputDate});
    const inputAbout = document.getElementById("about").value;
    setProfile({...profile,about : inputAbout});
    const inputHobbie1 = document.getElementsByClassName("hobbie1").value;
    const inputName = document.getElementById("name").value;
    setProfile({...profile,name : inputName,age : inputAge,gender : y,date : inputDate,about : inputAbout});
    console.log(inputHobbie1[0].value);

  }
  // function handleNameChange(e) {
  //   e.preventDefault();
  //   setProfile({...profile,name : e.target.value});
  // }

  return (
    <div>
    <form>
      <label>
        Username:
        <input type="text" name="name" id='name' />
      </label>
      <label>
        Age:
        <input type="text" name="age" id="age" />
      </label><br />
      <input type="radio" id="gender1" name="Gender2" value="Female"/>
      <label htmlFor="Gender2"> Female</label><br/>
      <input type="radio" id="gender2" name="Gender2" value="Male"/>
      <label htmlFor="Gender2"> Male</label>
      <br/>
      <input type="date" name="date1" id="date" />
      <input type="checkbox" className="hobbie1" name="Hobbie1" value="Coding"/>
      <label htmlFor="Hobbie1">Coding</label><br/>
      <input type="checkbox" className="hobbie1" name="Hobbie2" value="Problem Solving"/>
      <label htmlFor="Hobbie2">Problem Solving</label>
      <br/>
      <input type="text" name="Text1" id="about" />
      <button onClick={handleClick}>Submit</button>
    </form>
    <div>
      <p>Name : {profile.name}</p>
      <p>Age : {profile.age}</p>
      <p>Gender:{profile.gender}</p>
      <p>Date : {profile.date}</p>
      <p>About : {profile.about}</p>
    </div>
    </div>
  );
}


{/* import { useState } from "react";

const FCCounter = () => {
  const [counter, setCounter] = useState(0);
  const [uName, setUName] = useState("Sushant");
  const [isActive, setIsActive] = useState(true);
  const [cartList, setCartList] = useState([]);
  const [profile, setProfile] = useState({ name: "", city: "" });
  const [goals, setGoals] = useState(null);

  const onIncrement = () => {
    setCounter(counter + 1);
  };

  const onDecrement = () => {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
  };
  return (
    <div>
      <p>Counter: {counter}</p>
      {       <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button> *//*}

      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
};

export default FCCounter; */}
