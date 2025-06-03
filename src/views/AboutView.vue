<template>
  <div id="app">
    <header>
      <nav class="navbar">
        <router-link to="/" exact>Home</router-link>
        <router-link to="/skills">Skills</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </header>
  </div>
    <!-- <main>
      <router-view />
    </main>
  
  <h2>About</h2> -->

  <section class="min-vh-100 bg-primary text-white d-flex align-items-center text-center px-3 py-5">
    <div class="container">
      <h1 class="display-4 fw-bold mb-4">About Me</h1>
      <p class="lead mb-3">
        I'm Honore, a frontend developer who loves building beautiful, responsive websites using Vue and Bootstrap.
      </p>
      <p>
        I'm always improving and learning new tools to craft better digital experiences.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'App'
}
</script>

<!-- <style>
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
  gap: 2rem;
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
</style> -->