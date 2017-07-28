import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
	renderField(field){
		return (
			<div className="form-group">
				<label>{field.labeloffield}</label>
				<input className="form-control"
					type="text"
					{...field.input}
				/>
			</div>
		)
	}

	render(){
		return (
			<div>
				<Field
					labeloffield="Title"
					name="title"
					component={this.renderField}
				/>
				<Field
					labeloffield="Tags"
					name="tags"
					component={this.renderField}
				/>
				<Field
					labeloffield="Post Content"
					name="content"
					component={this.renderField}
				/>
			</div>
		)
	}
}

export default reduxForm({
	form: 'PostsNewForm'
})(PostsNew);
