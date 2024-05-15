import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const List = () => {
  return (
    <div>
       <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-custom">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHT-ND8HN_QitsYPuBUNymg6urhHbChpw3xA&s" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        <a class="nav-link" href="/Login">Features</a>
                        <a class="nav-link" href="#">Pricing</a>
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default List