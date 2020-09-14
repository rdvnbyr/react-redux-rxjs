import React from 'react';
import {connect} from 'react-redux';
import { Navbar , Nav} from 'react-bootstrap';
import { SessionActions } from '../actions';

function Header(props) {
  const isLogin = props.isLogin;
  const logout = props.logout;

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="container">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            {
              isLogin ? <button onClick={ () => logout() }>Logout</button> : <Nav.Link href="/login">Login</Nav.Link>
            }
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

function mapStateToProps(aState) {
  return {
      isLogin: aState.session.isLogin
  };
}

function mapDispatchToProps(aDispatch) {
  return {
      logout: () => aDispatch(SessionActions.logout())
  };
}

export const HeaderComponent = connect(mapStateToProps, mapDispatchToProps)(Header);
