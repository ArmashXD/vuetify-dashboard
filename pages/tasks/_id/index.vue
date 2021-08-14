<template>
        <v-container>
            <v-skeleton-loader v-if="firstLoad" :loading="loading" type="card">
                <nuxt-link style="text-decoration:none" to="/tasks">
                <v-btn color="success" class="mb-5">
                    Go Back
                </v-btn>
                </nuxt-link>
                <v-card elevation="4" class="pa-2">
                    <v-list-item-title class="text-h5 mb-5">
                        Edit {{form.heading}}
                    </v-list-item-title>
                    <form @submit.prevent="update">
                        <v-text-field
                        v-model="form.heading"
                        label="Heading"
                        required
                        >
                        </v-text-field>
                        <v-text-field
                        v-model="form.description"
                        label="Description"
                        required
                        >
                        </v-text-field>
                        <v-btn class="mr-4" type="submit" color="success"
                           :loading="loadingBtn"
                            :disabled="loadingBtn"
                        >
                            Save
                        </v-btn>
                    </form>
                </v-card>
                </v-skeleton-loader>
                <SnackbarSuccess :snackbar="snackbar" :snackBarText="snackBarText"/>
            </v-container>
</template>

<script>
export default {
    data(){
        return{
            form:{
                heading:'',
                description:'',
                id:'',
            },
            loading: true,
            firstLoad: true,
            loadingBtn: false,
            snackbar: false,
            snackBarText: '',
        }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]
        setTimeout(() => (this[l] = false), 3000)
        this.loader = null
      },
     },
    mounted(){
        this.getSingleTask();
    },
    methods:{
        async getSingleTask()
        {
            await this.$axios.get(`task/show/${this.$route.params.id}`)
            .then((response)=>{
                this.form.heading = response.data.heading
                this.form.description = response.data.description
                this.form.id = response.data.id
                this.loading = false;
            })
            .catch((error)=>{
                console.log(error)
            })
        },
        async update()
        {
            this.loadingBtn = true;
            let {data} = await this.$axios.post('task/update', this.form)
            if(data.status == 200)
            {
                this.loadingBtn = false;
                this.snackbar = true;
                this.snackBarText = data.message;
            }
        }
    }
}
</script>

<style scoped>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>