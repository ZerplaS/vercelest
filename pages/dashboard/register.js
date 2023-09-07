import { useSession, signIn, signOut } from "next-auth/react";
import Link from 'next/link';
import { useRouter } from "next/router";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Component({ posts }) {
  const { data: session } = useSession();
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsonData = {
      studentid: data.get('studentid'),
      firstname: data.get('firstname'),
      lastname: data.get('lastname'),
      username: data.get('username'),
      password: data.get('password'),
      status: data.get('status')
    }
      //Edit Ngrok
      fetch(`https://vercelests.vercel.app/api/users`, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 'ok') {
          router.push('/dashboard')
        } else {
          console.log('Add Data Not Success')
          router.push('/dashboard')
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  };
  
  if (session) {
    
    return (
      <>
        <nav className="navbar navbar-light bg-success">
          <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center w-100">
              <div>Signed in as {session.user.email} {session.user.fname} {session.user.lname}</div>
              <button className="btn btn-danger" onClick={() => signOut()}>Sign out</button>
            </div>
          </div>
        </nav>
        <br />
        <div className="container mt-5">
        <div className="card mt-4">
          <div className="card-body">
          
            
            <form onSubmit={handleSubmit}>
            <center><button type = "submit" className="btn btn-info">Add New</button></center>
            
              <div className="form-row">
                <div className="form-group col-md-10">
                  <label htmlFor="inputEmail4">Student Id</label>
                  <input type="text" className="form-control" name ="studentid" id="inputEmail4" placeholder="Student Id" />
                </div>
                <div className="form-group col-md-10">
                  <label htmlFor="inputEmail4">Firstname</label>
                  <input type="text" className="form-control" name ="firstname" id="inputEmail4" placeholder="Firstname" />
                </div>
                <div className="form-group col-md-10">
                  <label htmlFor="inputAddress">Lastname</label>
                  <input type="text" className="form-control" name ="lastname" id="inputAddress" placeholder="Lastname" />
                </div>
                <div className="form-group col-md-10">
                  <label htmlFor="inputAddress">Username</label>
                  <input type="text" className="form-control" name ="username" id="inputAddress" placeholder="Username" />
                </div>
                <div className="form-group col-md-10">
                  <label htmlFor="inputPassword4">Password</label>
                  <input type="password" className="form-control" name ="password" id="inputPassword4" placeholder="Password" />
                </div>
              </div>
              <div className="form-group col-md-10">
                <label htmlFor="inputAddress2">Status</label>
                <input type="text" className="form-control" name ="status" id="inputAddress2" placeholder="Status" />
              </div>
              <div className="form-group">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck" />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Check me out
                  </label>
                  <Link href ="/dashboard">
            <center><button className="btn btn-warning mx-1">Back</button></center>
            </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="alert alert-danger" role="alert">
        Not signed in <br />
        <button className="btn btn-info" onClick={() => signIn()}>Sign in</button>
      </div>
    </>
  );
}
