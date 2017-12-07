/**
 * Created by yr on 2017/11/14.
 */
import React, { Component } from 'react'

export default class indexCover extends React.Component{
	constructor(props) {
		super(props);
	}
	componentDidMount(){
		$('.follower-item').eq(0).addClass('show')
		setTimeout(function () {
			$('.follower-item').eq(1).addClass('show')
			setTimeout(function () {
				$('.follower-item').eq(2).addClass('show')
				setTimeout(function () {
					$('.follower-item').eq(3).addClass('show')
					setTimeout(function () {
						$('.follower-item').eq(4).addClass('show')
					},200)
				},200)
			},200)
		},200)
	}
	render() {
		const data  = this.props
		return (
			<div>
				<div className="explore-banner explore-banner-hasFollowers">
					<div className="explore-bg">
						<img src="/images/list-1.jpg" alt="" className="bg-img load"/>
					</div>
					<div className="explore-info">
						<h1 className="title">胸花</h1>
						<div className="info">胸花是婚礼上新郎的流行的配件，在新郎黯淡的西装礼服上，胸花成为点缀衣着的亮点，本专题分享这一抹亮色。</div>
						<a href="#" className="follow-explore follow btn rbtn">
							<span className="text">关注</span>
						</a>
						<div className="follow-title">
							<i className="icon"></i>
							<span>Ta 们已关注</span>
						</div>
					</div>
				</div>
				<div className="explore-followers">
					{
						data.followerList.map(function (item,index) {
							return (
								<a href="javascript:" className="follower-item" key={index}>
									<img src={item.url} alt=""/>
								</a>
							)
						})
					}
				</div>
			</div>
		)
	}
}