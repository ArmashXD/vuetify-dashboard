<template>
  <div>
    <v-container>
           <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="success" dark v-bind="attrs" v-on="on" class="mb-4">
          Add New
        </v-btn>
      </template>
      <v-card>

        <v-card-title>
          <span class="text-h5">Add New Task</span>
        </v-card-title>
        <form @submit.prevent="save">
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field label="Task Title*" v-model="form.heading" required></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field label="Task Body*" v-model="form.description" required></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-autocomplete
                  :items="['Low', 'Medium', 'High']"
                  label="Priority*"
                  required
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text type="submit"
            :loading="loading"
            :disabled="loading"
          > 
            Save
          </v-btn>
        </v-card-actions>
        </form>
      </v-card>
    </v-dialog>
    <CardsTasks v-for="item in items" :key="item.id" :task="item" @remove="destroy" />
    <SnackbarSuccess :snackbar="snackbar" :snackBarText="snackBarText"/>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [],
      align: "start",
      dialog: false,
      edit: false,
      form:{
          heading:"",
          description:"",
      },
      snackbar: false,
      snackBarText: '',
      skeleton: true,
      firstLoad: true,
      loading: false,
      loader: null,
    };
  },
  mounted() {
    this.getTasks();
  },
  watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]
        setTimeout(() => (this[l] = false), 3000)
        this.loader = null
      },
  },
  methods: {
    async getTasks() {
     await this.$axios
        .get("tasks")
        .then(response => {
          this.items = response.data;
          this.skeleton = false;
        })
        .catch(e => {
          console.log(e);
        });
    },
   async save(){
        this.loader = 'Saving'
        this.loading = true
        
        let {data} = await this.$axios.post('tasks/store', this.form)
            if(data.status == 200)
            {
              this.loading = false;
              this.dialog = false
              this.snackbar = true
              this.snackBarText = data.message
              this.getTasks()
              this.clearInput()
            }
            else
            {
              this.dialog = false
              this.snackbar = true
              this.snackBarText = data.message
            }
    },
    async destroy(id){
        let {data} = await this.$axios.delete(`task/destroy/${id}`)
          if(data.status == 200)
          {
            this.snackbar = true
            this.snackBarText = data.message
            this.getTasks()
          }
          else
          {
            this.snackbar = true
            this.snackBarText = data.message
          }
    },
    clearInput(){
      this.form.heading = '';
      this.form.description = '';
    }
  }
};
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