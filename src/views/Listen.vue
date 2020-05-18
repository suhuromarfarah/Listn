<template>
<v-col>
    <v-layout row-wrap fill-height>
  
    <v-container class="d-inline-block-flex">
      <v-row dense>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
            height="250"
            class="mt-11 ma-5"
            
          >
            <div class="d-flex flex-no-wrap justify-center">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                ></v-card-title>
    <v-card-text>
      <v-row
        align="center"
        justify="center"
      >
<template>
  <v-container fluid>
      <v-select
        :items="mood"
        :menu-props="{ top: true, offsetY: true }"
        label="Label"
      ></v-select>

  </v-container>
</template>
      </v-row>
    </v-card-text>
              </div>

            </div>
          </v-card>

        </v-col>
      </v-row>
    </v-container>



      <v-container class="d-inline-block-flex">
      <v-row dense>
        <v-col
          v-for="(item, i) in xy"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
            height="250"
            class="mt-11 ma-5"
            
          >
          
            <div class="d-flex flex-no-wrap justify-center">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                ></v-card-title>
    <v-card-text>
      <v-row
        align="center"
        justify="center"
      >
<template>

</template>
      </v-row>
    </v-card-text>
              </div>

            </div>
          </v-card>

        </v-col>
      </v-row>
    </v-container>
    
      
     
            </v-layout>
    </v-col>


</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          color: '#990000',
          title: 'What is your mood?',
        }
      ],
      mood: ['Happy', 'Sad', 'Romantic', 'Gloomy', "Calm"],
    }),
    computed: {
      likesAllFruit () {
        return this.selectedFruits.length === this.fruits.length
      },
      likesSomeFruit () {
        return this.selectedFruits.length > 0 && !this.likesAllFruit
      },
      icon () {
        if (this.likesAllFruit) return 'mdi-close-box'
        if (this.likesSomeFruit) return 'mdi-minus-box'
        return 'mdi-checkbox-blank-outline'
      },
    },

    methods: {
      toggle () {
        this.$nextTick(() => {
          if (this.likesAllFruit) {
            this.selectedFruits = []
          } else {
            this.selectedFruits = this.fruits.slice()
          }
        })
      },
    },
  }

</script>