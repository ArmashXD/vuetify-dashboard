<template>
    <v-container

    >
        <v-card elevation="4" class="pa-2">
         <v-list-item-title class="text-h5 mb-1">
        Profile
        </v-list-item-title>
    <form @submit.prevent="submit">

        <v-text-field
          v-model="name"
          :counter="10"
          label="Name"
          required
        ></v-text-field>


        <v-text-field
          v-model="phoneNumber"
          :counter="7"
          label="Phone Number"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          label="E-mail"
          required
        ></v-text-field>
        <v-select
          v-model="select"
          :items="items"
          label="Select"
          data-vv-name="select"
          required
        ></v-select>
        <v-checkbox
          v-model="checkbox"
          value="1"
          label="Option"
          type="checkbox"
          required
        ></v-checkbox>
        <v-card-actions>

      <v-btn
        class="mr-4"
        type="submit"
      >
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
              </v-card-actions>

    </form>
        </v-card>
    </v-container>
</template>

<script>

export default {

    data(){
        return{
          name: '',
          phoneNumber: '',
          email: '',
          select: null,
          items: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4',
          ],
          checkbox: null,

        }
    },
    methods:{
     submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.name = ''
        this.phoneNumber = ''
        this.email = ''
        this.select = null
        this.checkbox = null
        this.$refs.observer.reset()
      },
    }
}
</script>