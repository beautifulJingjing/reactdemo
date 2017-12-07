/**
 * Created by yr on 2017/11/8.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Index from './pages/index'
import List from './pages/list'
import App from './pages/app'
import rem from '@/public/common/rem'
import '@/public/css/reset.less';
import '@/public/css/style.less';

rem()

/*const CourseRoute = {
	path: 'course/:courseId',

	getChildRoutes(location, callback) {
		require.ensure([], function (require) {
			callback(null, [
				require('./routes/Announcements'),
				require('./routes/Assignments'),
				require('./routes/Grades'),
			])
		})
	},

	getIndexRoute(location, callback) {
		require.ensure([], function (require) {
			callback(null, require('./components/Index'))
		})
	},

	getComponents(location, callback) {
		require.ensure([], function (require) {
			callback(null, require('./components/Course'))
		})
	}
}*/

ReactDOM.render((
	<Router>
		<div>
			<App/>
			<Route exact path="/" component={Index}/>
			<Route exact path="/list/:id" component={List}/>
		</div>
	</Router>
), document.getElementById('app'));

