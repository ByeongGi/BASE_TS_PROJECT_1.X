<template>
  <div class="container-fluid app-footer">
    <h2>Footer</h2>
    <p> ByeongGiKim 2017-04-30 </p>  
  </div>
</template>
<script lang="ts">
import Vue from 'vue'; // 명시적으로 Import 해야함 

</script>
<style lang="scss">     
.app-footer {
      position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
}
</style>