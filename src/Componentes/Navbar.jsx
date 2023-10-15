import React from 'react'

function Navbar() {
  return (
    <nav class="navbar navbar-dark navbar-expand-lg" style={{backgroundColor: "#8634eb", color: "white"}}>
        <div class="container-fluid">
            <a class="navbar-brand" href="#">BeeCode</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">ToDoList</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Acerca de mi</a>
                </li>
            </ul>
            <span class="navbar-text">
                Aprendiendo React
            </span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar