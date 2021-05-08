import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import './App.css';

//You must add your own API key here from Clarifai.
const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_CLARIFAI_API_KEY,
});

const particlesOptions = {
  particles: {
    number: {
      value: 400,
      density: {
        enable: true,
        value_area: 3500,
      },
    },
    line_linked: {
      enable: true,
      opacity: 0.1,
    },
    move: {
      direction: 'right',
      speed: 0.2,
    },
    size: {
      value: 1,
    },
    opacity: {
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.05,
      },
    },
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: 'push',
      },
    },
    modes: {
      push: {
        particles_nb: 1,
      },
    },
  },
  retina_detect: true,
};

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      input:
        'http://www.guyshachar.com/en/wp-content/ngg/garo-hills-people-and-agriculture/Garo_People_P9040521.jpg',
      imageUrl:
        'http://www.guyshachar.com/en/wp-content/ngg/garo-hills-people-and-agriculture/Garo_People_P9040521.jpg',
    };
  }

  onInputChange = event => {
    console.log(event.target.value);
  };

  onButtonSubmit = () => {
    console.log('click');
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className='App'>
        <Particles params={particlesOptions} className='particles' />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}
