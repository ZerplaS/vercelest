import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';


export default function about() {
  return (
<>
<Head>
  <title>PerapongWeb About</title>
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
<div>
  <section className="py-5 text-center container">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">Wattttttt</h1>
        <p className="lead text-body-primary"></p>
      </div>
    </div>
  </section>
  <div className="album py-5 bg-body-tertiary">
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <div className="card shadow-sm">
          <Image src="/images/brrr.jpg" className="bd-placeholder-img card-img-top" alt="14" width={200} height={225}/>
            <div className="card-body">
              <p className="card-text">Clouds service free fee to all data</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-info">View</button>
                  <button type="button" className="btn btn-sm btn-outline-info">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <Image src="/images/Data.jpg" className="bd-placeholder-img card-img-top" alt="view3" width={200} height={225}/>
            <div className="card-body">
              <p className="card-text">Friendly to user </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-info">View</button>
                  <button type="button" className="btn btn-sm btn-outline-info">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <Image src="/images/cloudff7.jpg" className="bd-placeholder-img card-img-top" alt="view3" width={200} height={225}/>
            <div className="card-body">
              <p className="card-text">Buster sort</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-info">View</button>
                  <button type="button" className="btn btn-sm btn-outline-info">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
       
              
       
      </div>
    </div>
  </div>
</div>

</main>

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