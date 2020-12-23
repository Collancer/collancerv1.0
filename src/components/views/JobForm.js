import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class JobForm extends Component {
	render() {
		return (
			<div>
				<section id="postjob">
					<div class="container mt-5">
						<h3 class="display-5">Create a Job</h3>
						<form>
							<div class="form-group">
								<label for="project-title">Title</label>
								<input id="project-title" type="text" class="form-control" placeholder="Pick a title for your project..."></input>
							</div>
							<div class="form-group">
								<label for="description">Description</label>
								<textarea class="form-control" id="description" cols="30" rows="10" placeholder="Describe your project briefly..."></textarea>
							</div>
							<div class="form-group">
								<label for="file">Input any files relating to your project here, such as images, descriptions,etc.</label>
								<input type="file" class="form-control-file"></input>
							</div>
							<div class="form-group">
								<label for="">Mark any skills you are looking for:</label>
								<div class="form-check">
									<input type="checkbox" class="form-check-input"></input>
									<label for="" class="form-check-label">Programming</label>
								</div>
								<div class="form-check">
									<input type="checkbox" class="form-check-input"></input>
									<label for="" class="form-check-label">Design</label>
								</div>
								<div class="form-check">
									<input type="checkbox" class="form-check-input"></input>
									<label for="" class="form-check-label">Marketing</label>
								</div>
								<div class="form-check">
									<input type="checkbox" class="form-check-input"></input>
									<label for="" class="form-check-label">Photography</label>
								</div>
								<div class="form-check">
									<input type="checkbox" class="form-check-input"></input>
									<label for="" class="form-check-label">Writing</label>
								</div>
								<input style={{width: "150px;"}} type="text" class="form-control" placeholder="Other..."></input>
							</div>
							<div class="form-group">
								<label for="budget">What is your estimated budget?</label>
								<input type="text" class="form-control"></input>
							</div>
							<Link to="/notify" class="btn btn-primary mb-5">Continue</Link>
						</form>
					</div>
    		</section>
			</div>
		)
	}
}
