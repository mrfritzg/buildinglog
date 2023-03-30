import { useEffect, useState } from "react";

function App() {

let [repairs, setRepairs] = useState([]);

useEffect( () => {

  async function getRepairs() {
    
    try {
    let response = await fetch('/repairs')
    let data = await response.json()
    console.log(data)
    // setTodos(data)
  } catch(err) {
    console.error(err)
}
  }
  getRepairs()

}, [])


async function addToRepairList() {

  let repairItem = {
    subject: 'input',
    user: 'Bob',
    description: '',
    image: '',
    type: 'Electrical',
    comments: '',
    fixed: false
  };

  const response = await fetch('/todos', {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const newTodo = await response.json()

  let newTodos = [...todos, newTodo];

  setTodos(newTodos);
  setInput("");
}


  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
