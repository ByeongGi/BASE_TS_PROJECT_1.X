<template>
  <div>
    <!--<table class="table table-hover product-table">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in postlist" track-by="id">
          <td>{{post.id}}</td>
          <td> <img :src="post.imgUrl" class="img-responsive"/> </td>
          <td>{{post.postContent}}</td>
        </tr>
      </tbody>
    </table>
    -->
    <div class="list-group">
  
      <a v-for="post in postlist" track-by="id" class="list-group-item list-group-item-action flex-column align-items-start">
        <h5>POST ID :  {{post.id}}</h5>
        <img :src="post.imgUrl" class="img-responsive" />
        <div class="d-flex w-100 justify-content-between">
          <p class="mb-1">   
            {{post.postContent}}
          </p>
        </div>
      </a>
  
  
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {
    mapGetters
  } from 'vuex';
  import Component from 'vue-class-component';
  @Component({
    computed: mapGetters({
      postlist: 'allPostList'
    })
  })
  export default class Post extends Vue {
  
    created() {
      // 컴포넌트가 생성될때 호출되는 메소드 
      this.$store.dispatch('getAllPostList')
    }
    // 컴포넌트 커스텀 메서드 
  
  }
</script>

<style lang="scss">
       
</style>