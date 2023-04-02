import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function AddNew() {
    let [repairs, setRepairs] = useState([]);

    async function addToRepairList() {

        let subjectRef = useRef()
        let descripRef = useRef()
        let typeRef = useRef()
        let userRef = useRef()
        let imgRef = useRef()
        

        let navigate = useNavigate()

        // let repairItem = {
        //   subject: 'input',
        //   user: 'Bob',
        //   description: '',
        //   image: '',
        //   type: 'Electrical',
        //   comments: '',
        //   fixed: false
        // };
      
        const response = await fetch('/repairs', {
          method: 'POST',
          body: JSON.stringify(repairItem),
          headers: {
            'Content-Type': 'application/json'
          }
        })
      
        // const newTodo = await response.json()
      
        // let newTodos = [...todos, newTodo];
      
        // setTodos(newTodos);
        setInput("");
      }
return (
    <div>

        <h1>Add New</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="subject">Subject: </label><br />
        <input type="text" id="subj" name="subject" ref={subjectRef} required /><br /><br />
        <label htmlFor="type">Type: </label><br />
        <input type="text" id="typ" name="type" ref={typeRef} required /><br /><br />  
        <label htmlFor="user">User: </label><br />
        <input type="text" id="usr" name="user" ref={userRef} required /><br /><br />
        <label htmlFor="description">Description: </label><br />
        <textarea id="descr" name="description" ref={descripRef} required  rows="8" cols="50" /><br /><br />
        <label htmlFor="image">Image: </label><br />
        <input type="text" id="img" name="image" ref={imgRef} required /><br /><br />      
        <button>SUMBIT</button>
        </form>
    </div>
);
}