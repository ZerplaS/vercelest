import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';

export default function index() {
  return (
    <>
    
    <Head>
  <title>PerapongWeb</title>
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


<main>
<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Image src="/images/storage C.jpg" className="d-block w-100" alt="view" width={1200} height={400}/>
    </div>
    <div className="carousel-item">
      <Image src="/images/brrr.jpg" className="d-block w-100" alt="view2" width={1200} height={400}/>
    </div>
    <div className="carousel-item">
      <Image src="/images/cloudff7.jpg" className="d-block w-100" alt="view3" width={1200} height={400}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
</main>




<div className="album py-5 bg-body-tertiary">
  <div className="container">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div className="col">
        <div className="card shadow-sm">
        <svg classname="bd-placeholder-img card-img-top" width="100%" height="{225}" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false">
  <title>Placeholder</title>
  <rect width="100%" height="100%" fill="#55595c" />
  <image href="/images/Data.jpg" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" /></svg>
          <div className="card-body">
            <p className="card-text">The service That make you safe to save</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
   
              </div>
              <small className="text-body-secondary">Read More</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card shadow-sm">
        <svg classname="bd-placeholder-img card-img-top" width="100%" height="{225}" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false">
  <title>Placeholder</title>
  <rect width="100%" height="100%" fill="#55595c" />
  <image href="/images/NERD FOUND.png" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
</svg>
  <rect width="100%" height="100%" fill="#55595c" />
  <Image href="/images/Room.jpg" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />























          <div className="card-body">
            <p className="card-text">هCloud Final Fantasy 7</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
               
              </div>
              <small className="text-body-secondary">Read More</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card shadow-sm">
        <svg classname="bd-placeholder-img card-img-top" width="100%" height="{225}" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false">
  <title>Placeholder</title>
  <rect width="100%" height="100%" fill="#55595c" />
  <image xlinkHref="/images/Room.jpg" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
</svg>
          <div className="card-body">
            <p className="card-text">ًWhy we still here just to suffer</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
              
              </div>
              <small className="text-body-secondary">Read More</small>
            </div>
          </div>
        </div>
      </div>
</div>
</div>
</div>










<div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p class="col-md-4 mb-0 text-body-secondary">&copy; SQURE 2023 Company, Inc</p>

  

    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
  </footer>
</div>

</>
  )  
}
