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
            width="500"
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
  <div>
      <ul>
      <li 
        :key='emo'
        v-for='emo in emoji' 
        style='font-size:4em; margin:0px'
        v-on:click='pickMusic(emo)'
        v-bind:class="{'emo-item':true, 'active':(curMood && emo.value === curMood.value)}">
        
          {{  emo.disp }}
      </li>
    </ul>
      </div>
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
  <v-container fluid>

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
          v-for="(item, i) in generatedPlaylist"
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
                <v-card-title class="headline justify-center"
                  v-text="item.title"></v-card-title>

                <div class="justify-center">
                <v-list-item :key='playlist'>
                <v-list-item-icon class="mx-10">
                <v-btn icon>
                <v-icon>mdi-rewind</v-icon>
                </v-btn>
                </v-list-item-icon>

                <v-list-item-icon :class="{ 'mx-0': $vuetify.breakpoint.mdAndUp }">
                  <v-btn icon>
                    <v-icon>mdi-pause</v-icon>
                  </v-btn>
                </v-list-item-icon>

                <v-list-item-icon class="mx-10" :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }">
                  <v-btn icon>
                    <v-icon>mdi-fast-forward</v-icon>
                  </v-btn>
                </v-list-item-icon>
              </v-list-item>
              </div>
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

      emoji: [
          {  disp: '😁', value:'happy'  },
          {  disp: '😢', value:'sad'  },
          {  disp: '🥰', value:'romantic'  },
          {  disp: '😌', value:'chill'  },
          {  disp: '🥳', value:'party'  },
          
          ],
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