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
                @click:append-outer='processSubtitles'
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
import { ipcRenderer } from 'electron'
import Pill from '../pill.vue'

export default {
    components: {
        Pill
    },
    data() {
        return {
            files: [],
            grupedWords: [
                { name: 'i', amount: 1234 },
                { name: 'you', amount: 900 },
                { name: 'he', amount: 834 },
                { name: 'she', amount: 400 },
            ]
        }
    },
    methods: {
        processSubtitles() {
            console.log(this.files)

            ipcRenderer.send('blabla', 'ping')//the first argument is a channel
            ipcRenderer.on('blublu', (event, res) => {
                console.log(res)
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