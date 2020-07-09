import React, { useState, useEffect } from 'react';
import './App.css';
import PplCard from './PplCard';
import Grid from '@material-ui/core/Grid';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setUsers(
        await fetch('https://reqres.in/api/users')
          .then((res) => res.json())
          .then((res) => res.data)
      );
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      Foo();
      <Grid container spacing={10} style={{ padding: '24px' }}>
        {users.map((users) => (
          <Grid key={users.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
            <PplCard
              key={users.id}
              email={users.email}
              firstname={users.first_name}
              lastname={users.last_name}
              avatar={users.avatar}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
