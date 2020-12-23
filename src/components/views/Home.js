import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-sm bg-light flex-row-reverse p-4">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" to="#">How It Works</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="#">Advantages</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="#">Log In</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/signup">Sign Up</Link>
						</li>
					</ul>
				</nav>

				{/* Main section */}
				<section id="main">
        	<div className="container mt-4">
          	<div className="jumbotron bg-transparent">
              <div className="row align-items-center">
                <div className="col-8">
                  <h1 className="display-2 pr-3">Collancer</h1>
                </div>
								<div className="col-4">
										<a href="signup.html" className="btn btn-lg btn-primary">Join</a>
								</div>
              </div>
              <div className="row pl-5">
								<h2 className="display-5">Freelancing For the Community</h2>
								<input className="form-control pl-2" type="text" placeholder="Search for services..."></input>
              </div>
            </div>
        	</div>
    		</section>
			<section id="services">
				<div class="container-fluid bg-primary pt-3 mt-5 p-5">
					<div class="card-deck">
						<div class="card">
							<img src="../img/service.jpg" class="card-img-top" alt="service image"></img>
							<div class="card-body">
								<a href="./html/service_details.html" class="stretched-link"></a>
								<h5 class="card-title">Personal website development</h5>
								<p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, eligendi.</p>
								<div class="row">
									<div class="col">
										<p class="lead">Abduboriy A.</p>
									</div>
									<div class="col">
										<p class="font-weight-bold text-center">$50</p>
									</div>
								</div>
								<div class="row">
									<div class="col">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="far fa-star"></i>
									</div>
								</div>
							</div>
						</div>
						<div class="card">
							<div class="card-body">
								<a href="" class=" stretched-link">
									<h5 class="card-title">Photography</h5>
								</a>
							</div>
						</div>
						<div class="card">
							<div class="card-body">
								<a href="" class=" stretched-link">
									<h5 class="card-title">Graphics & Design</h5>
								</a>
							</div>
						</div>
						<div class="card">
							<div class="card-body">
								<a href="" class=" stretched-link">
									<h5 class="card-title">Proofreading & Writing Services</h5>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="how-it-works">
				<div class="container">
					<div class="row">
						<div class="col">
							<h3 class="display-4 text-center">How it Works</h3>
						</div>
					</div>
					<div class="row">
						<div class="col mt-4">
							<p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi unde, possimus doloremque odio fugit, modi reprehenderit reiciendis laboriosam eius hic iusto recusandae ipsa labore impedit corporis explicabo perferendis repudiandae ad a architecto. Nesciunt vitae quibusdam molestiae, ipsa ut hic repellat corrupti totam deleniti accusantium sit nostrum assumenda! Quaerat dolore deleniti aperiam nesciunt quos ratione quae amet alias aut esse perspiciatis ipsam odit maiores assumenda voluptatem numquam, adipisci, magnam autem dolor. Repellendus similique ullam odit facilis nesciunt, accusamus error optio alias officiis consectetur hic veniam laboriosam asperiores quis dolorum placeat vitae fuga obcaecati architecto eos explicabo velit delectus! Molestiae, numquam suscipit?</p>
							<p class="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quibusdam expedita necessitatibus quam, voluptatum ea error perferendis aperiam dolore libero minus soluta, vero facilis rem ad architecto! Aliquid atque ullam possimus minus vel modi hic, reiciendis totam, laborum debitis ut blanditiis sit nihil sed ex rem delectus natus, fugiat eum?</p>
						</div>
					</div>
				</div>
			</section>

			<section id="advantages" class="bg-light">
				<div class="container">
					<div class="row mb-4">
						<div class="col">
							<h3 class="display-4 text-center">Advantages</h3>
						</div>
					</div>
					<div class="row">
						<div class="col-4 text-right">
							<i style={{color: '#27ae60'}} class="fas fa-money-bill-wave fa-4x"></i>
						</div>
						<div class="col-8 pl-5 mb-4">
							<h3 class="display-5">Cheap</h3>
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam sequi quos praesentium sint, exercitationem deleniti illo ea obcaecati mollitia dignissimos.</p>
						</div>
					</div>
					<div class="row">
						<div class="col-4 text-right">
							<i style={{color: "#9b59b6"}} class="fas fa-network-wired fa-4x"></i>
						</div>
						<div class="col-8 pl-5 mb-4">
							<h3 class="display-5">Community Centric</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aspernatur necessitatibus odit dolor at debitis voluptates tempore ullam ipsa commodi!</p>
						</div>
					</div>
					<div class="row">
						<div class="col-4 text-right">
							<i style={{color: "#2c3e50"}} class="fab fa-jedi-order fa-4x mr-3"></i>
						</div>
						<div class="col-8 pl-5 mb-4">
							<h3 class="display-5">Backed by the Jedi Order</h3>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus vitae id aliquid eligendi aperiam autem atque neque eum, temporibus, laborum laboriosam facere! Similique vitae sit aliquid aspernatur explicabo inventore enim!</p>
						</div>
					</div>
				</div>
			</section>
		</div>
		)
	}
}