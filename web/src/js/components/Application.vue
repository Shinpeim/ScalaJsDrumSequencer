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

    export default {
        components: {
            Navigation,
            ControlPanel,
            PatternEditor
        }
    }
</script>
