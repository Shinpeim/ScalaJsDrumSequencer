<template>
    <div>
        <navigation></navigation>
        <div class="container">
            <control-panel></control-panel>
            <pattern-editor></pattern-editor>
        </div>
    </div>
</template>
<script>
    import Navigation from './Navigation.vue'
    import ControlPanel from './ControlPanel.vue'
    import PatternEditor from './PatternEditor.vue'

    import {PlayerCommand} from '../../../../scala/target/scala-2.12/scalajsdrumsequencer-opt'

    export default {
        components: {
            Navigation,
            ControlPanel,
            PatternEditor
        },

        created(){
            const command = new PlayerCommand;
            command.loadHHSounds();
            command.loadRSSounds();
            command.loadSDSounds();
            command.loadBDSounds();
        }
    }
</script>
