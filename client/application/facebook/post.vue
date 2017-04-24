<template>
  <table class="table table-hover product-table">
    <thead>
      <tr>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in postlist" track-by="id">
        <td>{{post}}</td>
      </tr>
    </tbody>
  </table>
</template>          
<script lang="ts">
import Vue from 'vue';    
import {mapGetters} from 'vuex';
import Component from 'vue-class-component';
@Component({
 
}) 
export default class Post extends Vue {
        
 created () {
 // 컴포넌트가 생성될때 호출되는 메소드 
   
 }
 // 컴포넌트 커스텀 메서드 
 
}
 
</script>
<style lang="scss">     


  
</style>