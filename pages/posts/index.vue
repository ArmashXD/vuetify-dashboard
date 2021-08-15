<template>
    <v-row >
  
        <v-container
      :key="align"
    >
      <v-row
        :align="align"
        no-gutters
        style="height: 150px;"
      >
           <CardsPosts v-for="item in items" :key="item.id" :post="item"/>
      </v-row>
    </v-container>


    </v-row>
</template>

<script>
export default{
    middleware:['auth'],

    data(){
        return{
            items:[],
             align: 'start',
        }
    },
    mounted(){
        this.getPosts();
    },
    methods:{
         getPosts(){
            this.$axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                this.items = response.data;
            })
            .catch((error) =>{
                console.log(error)
            })
        }
    }
}

</script>

