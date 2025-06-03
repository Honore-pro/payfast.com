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
      </main> -->
      

 
  <section class="min-vh-100 bg-primary text-white py-5 px-3">
    <div class="container text-center">
      <h1 class="display-4 fw-bold mb-5">My Projects</h1>
      <div class="row g-4">
        <div class="col-md-6" v-for="p in projects" :key="p.title">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">{{ p.title }}</h5>
              <p class="card-text">{{ p.description }}</p>
              <a :href="p.link" class="btn btn-outline-primary btn-sm" target="_blank">View</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  { title: "Portfolio Website", description: "Built with Vue & Bootstrap.", link: "#" },
  { title: "To-Do App", description: "Simple task manager app.", link: "#" }
];
</script>