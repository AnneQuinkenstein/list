import React, { useEffect, useState } from 'react';
import './App.css';
import User from './components/User';
import AddUser from './components/AddUser';
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const App = () => {
  const [users, setUsers] = useState(null);

  //calling API on mounting
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  //delete User in <User>
  const handleClick = (id) => {
    setUsers(users.filter(user => (user.id !== id)))
  }

  //add User in <AddUser>
  const addUser = (name) => {
    setUsers([...users, { id: uuidv4(), name: name }])
  }

  //edit User in <User> 
  const editName = (name, index) => {
    users[index].name = name;
    setUsers((prevState => [
      ...prevState]))
  }

  return (
    <div className="App">
      <div >
        <TransitionGroup className='usersList'>
          {users && users.map((user, index) =>
            <CSSTransition
              key={user.id}
              timeout={500}
              classNames='singleUser'
            >
              <User
                editName={editName}
                handleClick={handleClick}
                userName={user.name}
                key={user.id}
                userId={user.id}
                index={index}
              />
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
      <AddUser addUser={addUser} />
    </div>
  );
}

export default App;
