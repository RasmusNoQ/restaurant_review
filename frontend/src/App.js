import React from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import {AddReview,RestaurantList,Restaurants,Login} from './components'


function App() {
  const [user,setUser] = React.useState(null);

  async function login (user=null){
    setUser(user);
  }

  async function logout(){
    setUser(null)
  }
  return (
    <div>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <a href="/restaurants" className='navbar-brand'>
          ChowFest Reviews
        </a>
        <div className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to={"/restaurants"} className="nav-link">
              Restaurant
            </Link>
          </li>
          <li className="nav-item" >
            {user ? (
              <a onClick={logout} className="nav-link" style={{cursor:"pointer"}}>
                Logout {user.name}
              </a>
            ):(
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            )}
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/restaurants"]} component={RestaurantList} />
          <Route 
            path="/restaurants/:id/review"
            render={(props) => (
              <AddReview {...props} user={user} />
            )}
          />
          <Route 
            path="/restaurants/:id"
            render={(props) => (
              <Restaurants {...props} user={user} />
            )}
          />
          <Route 
            path="/login"
            render={(props) => (
              <Login {...props} login={login} />
            )}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
