import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

const getPost = (id) => {
    const post = ref(null);
    const error = ref(null);

    const load = async () => {
        try {

            //simulate delay
            /*  await new Promise(resolve => {
                 setTimeout(resolve, 2000)
             }) */

            //local db
            /*   let data = await fetch("http://localhost:3000/posts/"+id);
              if (!data.ok) {
                throw Error("post does not exit");
              }
              post.value = await data.json();
       */


            let res = await projectFirestore.collection('posts').doc(id).get()

            if(!res.exists){
                throw Error('That post does not exits')
            }
            
            post.value = {...res.data(), id: res.id}

        } catch (err) {
            error.value = err.message;
        }
    };

    return { post, error, load };
};

export default getPost;