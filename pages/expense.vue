<template>
  <v-row justify="center" align="center">
    <v-card elevation="3" 
          class="mt-4"
          max-width="500">

         <v-list-item three-line>
            <v-list-item-content>
                    <div class="text-overline mb-4">
                        Expense
                    </div>
        <v-list-item-title class="text-h5 mb-1">
        Calculate
        </v-list-item-title>
     <v-form
     ref="form">

    <v-text-field
      v-model="number1"
      label="Number 1"
      required
    >
    </v-text-field>

    <v-text-field
      v-model="number2"
      label="Number 2"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      label="Operator"
      required
    ></v-select>


    <v-btn
      color="success"
      class="mr-4"
      style="float:right"
        @click="calculate"
    >
    Calculate
    </v-btn>

  </v-form>
          <v-banner elevation="2" class="mt-2" align="center">
              {{ result }}
          </v-banner>
            </v-list-item-content>
         </v-list-item>
    </v-card>
  </v-row>
</template>

<script>
export default {
    data(){
        return{
            items:[
                '+',
                '-',
                '*',
                '/'
            ],
            number1:0,
            number2:0,
            select:'',
            snackbar:false,
            result:0,
        }
    },
    methods:{
        calculate(){
            if(this.select == '+')
            {
                this.result = parseInt(this.number1) + parseInt(this.number2)
            }
            if(this.select == '-')
            {
                this.result = parseInt(this.number1) - parseInt(this.number2)
            }
            if(this.select == '*')
            {
                this.result = parseInt(this.number1) * parseInt(this.number2)
            }
            if(this.select == '/')
            {
                this.result = parseInt(this.number1) / parseInt(this.number2)
            }
        }
    }
}
</script>

<style>

</style>