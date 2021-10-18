import React from "react"

import NavBar from "./NavBar";

import './layout.css';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <NavBar />
      {children}
    </div>
  )
}