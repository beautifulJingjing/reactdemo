/**
 * Created by yr on 2017/11/13.
 */
import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class BottomCover extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			categoryList:[
				{
					url:'/images/category-item1.jpg',
					content:'多肉植物',
					id:1
				},
				{
					url:'/images/category-item2.jpg',
					content:'胸花',
					id:2
				},
				{
					url:'/images/category-item3.jpg',
					content:'手捧花',
					id:3
				},
				{
					url:'/images/category-item4.jpg',
					content:'花艺',
					id:4
				},
				{
					url:'/images/category-item2.jpg',
					content:'日系简约风格家局',
					id:5
				},
				{
					url:'/images/category-item1.jpg',
					content:'咖啡',
					id:6
				},
			]
		};

	}
	render() {
		const { data } = this.props
		return (
			<div id="new_index_page" className="new-index-page">
				<div className="recommend-line"><a href="javascript:void(0);">大家正在关注</a></div>
				<div className="recommend-info">
					{
						this.state.categoryList.map(function (item,index) {
							return (
								<Link to={"/list/" + item.id} className="category-item" key={index}>
									<img src={item.url} alt=""/>
									<div className="category-title">{item.content}</div>
								</Link>
							)
						})
					}
				</div>
			</div>
		)
	}
}