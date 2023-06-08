import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';

export default function info() {
  return (
<>
<Head>
  <title>PerapongWeb Info</title>
    </Head>

    <header data-bs-theme="dark">
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#" > <p class="text-info">Cloud's Cloud Service</p></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-4 mb-md-0">
          <li className="nav-item">
          <Link className="nav-link" href="/"   >หน้าแรก</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" href="/about"  >เกี่ยวกับ</Link>
          </li>
          
          <li className="nav-item">
          <Link className="nav-link" href="/shop">shop</Link>
          </li>

          <li className="nav-item">
          <Link className="nav-link" href="/info"  >ข้อมูล</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          
          <button className="btn btn-outline-info" type="submit">Login</button>
        </form>
      </div>
    </div>
  </nav>
</header>


<div class="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
      <button class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
              id="bd-theme"
              type="button"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              aria-label="Toggle theme (auto)">
        <svg class="bi my-1 theme-icon-active" width="1em" height="1em"><use href="#circle-half"></use></svg>
        <span class="visually-hidden" id="bd-theme-text">Toggle theme</span>
      </button>
      <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
            <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#sun-fill"></use></svg>
            Light
            <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
            <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#moon-stars-fill"></use></svg>
            Dark
            <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true">
            <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#circle-half"></use></svg>
            Auto
            <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
      </ul>
    </div>

    
<main>
  <div className="container py-4">
  <header className="pb-3 mb-4 border-bottom">
    <a href="/" className="d-flex align-items-center text-body-emphasis text-decoration-none">
      <svg xmlns="http://www.w3.org/2000/svg" width={40} height={32} className="me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fillRule="evenodd" clipRule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor" /></svg>
      <span className="fs-4">Jumbotron example</span>
    </a>
  </header>
  <div className="p-5 mb-4 bg-body-tertiary rounded-3">
    <div className="container-fluid py-5">
      <h1 className="display-5 fw-bold">for using purpose?</h1>
      <p className="col-md-8 fs-4">Using a series of utilities, you can create this data,And save them</p>
      <button className="btn btn-info btn-lg" type="button">click for more</button>
    </div>
  </div>
  <div className="row align-items-md-stretch">
    <div className="col-md-6">
      <div className="h-100 p-5 text-bg-info rounded-3">
        <h2>Change the background for ui uses</h2>
        <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
        <button className="btn btn-outline-primary" type="button">Example button</button>
      </div>
    </div>
    <div className="col-md-6">
      <div className="h-100 p-5 bg-body-tertiary border rounded-3">
        <h2>Beyond materia</h2>
        <p>Keep cool. like a clouds</p>
        <button className="btn btn-outline-secondary" type="button">Example button</button>
      </div>
    </div>
  </div>
</div>
</main>


</>
  )
}