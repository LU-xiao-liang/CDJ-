<!-- 结构 -->
<template>
    <div class="background">
        <div class="container">
            <div class="column left">
                <Left></Left>
            </div>

            <div class="column center">
                <Center></Center>
            </div>

            <div class="column right">
                <Right></Right>
            </div>
        </div>
    </div>
</template>

<!-- 逻辑 -->
<script >
import Left from "./Left"
import Center from "./Center"
import Right from "./Right"
export default {
    name: 'Forum',
    components: { Left, Center, Right },
}
</script>

<!-- 样式 -->
<style scoped> /* 设置滚动条样式 */
 /* 通用样式 */
 ::-webkit-scrollbar {
     width: 8px;
 }

 ::-webkit-scrollbar-track {
     background-color: #f5f5f5;
 }

 ::-webkit-scrollbar-thumb {
     background-color: #888;
     border-radius: 4px;
 }

 ::-webkit-scrollbar-thumb:hover {
     background-color: #555;
 }


 .background {
     background-color: #f2f2f2;
     height: calc(100% - 80px);
     padding: 5px 0;
 }

 .container {
     width: 1200px;
     height: 100%;
     margin: 0 auto;
     display: flex;
 }

 .column {
     /* flex: 1; */
     padding: 5px;
     margin: 0 1px;
     box-sizing: border-box;
 }

 .left {
     width: 20%;
    }

 .center {
     width: 60%;
     overflow: auto;
 }

 .right {
     width: 20%;
 }
</style>