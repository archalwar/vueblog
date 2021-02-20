<template>
    <div v-if="error">{{error}}</div>
    
    <div v-if="post" class="post">
        <h3>{{post.title}}</h3>
        <p class="pre">{{post.body}}</p>
         <span v-for="tag in post.tags" :key="tag"> #{{ tag }} </span>
    </div>
    <div v-else>
        <Spinner />
        </div>

</template>

<script>
import getPost from '../composables/getPost';
import Spinner from '../components/Spinner';

import {useRoute} from 'vue-router';

export default {
    props: ['id'],
     components: {Spinner},
    setup(props){
        const route = useRoute()

        //const {post, error, load} = getPost(props.id)

        //use route also to get props
        const {post, error, load} = getPost(route.params.id)

        load()

        return {post, error}
    }
}
</script>

<style>
.post{
    max-width: 1200px;
    margin: o auto;
}

.post p{
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
}
.pre{
    white-space: pre-wrap;
}

</style>