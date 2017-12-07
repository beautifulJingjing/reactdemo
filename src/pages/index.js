/**
 * Created by yr on 2017/11/9.
 */
import React, { Component } from 'react'
import IndexCover from '../compnont/index/index-cover'
import BottomCover from '../compnont/index/bottom-cover'


export default class Index extends React.Component{
	constructor(props) {
		super(props);

	}
	render() {
		const { data } = this.props
		return (
			<div >
				<IndexCover/>
				<BottomCover/>
			</div>
		)
	}
}