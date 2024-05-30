import React, { useEffect } from 'react';

export default function Carousal() {
    useEffect(() => {
        // Ensure that Bootstrap JS is loaded
        const bootstrap = require('bootstrap');
        const carouselElement = document.querySelector('#carouselExampleFade');
        new bootstrap.Carousel(carouselElement, {
            interval: 2000,
            wrap: true
        });
    }, []);

    return (
        <div style={{ position: "relative" }}>
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade">
                    <div className="carousel-inner" id='carousal'>
                        <div className="carousel-item active">
                            <img src="https://media.istockphoto.com/id/1363407092/photo/two-big-homemade-delicious-cheeseburger-with-onion-grilled-bacon-fresh-tomatoes-cheese-and.jpg?s=1024x1024&w=is&k=20&c=zlQD-5fsg5vpDjLH9XtUS58rLk75OHVrLctniIHfd5c=" className="d-block w-100" alt="..." style={{ objectFit: "contain" }} />
                        </div>
                        <div className="carousel-item">
                            <img src="https://plus.unsplash.com/premium_photo-1669687759693-52ba5f9fa7a8?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." style={{ objectFit: "contain" }} />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." style={{ objectFit: "contain" }} />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="carousal-caption width-150px" style={{ zIndex: "20", position: "absolute", top: "80%", left: "50%", transform: "translate(-50%, -50%)", width: "500px", }}>
                <form className="d-flex" role="search">
                    <input className="form-control me-2  " type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}
