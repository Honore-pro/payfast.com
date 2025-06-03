<template>
  <div id="app">
    <!-- <nav>
      
      <router-link to="/">Home</router-link>
      <router-link to="/skills">Skills</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<!-- 
<style>
*{
  margin: 0;
  padding: 0;
}
#{
  justify-content: space-between;
}
nav {
  display: flex;
  gap: 1rem;
  padding:16px;
  background-color: #f4f4f4;
  justify-content: center;
  align-items: center;

}

router-link {
  text-decoration: none;
  color: #333;
}

router-link.active {
  font-weight: bold;
}
</style> -->