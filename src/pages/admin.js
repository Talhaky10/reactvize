import React, { useState } from 'react';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState('');
  const [teachers, setTeachers] = useState([]);
  const [newTeacher, setNewTeacher] = useState('');

  const handleAddUser = () => {
    setUsers([...users, newUser]);
    setNewUser('');
  };

  const handleAddCourse = () => {
    setCourses([...courses, newCourse]);
    setNewCourse('');
  };

  const handleAddTeacher = () => {
    setTeachers([...teachers, newTeacher]);
    setNewTeacher('');
  };

  return (
    <div>
      <h1>Ogrenci - Ogretmen - Ders </h1>

      <div>
        <h2>Kullanıcı Ekle</h2>
        <input   //yeni kullanıcı eklediğim yer 
          type="text"
          placeholder="Yeni Kullanıcı Adı"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button onClick={handleAddUser}>Ekle</button>
      </div>

      <div>
        <h2>Ders Ekle</h2>
        <input //yeni ders eklediğim yer 
          type="text"
          placeholder="Yeni Ders Adı"
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
        />
        <button onClick={handleAddCourse}>Ekle</button>
      </div>
      
      <div>        
        <h2>Öğretmen Ekle</h2>
        <input  //yeni öğretmen eklediğim yer 
          type="text"
          placeholder="Yeni Öğretmen Adı"
          value={newTeacher}
          onChange={(e) => setNewTeacher(e.target.value)}
        />
        <button onClick={handleAddTeacher}>Ekle</button>
      </div>

      <div>
        <h2>Kullanıcılar</h2>  
        <ul> 
          {users.map((user, index) => (
            <li key={index}>{user}</li> // eklenen kullanıcıların göründüğü kısım
          ))}
        </ul>
      </div> 

      <div>
        <h2>Dersler</h2> 
        <ul>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Öğretmenler</h2>
        <ul>
          {teachers.map((teacher, index) => (
            <li key={index}>{teacher}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
