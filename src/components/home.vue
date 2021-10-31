<template>
  <v-main fluid>
      <v-form>
            <v-file-input
                label="selecione as legendas"
                prepend-icon="mdi-message-text"
                append-outer-icon="mdi-send"
                outlined
                multiple
                chips
                v-model='files'
                @click:append-outer="processSubtitles"
            />
      </v-form>
      <div class='pills'>
          <Pill
            v-for="word in grupedWords"
            :key="word.name"
            :name='word.name'
            :amount="word.amount"
          ></Pill>
      </div>
  </v-main>
</template>

<script>
const {ipcRenderer} = window.require("electron")
import Pill from './pill.vue'

export default {
    components: {
        Pill
    },
    data() {
        return {
            files: [],
            grupedWords: []
        }
    },
    methods: {
        processSubtitles() {

            ipcRenderer.send('process-subtitles', 'ping')
            ipcRenderer.on('process-subtitles', (event, resp) => {
                this.grupedWords = resp
            })
        }
    }
}
</script>

<style>
    .pills{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>