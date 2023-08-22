import React, { useState } from 'react'
import styles from './LoginPage.module.css'

const LoginPage = () => {
  const [object, setObject] = useState({
    name: "",
    email: "",
    password: "",
    Address: "",
    image: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setObject({ ...object, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(object);
    setObject({
      name: "",
      email: "",
      password: "",
      Address: "",
      image: "",
    });
  }

  return (
    <div className={styles.body}>
      <div className={styles.main}>
        <div className={styles.main1}>
          <h1>Login ✒️</h1>
          <form onSubmit={handleSubmit}>      
            <div>
              <label htmlFor="email" className={styles.label}>Email:</label>
              <br></br>
              <input
                type="email"
                id="email"
                name="email"
                value={object.email}
                className={styles.input}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className={styles.label}>Password:</label>
              <br></br>
              <input
                type="password"
                name="password"
                value={object.password}
                className={styles.input}
                onChange={handleChange}
              />
            </div>
            <button className={styles.btn} type='submit'>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
