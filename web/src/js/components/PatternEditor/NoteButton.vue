<style scoped>
    .note {
        width: 80px;
    }
</style>
<template>
    <div class="card-content cel">
        <span class="note btn-large"
              :class="[isPlayingBeat ? 'orange' : 'teal', {'lighten-5': ! notes[index]}]"
              @click="toggleNote(index)">
            <span class="note"></span>
        </span>
    </div>
</template>
<script>
    export default {
        props: ['index'],

        created(){
        },
        computed:{
            isPlayingBeat(){
                if (this.playingNoteIndex == null) {
                    return false;
                }
                return (Math.floor(this.playingNoteIndex / 4) == Math.floor(this.index / 4));
            }
        },
        data(){
            return {
                notes: {},
                playingNoteIndex: 0
            }
        },
        methods: {
            toggleNote(index) {
            }
        }
    }
</script>
