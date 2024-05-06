import React from "react"
import { fetchData } from "../helpers"

// assets
import Wave from "../assets/wave.svg"

// RRD imports
import { Outlet, useLoaderData } from "react-router-dom"

// components
import Nav from "../components/nav"

// loader
export function mainLoader() {
  const userName = fetchData("userName")
  return { userName }
}

const Main = () => {
  const { userName } = useLoaderData()
  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={Wave} alt="wave" />
    </div>
  )
}

export default Main
