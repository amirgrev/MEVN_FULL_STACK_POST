<template lang="">
  <v-container>
    <v-row>
      <v-col sm="4" class="pa-3" v-for="post in posts" ::key="post._id"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from "@/api";

export default {
  name: "Home",
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    this.posts = await API.getAllPost();
  },
};
</script>
