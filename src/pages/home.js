import React, { useState, useEffect } from 'react';
import './home.css';
function App() {
  const [posts, setPosts] = useState([]);


 
  //burda fetch komutu ile apiden veri çekme işlemini yaptım
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching data:', error)); //consolda bi error olursa göstermesi için
  }, []);  

  return (

    //apideki bilgilerin gözükmesi için kullandığım yer
    <div className="container">
      <h1>Örenci Bilgileri</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.name}</h2>
            <p>{post.username}</p>
            <p>{post.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;



