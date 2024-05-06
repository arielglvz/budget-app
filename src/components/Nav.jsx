import React from "react"
import { Form, NavLink } from "react-router-dom"

// assets
import logomark from "../assets/logomark.svg"

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to home">
        <img src={logomark} alt="logomark" height={30} />
        <span>HomeBudget</span>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="/logout"
          onSubmit={(event) => {
            if (!confirm("Delete user and all data?")) {
              event.preventDefault()
            }
          }}
        >
          <button className="btn btn--warning" type="submit">
            Delete User
          </button>
        </Form>
      )}
    </nav>
  )
}

export default Nav
