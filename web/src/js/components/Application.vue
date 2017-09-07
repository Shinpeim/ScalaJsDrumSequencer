<template>
    <div>
        hello world
    </div>
</template>
<script>
    // todo: fastoptではなくてopt読み込む
    import {Test} from '../../../../scala/target/scala-2.12/scalajstodo-fastopt'

    export default {
        created(){
            (new Test).hello();
        }
    }
</script>
