<template>
  <v-container fluid>
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
            v-for="word in grupWords"
            :key="word.name"
            :name="word.name"
            :amount="word.amount"
          ></Pill>
      </div>
  </v-container>
</template>

<script>
import grupWords from '../back-end/grupWords'
const {ipcRenderer} = window.require("electron")
import Pill from './Pill'

export default {
    components: {
        Pill
    },
    data: function() {
        return {
            files: [],
            grupWords: []
        }
    },
    methods: {
        processSubtitles() {
            const paths = this.files.map(f => f.path)
            ipcRenderer.send('process-subtitles', paths)
            ipcRenderer.on('process-subtitles', (event, resp) => {
                this.grupWords = resp
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