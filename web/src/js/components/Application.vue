<template>
    <div>
        hello world
    </div>
</template>
<script>
    import {Test} from '../../../../scala/target/scala-2.12/scalajstodo-opt'

    export default {
        created(){
            (new Test).hello();
        }
    }
</script>
