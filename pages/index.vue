<template>
<v-container
    :key="align"
>
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


   <v-row
    :align="align"
    no-gutters
    style="height: 150px;"
 >
    <v-col
      cols="12"
      sm="12"
      offset-sm="12"
    >
      <v-card max-width="">
        <v-list two-line>
          <template v-for="(item, index) in items.slice(0, 6)">
            <v-subheader
              v-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>
            <v-divider
              v-else-if="item.divider"
              :key="index"
            ></v-divider>
            <v-list-item
              v-else
              :key="item.title"
            >
              <v-list-item-content >
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
            <v-btn color="success">
              <v-icon dark>
                mdi-wrench
              </v-icon> 
            </v-btn>

              </v-list-item-action>
            </v-list-item>
          </template>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
  </v-container>

</template>
<script>
export default {
  data(){
    return{
        items: [
        { header: 'Today' },
        { title: '<span class="font-weight-bold" style="color:blue">Low</span>', subtitle: `<span class="font-weight-bold">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?` },
        { divider: true,},
        { title: '<span class="font-weight-bold" style="color:green">Medium</span>', subtitle: `<span class="font-weight-bold">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.` },
        { divider: true, },
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', title: '<span class="font-weight-bold" style="color:red">High</span>', subtitle: '<span class="font-weight-bold">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?' },
      ],
       align:'start',
       dialog: false,
    }
  }
}
</script>