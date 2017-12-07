/**
 * Created by yr on 2017/11/13.
 */
import React, { Component } from 'react'
import Top from '../compnont/list/top'
import WaterFull from '../compnont/list/waterfull'

export default class Index extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			followerList : [
				{url:'/images/follower-item1.jpg'},
				{url:'/images/follower-item2.jpg'},
				{url:'/images/follower-item1.jpg'},
				{url:'/images/follower-item2.jpg'},
				{url:'/images/follower-item1.jpg'},
			]
		}
	}
	render() {
		const { data } = this.props
		return (
			<div>
				<Top followerList={this.state.followerList}/>
				<WaterFull/>
			</div>
		)
	}
}