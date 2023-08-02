import React, { Component } from 'react'
import Video from './Video'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Routes>
						<Route path="/" exact element={<Home />} />
						<Route path="/:url" element={<Video />} />
					</Routes>
				</Router>
			</div>
		)
	}
}

export default App;