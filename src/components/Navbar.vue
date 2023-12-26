<script setup></script>

<template>
  <div id="navigation">
    <h1 id="header">Updates</h1>
    <div id="locations">
      <h3 class="links">News</h3>
      <h3 class="links">Calendar</h3>
      <h3 class="links">List</h3>
      <h3 class="links">Vigor</h3>
      <h3 class="links">Jams</h3>
    </div>
  </div>
</template>

<style scoped>
#navigation {
  padding: 0;
  background-color: rgb(0, 133, 173);
  margin: 0;
  position: relative;
  top: 0;
}

#header {
  color: rgb(11, 24, 84);
  text-align: center;
  padding: 10px;
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
</style>
