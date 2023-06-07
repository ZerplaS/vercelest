import React from'react'
import Head from 'next/head'
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';

export default function index() {
  return (
    <>
   
    <Head>
      <div>
  <title>PerapongWeb</title>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content />
  <meta name="generator" content="Hugo 0.112.5" />
  <link rel="canonical" href="https://getbootstrap.com/docs/5.3/examples/product/" />
  <link href="/docs/5.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous" />
  {/* Favicons */}
  <link rel="apple-touch-icon" href="/docs/5.3/assets/img/favicons/apple-touch-icon.png" sizes="180x180" />
  <link rel="icon" href="/docs/5.3/assets/img/favicons/favicon-32x32.png" sizes="32x32" type="image/png" />
  <link rel="icon" href="/docs/5.3/assets/img/favicons/favicon-16x16.png" sizes="16x16" type="image/png" />
  <link rel="manifest" href="/docs/5.3/assets/img/favicons/manifest.json" />
  <link rel="mask-icon" href="/docs/5.3/assets/img/favicons/safari-pinned-tab.svg" color="#712cf9" />
  <link rel="icon" href="/docs/5.3/assets/img/favicons/favicon.ico" />
  <meta name="theme-color" content="#712cf9" />
  <style dangerouslySetInnerHTML={{__html: "\n  .bd-placeholder-img {\n    font-size: 1.125rem;\n    text-anchor: middle;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n  }\n\n  @media (min-width: 768px) {\n    .bd-placeholder-img-lg {\n      font-size: 3.5rem;\n    }\n  }\n\n  .b-example-divider {\n    width: 100%;\n    height: 3rem;\n    background-color: rgba(0, 0, 0, .1);\n    border: solid rgba(0, 0, 0, .15);\n    border-width: 1px 0;\n    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);\n  }\n\n  .b-example-vr {\n    flex-shrink: 0;\n    width: 1.5rem;\n    height: 100vh;\n  }\n\n  .bi {\n    vertical-align: -.125em;\n    fill: currentColor;\n  }\n\n  .nav-scroller {\n    position: relative;\n    z-index: 2;\n    height: 2.75rem;\n    overflow-y: hidden;\n  }\n\n  .nav-scroller .nav {\n    display: flex;\n    flex-wrap: nowrap;\n    padding-bottom: 1rem;\n    margin-top: -1px;\n    overflow-x: auto;\n    text-align: center;\n    white-space: nowrap;\n    -webkit-overflow-scrolling: touch;\n  }\n\n  .btn-bd-primary {\n    --bd-violet-bg: #712cf9;\n    --bd-violet-rgb: 112.520718, 44.062154, 249.437846;\n\n    --bs-btn-font-weight: 600;\n    --bs-btn-color: var(--bs-white);\n    --bs-btn-bg: var(--bd-violet-bg);\n    --bs-btn-border-color: var(--bd-violet-bg);\n    --bs-btn-hover-color: var(--bs-white);\n    --bs-btn-hover-bg: #6528e0;\n    --bs-btn-hover-border-color: #6528e0;\n    --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);\n    --bs-btn-active-color: var(--bs-btn-hover-color);\n    --bs-btn-active-bg: #5a23c8;\n    --bs-btn-active-border-color: #5a23c8;\n  }\n  .bd-mode-toggle {\n    z-index: 1500;\n  }\n" }} />
  {/* Custom styles for this template */}
  <link href="product.css" rel="stylesheet" />
</div>
    </Head>
  
   
    <script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>

<main>
  
<div>
  <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
    <symbol id="check2" viewBox="0 0 16 16">
      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
    </symbol>
    <symbol id="circle-half" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
    </symbol>
    <symbol id="moon-stars-fill" viewBox="0 0 16 16">
      <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
      <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
    </symbol>
    <symbol id="sun-fill" viewBox="0 0 16 16">
      <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
    </symbol>
  </svg>
  
  <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
    <symbol id="aperture" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx={12} cy={12} r={10} />
      <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
    </symbol>
    <symbol id="cart" viewBox="0 0 16 16">
      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </symbol>
    <symbol id="chevron-right" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
    </symbol>
  </svg>
  <nav className="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
    <div className="container">
      <a className="navbar-brand d-md-none" href="#">
        <svg className="bi" width={24} height={24}><use xlinkHref="#aperture" /></svg>
        Aperture
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="#offcanvas" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="#offcanvas" aria-labelledby="#offcanvasLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="#offcanvasLabel">Aperture</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav flex-grow-1 justify-content-between">
            <li className="nav-item"><a className="nav-link" href="#">
                <svg className="bi" width={24} height={24}><use xlinkHref="#aperture" /></svg>
              </a></li>
            <li className="nav-item"><Link className="nav-link" href="/"   >หน้าแรก</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/about"  >เกี่ยวกับ</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/info"  >ข้อมูล</Link></li>
         
            <li className="nav-item"><Link className="nav-link" href="/shop">
                <svg className="bi" width={24} height={24}><use xlinkHref="#cart" /></svg>
              </Link></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  </div>

</main>




    </>
  )  
}
