<template>
      <v-snackbar
        color="green"
        rounded="pill"
        top
        right
        v-model="snackbar" >
      {{ snackBarText }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script>
export default {
    props:{
        snackbar: Boolean,
        snackBarText: String
    }
}
</script>