import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Home from './containers/Home';
import Products from './containers/Products';
import Info from './containers/Info';

export default class Routes extends Component {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="home" component={Home} title="Home" initial={true} hideNavbar={false}/>
			      <Scene key="products" component={Products} title="Products" hideNavbar={false}/>
						<Scene key="info" component={Info} title="Info" hideNavbar={false}/>
			    </Stack>
			 </Router>
			)
	}
}