import React from "react"

// Library imports
import { toast } from "react-toastify"

// helper function
import { fetchData } from "../helpers"

//  Components
import Intro from "../components/Intro"

// RRD imports
import { useLoaderData } from "react-router-dom"

// loader
export function dashBoardLoader() {
  const userName = fetchData("userName")
  return { userName }
}

//  Action
export async function dashboardAction({ request }) {
  const data = await request.formData()
  const formData = Object.fromEntries(data)
  try {
    localStorage.setItem("userName", JSON.stringify(formData.userName))
    return toast.succes(`Welcome, ${formData.userName}`)
  } catch (e) {
    throw new Error("There was a problem creating you account.")
  }
}

const Dashboard = () => {
  const { userName } = useLoaderData()

  return <>{userName ? <p>{userName}</p> : <Intro />}</>
}

export default Dashboard
