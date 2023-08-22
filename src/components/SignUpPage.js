import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./SignUpPage.module.css";
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// import axios from "axios";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [object, setObject] = useState({
    name: "",
    email: "",
    password: "",
    Address: "",
    image: null, // Initialize image as null
  });
  // useEffect(()=>{
  //    axios.get("http://localhost:3000")
  //    .then((res)=>{
  //     console.log(res,"============================")
  //    })
  // },[])

  const handleChange = (e) => {
    e.preventDefault();
    setObject({ ...object, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setObject({ ...object, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(object)
    setObject({
      name: "",
      email: "",
      password: "",
      Address: "",
      image: null,
    });
    navigate('/login'); 
  };

  return (
    <div className={styles.body}>
    <div className={styles.main}>
      <div className={styles.main1}>
        <h1>SignUpPage✍️</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className={styles.label}>
              Name:
            </label>
            <br/>
            <input
              type="text"
              id="name"
              name="name"
              value={object.name}
              className={styles.input}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className={styles.label}>
              Email:
            </label>
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
            <label htmlFor="password" className={styles.label}>
              Password:
            </label>
            <br />
            <input
              type="password"
              name="password"
              value={object.password}
              className={styles.input}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="Address" className={styles.label}>
              Address:
            </label>
            <br />
            <textarea
              type="text"
              id="Address"
              name="Address"
              value={object.Address}
              className={styles.input}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="image" className={styles.label}>
              Image:
            </label>
            <br />
            <input
              type="file"
              name="image"
              className={styles.input1}
              onChange={handleImageChange}
            />
          </div>
          <button className={styles.btn} type="submit">
            SignUp
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignUpPage;
