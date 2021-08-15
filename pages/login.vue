<template>
    <v-container style="z-index: 1;
    margin-top: 14%;">
    <v-layout wrap>
        <v-flex sm12 md6 offset-md3>
            <form @submit.prevent="submit">
          <v-card elevation="4" light tag="section">
            <v-card-title>
              <v-layout align-center justify-space-between>
                <h3 class="headline">
                    Login
                </h3>
                <v-flex>
                </v-flex>
              </v-layout>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <p>Sign in with your username and password:</p>
                <v-text-field
                              outline
                              label="Email"
                              type="email"
                              required
                              v-model.trim="form.email"></v-text-field>
                              <p v-if="errors.email" style="color:red">{{errors.email[0]}}</p>
                <v-text-field
                              outline
                              hide-details
                              label="Password"
                              type="password"
                              required
                              v-model.trim="form.password"></v-text-field>                             
                              <p v-if="errors.password"  style="color:red">{{errors.password[0]}}</p>

            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
              <!-- <v-btn color="info" text>
                Forgot password?
              </v-btn> -->
              <v-spacer></v-spacer>
              <v-btn color="info" :large="$vuetify.breakpoint.smAndUp" type="submit"
                  :loading="loadingBtn"
                  :disabled="loadingBtn"
              >
                <v-icon left>mdi-lock</v-icon>
                Login
              </v-btn>
            </v-card-actions>
          </v-card>
          </form>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
export default {
    layout:'signin',
    middleware:['guest'],
  data(){
        return{
           form:{
                email:'',
                password:'',
            },
           loadingBtn: false,
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

    methods:{
        async submit(){
          this.loadingBtn = true;
            await this.$auth.loginWith("local", {
                data: this.form
            })
            .then(response => {
              this.$router.push('/')
            })
            .catch(error =>{
                this.loadingBtn = false
            });
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