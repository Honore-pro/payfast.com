<template>
  <div id="app">
    <header>
      <nav class="navbar">
        <router-link to="/" exact>Home</router-link>
        <router-link to="/skills">Skills</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/about">About</router-link>
        <div class="dropdown dropstart text-end">
          <button type="button " class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
            search
          </button>
          <form action="" class="dropdown-menu"><input type="text" dropdown-item class="outline-white"></form>
        </div>
      </nav>
    </header>

    <!-- <main>
      <router-view />
    </main> -->
  </div>
  <div class="home">
    <section class="hero">
      <div class="hero-text">
        <h1>Hello, I'm <span class="highlight">Honore</span></h1>
        <p>A passionate Frontend Developer who loves crafting beautiful UIs and smooth experiences.</p>
        <router-link to="/projects" class="btn">View Projects</router-link>



        <div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="70"
  aria-valuemin="0" aria-valuemax="100" style="width:90%">
    <span class="sr-only">90% Complete</span>
  </div>
</div>











      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #fdfdfd;
}

header {
  background-color: #111;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar {
  display: flex;
  justify-content: center;
  gap: 5px;
}

.navbar a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.navbar a:hover {
  color: #f39c12;
}

main {
  padding: 2rem;
}
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  color: #fff;
  padding: 3rem;
  
}

.hero-text {
  text-align: center;
  max-width: 700px;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.highlight {
  color: #f39c12;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #f39c12;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #d35400;
}
</style>