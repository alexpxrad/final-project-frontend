
import './App.css';

function App() {


const addData = () => {
  const newActivity = {activity: 'Animal', animal: 'Snake'}

  fetch('http://localhost:4040', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newActivity)
  })
  .then(res => res.json())
  .then( data => console.log(data))
  .catch(err => console.error(err))
  console.log('Added data')
}

const getData = () => {

  fetch('http://localhost:4040',)
  .then(res => res.json())
  .then( data => console.log(data))
  .catch(err => console.error(err))
   
  console.log('getting data')

}

const handleDelete = () => {
  fetch('http://localhost:4040/?activity=Animal', {
    method: 'DELETE', 
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(res => res.json())
  .then( data => console.log(data))
  .catch(err => console.error(err))
  console.log('Deleted Activity')


}


const handleUpdate = () => {
  const updatedActivityWith = { registered: true}
  fetch('http://localhost:4040?activity=Animal', {
    method: 'PUT', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedActivityWith),
  })
  .then(res => res.json())
  .then( data => console.log(data))
  .catch(err => console.error(err))
  console.log('updated data')

}

  return (
    <div className="App">
      <header className="App-header">
        <h1>React App</h1>
        <button onClick={() => addData()}>Add Data</button>
        <button onClick={getData}>Get Data</button>
        <button onClick={handleDelete}>Delete Activity</button>
        <button onClick={handleUpdate}>Update Activity</button>
      </header>
    </div>
  );
}

export default App;
