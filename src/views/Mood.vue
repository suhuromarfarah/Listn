<template>
  <div class="hello">
    <div class="selection">
    <h3>
      Select your mood. Listn will pick a song for you!
    </h3>
    <!--<model-select :options="options"
                    v-model="item"
                    placeholder="select item"
                    v-on:input="loadMusic">
    </model-select>  -->
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
    <div>
      <h2> You're feeling 
        <span style='font-weight:900;color:red'>
          <span v-if="this.curMood.value == 'workout' | this.curMood.value == 'working' | this.curMood.value == 'whatever'">like </span>{{  this.curMood.value  }}
        </span>  
      </h2>

      </div>
      </div>
      
      <h3> Listn suggests  <span style='font-weight:900;color:red'> {{  this.videoName  }}. </span>   </h3>
       

      <youtube :video-id="videoId" :player-vars=" {  autoplay: 1  } " @ready="ready" @playing="playing"></youtube>
    

  </div>
</template>

<script>
  
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data () {
      return {
        emoji: [
            {  disp: '😁', value:'happy'  },
          {  disp: '😢', value:'sad'  },
          {  disp: '🥰', value:'romantic'  },
          {  disp: '😌', value:'chill'  },
          {  disp: '🥳', value:'party'  },
          
          ],
            happy: [
        {  name: 'Doubt', videoId : 'RfgL_OaTomc'  },
        {  name: 'After the storm', videoId : '9f5zD7ZSNpQ'  },
        {  name: 'Houdini', videoId : '_GMQLjzVGfw'  },
      ],
   
      sad: [
        {  name: 'Everybody\'s changing', videoId : 'Zx4Hjq6KwO0'  },
        {  name: 'Yoü And I', videoId : 'oGEwc4xap0E'  },
        {  name: 'Let you love me', videoId : 'XCQK6LmhYqc'  },
        {  name: 'Daughter', videoId : 'VEpMj-tqixs'  },
        {  name: 'Stay high', videoId : 'oh2LWWORoiM'  },
        {  name: 'Dear old Nicki', videoId : '-NZFsjWHC9I'  },
        {  name: 'Catcher in the Rye', videoId : '4PNNzSNtihI'  },
        {  name: 'Adios Nonino', videoId : 'VTPec8z5vdY'  },
        {  name: 'Exogenesis: Symphony, Part 3 (Redemption)', videoId : 'tdhlQzFX-PU'  },
        {  name: 'Take me to church', videoId : 'PVjiKRfKpPI'  },
        {  name: 'Adios Nonino', videoId : 'VTPec8z5vdY'  },
        {  name: 'Exogenesis: Symphony, Part 3 (Redemption)', videoId : 'tdhlQzFX-PU'  },
        {  name: 'No interruption', videoId : '_t431MAUQlQ'  },
      ],
      romantic: [
        {  name: 'Lover Boy', videoId : '8HnLRrQ3RS4'  },
        {  name: 'Altogether Alone', videoId : 'S9ZocwLckQw'  },
        {  name: 'Thousand Miles', videoId : 'Cwkej79U3ek'   },
        {  name: 'Back to you', videoId : 'VY1eFxgRR-k'  },
        {  name: 'Mystery of love', videoId : '4WTt69YO2VI'  },
        {  name: 'Up', videoId : '29GWMT0GB6s'   },
        {  name: 'Unwritten', videoId : 'b7k0a5hYnSI'  },
        {  name: 'Lucky', videoId : 'acvIVA9-FMQ'  },
        {  name: 'I\'m yours', videoId : 'EkHTsc9PU2A'   },
        {  name: 'California', videoId : 'suYdhwmXASA'   },
        {  name: 'The way', videoId : '_sV0S8qWSy0'  },
        {  name: 'Lucky', videoId : 'acvIVA9-FMQ'  },
        {  name: 'I\'m yours', videoId : 'EkHTsc9PU2A'   },
        {  name: 'Sweet disposition', videoId : 'jxKjOOR9sPU'  },
        {  name: 'Mr.Sandman', videoId : '9xMCNmUaGko'  },
      ],
      chill: [
        {  name: 'What if I go?', videoId : 'pLuQ0MGLBXU'  },
        {  name: '1 Night', videoId : 'sjle_ZI4elo'  },
        
        {  name: 'Affection', videoId : 'uJoMqYumxmA'  },
        {  name: 'I wish I missed my ex', videoId : 'a7kT52xL-7g'  },
        {  name: 'Sober', videoId : 'jx96Twg-Aew'  },
        
        {  name: 'Better friends', videoId : 'j7vKsUYpvIQ'  },
        {  name: 'Cheapest flight', videoId : 'eCstDa1p_yE'  },
        {  name: 'Who\'s got you singing again', videoId : 'h-Yiku4Al48'  },
        {  name: 'Cheapest flight', videoId : 'eCstDa1p_yE'  },
        {  name: 'Another One (Demo) #1', videoId : 'l7qkSlJ7h_M'  },
        {  name: 'Who\'s got you singing again', videoId : 'h-Yiku4Al48'  },
        {  name: 'Leaning on you', videoId : 'B4wruSAdKvs'  },
      ],
      party: [
        {  name: 'Little talks', videoId : 'ghb6eDopW8I'  },
        {  name: 'Broke', videoId : 'fe0Enf31npc'  },
        {  name: 'Love me less', videoId : 'ZznsQjzlHIE'  },
        {  name: 'Pray for me', videoId : 'XR7Ev14vUh8'  },
        {  name: 'Wake up', videoId : 'TZD7CNRSq28'  },
      ],
  
      

        item: {
          value: '',
          text: '',
        },
        curMood: null,
        videoId:null, // fallback IWIMME
        videoName: null // fallback
      }
    },
    created() {
      this.randomMood()
      
    },
    methods: {
      reset () {
        this.item = {}
      },
      selectFromParentComponent1 () {
        this.item = this.options[0]
      },
      pickMusic (emo) {
        var mood = emo.value
        this.curMood = emo
        var randomSongInd = Math.floor(Math.random() * this[mood].length);
        this.videoId = this[mood][randomSongInd].videoId;
        this.videoName = this[mood][randomSongInd].name;
      },
      method (url) {
        this.videoId = this.$youtube.getIdFromURL(url)
        this.startTime = this.$youtube.getTimeFromURL(url)
      },
      ready (event) {
        this.player = event.target
      },
      playing (event) {
        // playing a video,
        return event
      }, 
      change () {
        this.videoId = 'another video id'
      },
      stop () {
        this.player.stopVideo()
      },
      pause () {
        this.player.pauseVideo()
      },
      randomMood(){
        var curMoodInd = Math.floor(Math.random() * this.emoji.length);
        this.curMood = this.emoji[curMoodInd];
        this.pickMusic(this.curMood);
      }
    },
    components: {
    //   ModelSelect
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
}
.emo-item:hover{
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}
@keyframes shake {
  10%, 90% {
    transform: translate3d(-0.5px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(1px, 0, 0);
  }
  30%, 50%, 70% {
    transform: translate3d(-2px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(2px, 0, 0);
  }
}
.active{
  text-shadow: 0px 0px 30px #43D8C9, 
               0px 0px 30px #B86CD9;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  border: solid 1px black;
  text-align:center;
  background-color: gray;
  /* background-image: "src/docs/guitar.jpg"; */
  height:1000px;
  
 
}
.selection{
  border: solid 1px black;
  width: 450px;
  text-align: center;
  margin:auto;
  border-radius: 10%;
  background-color: lightgray;
   margin-top:10%;
}
</style>