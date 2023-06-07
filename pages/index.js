import React from'react'
import Head from 'next/head'
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';


export default function index() {
  return (
    <>
   
    <Head>
  <title>PerapongWeb</title>
    </Head>

    <header data-bs-theme="dark">
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Commission</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page"Link href="/.">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link"Link href="about">About</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link "Link href="contact">Service</a>
          </li>

          <li className="nav-item">
            <a className="nav-link "Link href="contact">Contact</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</header>




</>
  )  
}
