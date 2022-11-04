<template>
        <div :class="`vip-wrap ${active == count?'active':'vip-wrap'}`">
            <h5 class="fs-20">{{count}}个月</h5>
            <ul>
                <li class="just-between">
                    <p class="fs-16 c-515a6e"> <span class="yuan"></span>同时在招职位</p>
                    <span class="count mr-15 fs-18"> {{ list.positionCount }}</span>
                </li>
                <li class="just-between">
                    <p class="fs-16 c-515a6e"> <span class="yuan"></span>职位刷新点数</p>
                    <span class="count mr-15"> <span class="fs-18">{{ list.refreshPositionCount }}</span> <span class="fs-14 c-515a6e" >/日</span> </span>
                </li>
                <li class="just-between">
                    <p class="fs-16 c-515a6e"> <span class="yuan"></span>邀请学生点数</p>
                    <span class="count mr-15"> <span class="fs-18">{{ list.invitationTalentCount }}</span> <span class="fs-14 c-515a6e" >/日</span> </span>
                </li>
                <li class="just-between">
                    <p class="fs-16 c-515a6e"> <span class="yuan"></span>职位自动刷新卡</p>
                    <span class="count mr-15 fs-18"> {{ list.refreshPositionCardCount*count }}</span>
                </li>
            </ul>
            <div class="buy c-ff4400 fs-14">
                <span class=" fs-28 fw-700"> {{Number(list.vipPrice)*count }}</span>
                元
            </div>
        </div>
</template>

<script setup lang="ts">
const props = defineProps<{
        list:any,
        count:number,
        active:number
}>()
const {list,count,active} = props;
</script>

<style lang="scss" scoped>
.vip-wrap {
    width: 301px;
    position: relative;
    border: 1px solid #f4f2f1 !important;
    border-left: none;
    cursor: pointer;
    box-sizing: border-box;
    
    h5 {
        padding-left: 15px;
        border-bottom: 1px solid #f4f2f1;
        line-height: 56px;
    }
    
    ul {
        padding-left: 15px;

        li {
            $height: 48px;
            height: $height;
            line-height: $height;


            .yuan {
                content: "";
                display: inline-block;
                width: 4px;
                height: 4px;
                border-radius: 50%;
                border: 1px solid #c5c8ce;
                margin-right: 8px;
                background-color: transparent;
            }

        }
    }

    .buy {
        margin: 16px 0 32px 16px;
    }
}
.active{
    border: 1px solid #f75736 !important;
}
</style>