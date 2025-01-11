import React, { useRef } from 'react'
import { Form } from 'react-router-dom';

import style from './ContactPage.module.css';

export default function ContactPage() {
  const ref = useRef();

  const submitHandler = (e) => {
    e.preventDefault()
    alert("Our Agent will reach you within next 24 hrs");
    ref.current.value = "";
  }
  return (
    <>
    <div className={style.bg}>
    </div>
    <div className={style.content}>
        <h1>Contact Us</h1>
        <Form className={style.form} onSubmit={submitHandler}>
            <textarea name="query" id="query" placeholder='Enter Your Query' ref={ref}>
                
            </textarea>
            <button type="submit">Send Query</button>
        </Form>
    </div>
    </>
  )
}
