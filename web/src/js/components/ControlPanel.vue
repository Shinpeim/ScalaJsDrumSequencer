<template>
    <div class="row">
        <div class="col s12">
            <div class="card horizontal">
                <div class="card-image left-pane brown">
                    <div class="card-content">
                        <a :class="{'disabled': ! isSoundsInited}" class="btn-floating btn-large waves-effect waves-light" @click="togglePlayingState">
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
    import {SequencerQuery, SequencerCommand} from '../../../../scala/target/scala-2.12/scalajstodo-opt'

    export default {
        created(){
        },

        data(){
            return {
                bpm: 120,
                selectedPatternId: (new SequencerQuery).selectedPatternId(),
                isPlaying: false,
                isSoundsInited: true
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
            },
            setPatternId() {
                (new SequencerCommand).selectPattern(this.selectedPatternId);
            },
            togglePlayingState(){
            }
        }
    }
</script>
