<template>
  <div class="home" style="margin-left: 0;">
    <router-link :to="{ name: 'all_users' }">
      <div id="homepage">Homepage</div>
      <img id="arrow" src="../assets/return.png" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HeaderComp",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  margin-top: 3vh;
}
#homepage {
  color: white;
  position: absolute;
  opacity: 0;
  left:-15%;
  font-size: 6vh;
  transition-property: left, opacity;
  transition-duration: 1.5s;
}

#arrow {
  height: 12vh;
  margin-left: 0;
  transition-property: transform, margin-left;
  transition-duration: 1.5s;
}

.home:hover  #arrow{
  transform: rotate(360deg);
  margin-left: 34vh;
}
.home:hover  #homepage{
  left: 1%;
  opacity: 1;
}
</style>
