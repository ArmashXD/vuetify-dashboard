<template>
    <v-container style="z-index: 1;
    margin-top: 14%;">
        <v-layout wrap>
        <v-flex sm12 md6 offset-md3>
            <form >
          <v-card elevation="4" light tag="section">
            <v-card-title>
              <v-layout align-center justify-space-between>
                <h3 class="headline">
                    Register
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
                              label="Username"
                              type="text"
                              required
                              v-model="name"></v-text-field>
                <v-text-field
                              outline
                              label="Email"
                              type="text"
                              required
                              v-model="email"></v-text-field>
                <v-text-field
                              outline
                              hide-details
                              label="Password"
                              type="password"
                              required
                              v-model="password"></v-text-field>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
              <v-spacer></v-spacer>
              <v-btn color="info" :large="$vuetify.breakpoint.smAndUp" type="submit">
                <v-icon left>mdi-lock</v-icon>
                Register
              </v-btn>
            </v-card-actions>
          </v-card>
          </form>
        </v-flex>
        <v-flex sm12 md6 offset-md3>
          <v-layout align-center justify-space-between>
            <p class="caption my-3">
              <a href="#">Privacy Policy</a>
              |
              <a href="#">Terms of Service</a>
            </p>
            <p class="caption my-3">Powered by <a href="#">StaffCircle</a></p>
          </v-layout>
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
            
        }
    }
}
</script>

<style>

</style>