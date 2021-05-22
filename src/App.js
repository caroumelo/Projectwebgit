import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 
  const [name, setName] = useState('');
  const [userName, setUsername] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  const [avatar, setAvatar] = useState('');
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(null);
  
}

useEffect()->{
  fetch('https://docs.github.com/en/rest/reference/users')
    .then[res=> res. json()]
    .then[data=> {
      setData(data)
    }]
};[];    

const setData=[{
  name,
  user,
  followers,
  following,
  avatar_url,
  public_repos,
  biography,

}]

export default App;

