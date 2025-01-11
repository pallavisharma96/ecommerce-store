import React, { useEffect, useState } from "react";
import { Form } from "react-router-dom";

import style from "./ProfilePage.module.css";

export default function ProfilePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const saveDetails = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      contact: contact,
    };
    console.log(data);
    localStorage.setItem("personalData", JSON.stringify(data));
    alert("Profile Updated")
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("personalData"));
    
    if (data) {
      setName(data.name);
      setEmail(data.email);
      setContact(data.contact);
    } else {
      setName("Alice");
      setEmail("alice@bob.com");
      setContact("1234567890");
    }
  }, []);
  return (
    <>
      <div className={style.bg}></div>
      <div className={style.content}>
        <h1>Your Profile</h1>
        <Form className={style.form}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            defaultValue={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="contact">Contact</label>
          <input
            type="text"
            id="contact"
            defaultValue={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <input type="submit" value="Update Profile" onClick={saveDetails} />
        </Form>
      </div>
    </>
  );
}
