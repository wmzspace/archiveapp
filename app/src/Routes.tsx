import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
// import Home from './Home.js';
// import About from './About.js';
import GalleryScreen from '../src/pages/gallery';

const Routes = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="Gallery"
          component={GalleryScreen}
          title="Gallery"
          initial
        />
        <Scene key="Gallery" component={GalleryScreen} title="Gallery" />
        {/*<Scene key="about" component={About} title="About" />*/}
      </Scene>
    </Router>
  );
};
export default Routes;
