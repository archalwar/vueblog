<template>
  <div class="home">
    <h2>Dojo Blog</h2>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" v-if="showPosts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>

    <button @click="showPosts = !showPosts">Toggle posts</button>
    <button @click="posts.pop()">Delete posts</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue";
import PostList from "../components/PostList";
import TagCloud from "../components/TagCloud";
import getPosts from "../composables/getPosts";
import Spinner from "../components/Spinner.vue";

export default {
  name: "Home",
  components: { PostList, Spinner, TagCloud },
  setup() {
    /*  const names = ref(['amarnath', 'samyuktha', 'pavani', 'dharani', 'venkat'])
    const search = ref('')

    const stopWatch = watch(search, ()=>{
      console.log('watch function run')
    })

    const stopWatchEffect = watchEffect( ()=>{
      console.log('watch effect function run' )
    })

    const matchingResults = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    const handleClick = () => {
      stopWatch()
      stopWatchEffect()
    } */

    /*  const posts = ref([
      { title: 'book name', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', id: 1 },
      { title: 'author book name', body: 'Lorem lorem', id: 2 }
    ]) */

    const { posts, error, load } = getPosts();

    load();
    const showPosts = ref(true);

    return { posts, showPosts, error };
  },
};
</script>


<style>
.home{
  max-width: 1200px;
  padding: 10px;
  margin: 0 auto;
}

.layout{
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>