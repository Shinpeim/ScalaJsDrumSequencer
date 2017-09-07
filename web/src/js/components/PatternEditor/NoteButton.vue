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
    import {SequencerQuery, SequencerCommand, SequencerEvents} from '../../../../../scala/target/scala-2.12/scalajstodo-opt'

    export default {
        props: ['index'],

        mounted(){
            SequencerEvents.SequencerStateChanged.subscribe(() => {
                this.updateNote();
            });

            SequencerEvents.TrackStateChanged.subscribe(() => {
                this.updateNote();
            });
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
                notes: (new SequencerQuery).notes(),
                playingNoteIndex: -1
            }
        },
        methods: {
            toggleNote(index) {
                (new SequencerCommand).toggleNote(parseInt(index));
            },

            updateNote(){
                this.notes = (new SequencerQuery).notes();
            }
        }
    }
</script>
