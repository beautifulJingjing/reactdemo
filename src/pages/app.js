/**
 * Created by yr on 2017/11/14.
 */
import React, { Component } from 'react'

export default class App extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleMenuClick = this.handleMenuClick.bind(this);
	}
	handleClick(){
		var node = this.refs.search;
		if($(node).hasClass('showing')){
			$(node).removeClass('showing')
			$('.logo').css('display','block')
		}else{
			$(node).addClass('showing')
			$('.logo').css('display','none')
		}
	}
	handleMenuClick(){
		var node = this.refs.menu;
		console.log(this.props)
		if($(node).hasClass('cross')){
			$(node).removeClass('cross')
			$('.header-menu').removeClass('show')
		}else{
			$(node).addClass('cross')
			$('.header-menu').addClass('show')
		}
	}
	render() {
		const { data } = this.props
		return (
			<div>
				<div id="header_unit">
					<div id="mobile_header">
						<div className="logo icon-only">
							<a href="" className="img"></a>
							<div className="mobile-title">发现</div>
						</div>
						<div className="search-form" ref="search">
							<div className="header-button search" onClick={this.handleClick}>
								<i></i>
							</div>
							<input type="text" className="search-input"/>
							<div className="cancel" onClick={this.handleClick}><i></i></div>
						</div>
						<a href="javascript:;" className="header-button menu" ref="menu" onClick={this.handleMenuClick}><i></i></a>
					</div>
				</div>
				<div className="header-place-holder"></div>
				<div className="header-menu">
					<div className="inner">
						<div className="line login">
							<a href="/login" className="signup-button btn rbtn"><span> 注册</span></a>
							<a href="/login" className="login-button btn"><span> 登录</span></a>
							<a href="" className="link"></a>
						</div>
						<div className="line">
							<a href="" className="link">最新</a>
							<i className="arrow"></i>
						</div>
						<div className="line">
							<a href="" className="link">热门</a>
							<i className="arrow"></i>
						</div>
						<div className="line">
							<a href="" className="link">发现</a>
							<i className="arrow"></i>
						</div>
						<div className="line pc-btns">
							<a href="" className="to to-pc">访问电脑版</a>
							<a href="" className="to to-app">下载客户端</a>
						</div>

					</div>
				</div>
			</div>
		)
	}
}