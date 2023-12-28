import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // kullanıcı bilgilerini buraya girdim
    const userList = [
      { "Ogrenci": "1234" },
      { "Ogretmen": "1234" },
      { "Admin": "1234" },
      { "Veri": "1234"},
    ];

    const foundUser = userList.find(user => user[username] === password);
    //burda koşul ile nereye gidiceğini gösterdim
    if (foundUser) {
      switch (username) {
        case 'Ogrenci':
          navigate('/ogrencinot');
          break;
        case 'Ogretmen':
          navigate('/not');
          break;
        case 'Admin':
          navigate('/admin');
          break;
        case 'Veri':
          navigate('/home');
          break;
        default:
          break;
      }
    } else {
      alert('Kullanıcı adı veya şifre hatalı!');
    }
  };
   // login kımı  ve onchange ile yönledirme 
  return (
    <div className="App">
      <div className="login-container">
        <h2>Giriş Yap</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Kullanıcı Adı"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Giriş Yap</button>
      </div>
    </div>
  );
};

export default LoginScreen;