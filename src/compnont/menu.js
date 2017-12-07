/**
 * Created by yr on 2017/11/14.
 */
import React, { Component } from 'react'

export default class indexCover extends React.Component{
	constructor(props) {
		super(props);
	}
	render() {
		const data  = this.props
		return (
			<div>
				<div className="" id="mobile_index">
					<div className="dividing-line-up"></div>
					<div className="more-explore">
						<div className="more-explore-title"><span>更多发现</span></div>
					</div>
				</div>
			</div>
		)
	}
}