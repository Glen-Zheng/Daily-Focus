<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div id="navigation">
    <h1 id="header">Updates</h1>
    <div id="locations">
      <RouterLink :to="{ name: 'News' }" class="links">
        <h3>News</h3>
      </RouterLink>
      <RouterLink :to="{ name: 'Weather' }" class="links">
        <h3>Weather</h3>
      </RouterLink>
      <RouterLink :to="{ name: 'Calendar' }" class="links">
        <h3>Calendar</h3>
      </RouterLink>
      <RouterLink :to="{ name: 'List' }" class="links">
        <h3>List</h3>
      </RouterLink>
      <RouterLink :to="{ name: 'Vigor' }" class="links">
        <h3>Vigor</h3>
      </RouterLink>
      <RouterLink :to="{ name: 'Music' }" class="links">
        <h3>Music</h3>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
#navigation {
  padding: 0;
  background-color: rgb(211, 237, 245);
  margin: 0;
  position: relative;
  top: 0;
}

#header {
  color: rgb(11, 24, 84);
  text-align: center;
  padding: 8px 10px 15px 10px;

  font-size: 5.5rem;
}

#locations {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
.links {
  background-color: aliceblue;
  flex-grow: 1;
  text-align: center;
  border: 2px orangered outset;
  cursor: pointer;
}

.links:hover {
  background-color: rgb(36, 36, 77);
  transition-duration: 0.5s;
  color: white;
}
</style>
