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
    import ControlPanel from './ControlPanel.vue'
    import PatternEditor from './PatternEditor.vue'

    export default {
        components: {
            ControlPanel,
            PatternEditor
        }
    }
</script>
