<template>
    <div class="row">
        <div class="col s12">
            <div class="card horizontal">
                <div class="card-image left-pane brown">
                    <div class="card-content">
                        <a :class="{'disabled': ! areSoundsReady}" class="btn-floating btn-large waves-effect waves-light" @click="togglePlayingState">
                            <i class="material-icons">{{playButtonIcon}}</i>
                        </a>
                    </div>
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <span class="brown-text">
                            BPM: {{bpm}}
                        </span>
                        <p class="range-field">
                            <input type="range" id="bpm-slider" min="10" max="240" :value="bpm" @input="setBpm"/>
                        </p>
                    </div>
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <span class="brown-text">
                            Pattern: {{selectedPatternId}}
                        </span>
                        <div>
                            <input name="pattern" type="radio" value="A" id="radio-pattern-1" v-model="selectedPatternId" @change="setPatternId"/>
                            <label for="radio-pattern-1"></label>
                            <input name="pattern" type="radio" value="B" id="radio-pattern-2" v-model="selectedPatternId" @change="setPatternId"/>
                            <label for="radio-pattern-2"></label>
                            <input name="pattern" type="radio" value="C" id="radio-pattern-3" v-model="selectedPatternId" @change="setPatternId"/>
                            <label for="radio-pattern-3"></label>
                            <input name="pattern" type="radio" value="D" id="radio-pattern-4" v-model="selectedPatternId" @change="setPatternId"/>
                            <label for="radio-pattern-4"></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {SequencerQuery, PlayerQuery, SequencerCommand, PlayerCommand, PlayerEvents} from '../../../../scala/target/scala-2.12/scalajsdrumsequencer-opt'

    export default {
        mounted(){
            const playerQuery = new PlayerQuery;
            PlayerEvents.PlayerStateChanged.subscribe(() => {
                this.isPlaying =  playerQuery.isPlaying();
                this.areSoundsReady = playerQuery.areSoundsReady();
            })
        },

        data(){
            const playerQuery = new PlayerQuery;
            return {
                bpm: playerQuery.bpm(),
                selectedPatternId: (new SequencerQuery).selectedPatternId(),
                isPlaying: playerQuery.isPlaying(),
                areSoundsReady: playerQuery.areSoundsReady()
            }
        },
        computed:{
            playButtonIcon(){
                if (this.isPlaying) {
                    return 'stop';
                } else {
                    return 'play_arrow';
                }
            }
        },
        methods: {
            setBpm(){
                const bpm = parseInt(document.getElementById('bpm-slider').value)
                this.bpm = bpm;
                (new PlayerCommand).setBpm(bpm);
            },
            setPatternId() {
                (new SequencerCommand).selectPattern(this.selectedPatternId);
                (new PlayerCommand).setNextPattern(this.selectedPatternId);
            },
            togglePlayingState(){
                const command = new PlayerCommand;
                if (this.isPlaying) {
                    command.stop()
                } else {
                    command.play()
                }
            }
        }
    }
</script>
