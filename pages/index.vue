<template>
<div>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="success"
          dark
          v-bind="attrs"
          v-on="on"
          class="mb-4"
        >
         Add New
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Add New Task</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="12"
                md="12"
              >
                <v-text-field
                  label="Task Title*"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Task Body*"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
              >
                <v-autocomplete
                  :items="['Low', 'Medium', 'High',]"
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
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  <v-container>
    <v-card elevation="4">
<v-simple-table >
    <template>
      <thead>
        <tr>
          <th class="text-left">
            Title
          </th>
          <th class="text-left">
            Description
          </th>
          <th>
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in items"
          :key="item.id"
        >
          <td>{{ item.heading }}</td>
          <td 
          >{{ item.descripton }}</td>
          <td>
            <v-btn color="success">
              <v-icon dark>
          mdi-wrench
        </v-icon> 
            </v-btn>
                        <v-btn color="red" class="ma-2" dark>
              <v-icon   dark
          >
         mdi-cancel
        </v-icon> 
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
 
</v-simple-table>
   </v-card>
</v-container>
</div>
</template>
<script>
export default {
  data(){
    return{
       items: [],
       align:'start',
       dialog: false,
       edit : false,
    }
  },
  mounted(){
    this.getTasks();
  },
  methods:{
    getTasks(){
        this.$axios.get('http://localhost:8000/api/tasks')
        .then((response)=>{
          this.items = response.data;
          console.log(this.items);
        })
        .catch((e)=>{
            console.log(e);
        })
    }
  }
}
</script>