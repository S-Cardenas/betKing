import React from 'react';
import { Link } from 'react-router';

class TopNavBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse ">
          <div className="container-fluid">
            <div className="navbar-header ">
              <div className="btn-group navbar-toggle">
                <div className="btn-group">
                  <button type="button"
                          className="btn bitcoin-logo dropdown-toggle"
                          data-toggle="dropdown">
                    <img className="img-responsive"
                         src="assets/images/bitcoin_logo.png"
                         alt=""
                         style={{width: 50, height: 50}}/>
                     </button>
                     <ul className="dropdown-menu" role="menu">
                      <li><a href="#">Bitcoin Option 1</a></li>
                      <li><a href="#">Bitcoin Option 2</a></li>
                      <li><a href="#">Bitcoin Option 3</a></li>
                    </ul>
                </div>

                <button type="button"
                        className="btn chat-icon"
                        data-toggle="collapse">
                  <Link to={'/chat'}>Chat</Link>
                </button>

                <button type="button" className="btn account-img">
                  <Link to={'/account'}>
                    <img className="img-responsive mobile-account-img"
                         src="assets/images/account.jpg"
                         alt=""/>
                  </Link>
                </button>

                <button type="button"
                        className="btn hamburger"
                        data-toggle="collapse"
                        data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>

              <a className="navbar-brand" href="#">
                <img className="img-responsive"
                     src="assets/images/logo.png"
                     alt=""
                     style={{width: 167.4, height: 46.2}}/>
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
                <li>
                  <a href="#">
                    <span className="glyphicon glyphicon-user"></span> Sign Up
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="glyphicon glyphicon-log-in"></span> Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3">.col-sm-4</div>
            <div className="col-sm-3">.col-sm-4</div>
            <div className="col-sm-3">.col-sm-4</div>
            <div className="col-sm-3">.col-sm-4</div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopNavBar;
