import React from 'react'
import classes from "./LoginForm.module.scss";

export default function loginForm() {
  return (
    <div className={classes["login-form"]}>
        <form>
            <div className={classes["login-form__group"]}>
                <input placeholder="Email" type="email" name="email" id="email" className={classes["login-form__input"]}/>
                <label htmlFor="email" className={classes["login-form__label"]}>Email</label>
            </div>

            <div className={classes["login-form__group"]}>
                <input placeholder="Password" type="password" name="password" id="password" className={classes["login-form__input"]} />
                <label htmlFor="password" className={classes["login-form__label"]}>Password</label>
            </div>
            <button className={classes["login-form__btn"]}>Login</button>
        </form>
    </div>
  )
}