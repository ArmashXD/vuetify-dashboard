<template>
  <v-row justify="center" align="center">
          <v-card elevation="3" 
          class="mt-4"
          max-width="600">

         <v-list-item three-line>
            <v-list-item-content>
                    <div class="text-overline mb-4">
                        Expense
                    </div>
        <v-list-item-title class="text-h5 mb-1">
        Calculate
        </v-list-item-title>
     <v-form
    ref="form"
  >
    <v-text-field
      v-model="number1"
      label="Number 1"
      required
    ></v-text-field>

    <v-text-field
      v-model="number2"
      :rules="emailRules"
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
        @click="calculate"
    >
    Calculate
    </v-btn>

    <!-- <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn> -->
  </v-form>
        
            </v-list-item-content>
         </v-list-item>
            </v-card>
              <v-snackbar
      v-model="snackbar"
    >
      {{ result }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
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
                this.snackbar = true;
            }
            if(this.select == '-')
            {
                this.result = parseInt(this.number1) - parseInt(this.number2)
                this.snackbar = true;
            }
            if(this.select == '*')
            {
                this.result = parseInt(this.number1) * parseInt(this.number2)
                this.snackbar = true;
            }
            if(this.select == '/')
            {
                this.result = parseInt(this.number1) / parseInt(this.number2)
                this.snackbar = true;
            }
        }
    }
}
</script>

<style>

</style>