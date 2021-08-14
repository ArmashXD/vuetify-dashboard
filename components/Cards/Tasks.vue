<template>
    <v-card elevation="4" style="padding:8px; margin:8px">
       <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-4">
          {{task.heading}}
        </v-list-item-title>
        
        <v-list-item-subtitle>{{task.description}}</v-list-item-subtitle>
       
      </v-list-item-content>

      <nuxt-link :to="`/tasks/${task.id}`" style="text-decoration:none">
                  <v-btn color="success" >
                    <v-icon dark>
                      mdi-wrench
                    </v-icon>
                  </v-btn>
                     </nuxt-link>
                    <v-btn
                  
                    color="red"
                    class="ma-2 "
                    @click="destroy(task.id)"
                    >
                    <v-icon dark>
                        mdi-cancel
                    </v-icon>
                    </v-btn>
    </v-list-item>

     
    </v-card>
</template>

<script>
export default {
    props:{
        task:Object
    },
    data(){
        return{

        }
    },
    methods:{
        destroy(id){
            this.$emit('remove', id)
        }
    }
}
</script>

