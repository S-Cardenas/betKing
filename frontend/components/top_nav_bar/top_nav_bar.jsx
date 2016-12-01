import React from 'react';
import { Link } from 'react-router';

class TopNavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse ">
        <div className="container-fluid">
          <div className="navbar-header ">
            <div className="btn-group navbar-toggle">
              <button type="button" className="btn chat-icon" data-toggle="collapse">
                <Link to={'/chat'}>Chat</Link>
              </button>
              <button type="button" className="btn account-img" data-toggle="collapse">
                <img className="img-responsive" src="assets/images/account.jpg" alt="" style={{width: 50, height: 50}}/>
              </button>
              <button type="button" className="btn hamburger" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

            </div>

            <a className="navbar-brand" href="#">
              <img className="img-responsive" src="assets/images/logo.png" alt="" style={{width: 167.4, height: 46.2}}/>
            </a>

          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">Page 1</a></li>
              <li><a href="#">Page 2</a></li>
              <li><a href="#">Page 3</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
              <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default TopNavBar;
