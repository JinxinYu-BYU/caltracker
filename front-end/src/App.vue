<template>
  <div id="app" class="Home">
    <div id="header">
      <div class="Home-top">
        <div class="btnavbar">
          <nav class="navbar navbar-expand-lg navbar-light bg-white navbar-custom">
            <!-- a class="navbar-brand" href="//images/screenshots/portfolio-grid.png">Navbar</a -->
            <a href="index.html"> <img src="./assets/images/logo.svg" href="index.html" alt="website logo" width="100"> </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto" id="ulbar" style="display:flex;">
                <li class="nav-item">
                  <router-link to="/" class="nav-link" id = "Home">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/search" class="nav-link" id = "Home">Search </router-link>

                </li>
                <li class="nav-item">
                  <router-link to="/history" class="nav-link" id = "Home">History </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/how" class="nav-link" id = "Home">How </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/about" class="nav-link" id = "Home">About </router-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
</div>
    <router-view />

<div id="footer">
  <div class="Home-footer" width="100%">
  <div class="footer-text">
    <div class="GitHub">
      <a class="footer-link" href="https://github.com/BYU-CS-260-Winter-2020/lab-1-photography-website-JinxinYu-BYU"> <img src="./assets/images/github.svg" alt="facebook icon" width="25px"></a>
    </div>
    <div class="Facebook">
      <a class="footer-link" href="https://facebook.com"> <img src="./assets/images/facebook.svg" alt="facebook icon" width="25px"></a>
    </div>
    <div class="Linkdln">
      <a class="footer-link" href="https://linkedin.com/"><img src="./assets/images/linkedin.svg" alt="linkedin icon" width="25px"></a>
    </div>
    <div class="Instagram">
      <a class="footer-link" href="https://www.instagram.com/"><img src="./assets/images/instagram.svg" alt="instagram icon" width="25px"></a>
    </div>
  </div>
  <div class="Atrribution">
    <p class="Atrribution-text">
      Atrribution: Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
    </p>
  </div>
</div>
</div>
  </div>

</template>
