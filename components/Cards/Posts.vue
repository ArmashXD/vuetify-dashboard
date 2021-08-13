<template>
    <div>
        <v-col>

    <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <div style="font-size:0.8rem">{{post.title}}</div>
      <p class="text-h4 text--primary">
       
      </p>
      <div class="text--primary">
       {{post.userId}}<br>
      {{post.body}}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="teal accent-4"
        @click="reveal = true"
      >
        Learn More
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">
            Body
          </p>
          <p></p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="teal accent-4"
            @click="reveal = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
      
        </v-expand-transition>
    </v-card>

        </v-col>
    </div>
</template>


<script>
export default {
    props: {
        post:Object
    },
    data(){
        return{
            reveal:false,
        }
    }
}
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>