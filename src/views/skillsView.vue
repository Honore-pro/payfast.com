<template>
      <header>
      <nav class="navbar">
        <router-link to="/" exact>Home</router-link>
        <router-link to="/skills">Skills</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </header>
  <section class="min-vh-100 bg-primary text-white d-flex flex-column justify-content-center text-center px-3">
    <h1 class="display-4 fw-bold mb-4">My Skills</h1>
    <div class="container">
      <div class="row row-cols-2 row-cols-md-4 g-3">
        <div class="col" v-for="skill in skills" :key="skill">
          <div class="bg-white text-dark py-2 rounded fw-semibold">{{ skill }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = ["HTML", "CSS", "JavaScript", "Vue.js", "Bootstrap", "Git", "Responsive Design", "Figma"];
</script>
<style>

</style>