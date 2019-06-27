<template>
  <div class="geEditor"
       ref="geEditor">
  </div>

</template>

<script>
import '@/draw/styles/grapheditor.css'
import { App } from '@/draw/js/App'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  mounted () {
    let self = this;
    App.main(null, self.$refs.geEditor);
  },
  methods: {

  }
}
</script>


