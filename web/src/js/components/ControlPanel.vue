<style scoped>
    .pattern-selector {
        border: solid 1px;
        border-radius: 2px;
        width: 20px;
        height: 20px;
        float: left;
        margin-right: 16px;
        background-color: gainsboro;
        cursor: pointer;
    }

    .next {
        background-color: teal;
    }

    .playing {
        background-color: teal;
    }
</style>
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
                            Pattern: {{playingPatternId}}
                        </span>
                        <div>
                            <div class="pattern-selector"
                                 :class="cssClassOf('A')"
                                 @click="setPatternId('A')">
                            </div>

                            <div class="pattern-selector"
                                 :class="cssClassOf('B')"
                                 @click="setPatternId('B')">
                            </div>

                            <div class="pattern-selector"
                                 :class="cssClassOf('C')"
                                 @click="setPatternId('C')">
                            </div>

                            <div class="pattern-selector"
                                 :class="cssClassOf('D')"
                                 @click="setPatternId('D')">
                            </div>
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
                this.playingPatternId = playerQuery.playingPatternId();
                this.nextPatternId =  playerQuery.nextPatternId();
                this.isPlaying =  playerQuery.isPlaying();
                this.areSoundsReady = playerQuery.areSoundsReady();
            })
        },

        data(){
            const playerQuery = new PlayerQuery;
            return {
                bpm: playerQuery.bpm(),
                playingPatternId: playerQuery.playingPatternId(),
                nextPatternId: playerQuery.nextPatternId(),
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
            setPatternId(v) {
                (new PlayerCommand).setNextPattern(v);
            },
            togglePlayingState(){
                const command = new PlayerCommand;
                if (this.isPlaying) {
                    command.stop()
                } else {
                    command.play()
                }
            },
            cssClassOf(patternName) {
                if (this.playingPatternId == patternName) {
                    return 'teal'
                } else if (this.nextPatternId == patternName) {
                    return 'orange'
                } else {
                    return '';
                }
            }
        }
    }
</script>
