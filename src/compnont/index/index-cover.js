/**
 * Created by yr on 2017/11/13.
 */
/**
 * Created by yr on 2017/11/9.
 */
import React, { Component } from 'react'

export default class indexCover extends React.Component{
	constructor(props) {
		super(props);

		// 设置 initial state
		this.state = {
			istransform:false,
			tranMove:0
		};

		// ES6 类中函数必须手动绑定
		this.handleTouchMove = this.handleTouchMove.bind(this);
		this.handleTouchStart = this.handleTouchStart.bind(this);
		this.handleTouchEnd = this.handleTouchEnd.bind(this);
		this.handleMenuClick = this.handleMenuClick.bind(this);
	}
	handleTouchStart(e){
		this.setState({
			istransform:true,
			tranStart:e.touches[0].pageY
		})
	}
	handleTouchMove(e){
		var newTrans = e.touches[0].pageY - this.state.tranStart;
		if(newTrans < 0){
			this.setState({
				tranMove:newTrans
			})
		}
	}
	handleTouchEnd(){
		var screeHeight = window.screen.height / 4,$this = this
		if(Math.abs(this.state.tranMove) < screeHeight){
			this.setState({
				tranMove:0
			})
		}else{
			this.setState({
				tranMove:- window.screen.height
			})
			setTimeout(function () {
				$($this.refs.index).css('display','none')
				$('.header-menu').removeClass('index')
			},500)
		}
	}
	handleMenuClick(){
		var node = this.refs.cover;
		console.log(this.props)
		if($(node).hasClass('cross')){
			$(node).removeClass('cross')
			$('.header-menu').removeClass('index')
		}else{
			$(node).addClass('cross')
			$('.header-menu').addClass('index')
		}
	}
	render() {
		const { data } = this.props
		return (
			<div >
				<div className="index-cover" id="index_cover" ref="index" onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} onTouchEnd ={this.handleTouchEnd} style={this.state.istransform ? {"transform":"translate3d(0px, " + this.state.tranMove + "px, 0px)"}:{"transform":"translate3d(0px, 0px, 0px)"}}>
					<a href="javascript:void (0)" className="cover-menu"  ref="cover" onClick={this.handleMenuClick}>
						<i></i>
					</a>
					<div className="cover-info">
						<div className="cover-logo"></div>
						<div className="cover-slogan"></div>
						<div className="cover-search">
							<div className="search">
								<i></i>
							</div>
							<input type="text" className="search-input" placeholder="搜索你喜欢的"/>
						</div>
					</div>
					<div className="cover-slide-up"></div>
				</div>
			</div>
		)
	}
}