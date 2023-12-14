import React, { Component } from 'react'
import RouterContainer from './router-container';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import './css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import HeaderContext from './contexts/HeaderContext';

export default class App extends Component {

  componentDidMount() {
    AOS.init();
  }
  render() {
    return (
      <HeaderContext>

        <RouterContainer />
      </HeaderContext>
    )
  }
}
