<template>
    <app-layout :Auth="Auth" :user="user" >
        <header class="h-[80px] w-full flex items-center justify-center">
            <tabs
                :tabsFun="tabsFun"
                :currerntTab="currentTabItem"
                :tabData="tabsData"
            />
        </header>
        <section class="flex items-center justify-center">
            <profile :userInfo="userInfo" v-if="currentTabItem == 'Account info'" />
            <bankdata v-else-if="currentTabItem == 'Bank info'" />
            <done v-else />
        </section>
    </app-layout>
</template>

<script>
    import tabs from '@/components/tabs.vue';
    import profile from './Profile/profile.vue';
    import done from './Done/done.vue';
    import bankdata from './BankData/bankData.vue';
    import AppLayout from '../../../Layouts/AppLayout.vue';
import AddNew from './new/addNew.vue';
    export default{
        components:{
            tabs,
            profile,
            done,
            bankdata,
            AppLayout,
                AddNew,
        },
        props:{
            classesLayout:String,
            Auth:Boolean,
            user:{
                type:Object,
                default:{}
            },
            show:{
                type:Array,
                default:[],
            }
        },
        data(){
            return{
                currentTabItem:{
                    type:String,
                },
                tabsData:{
                    type:Array,
                    default:['Account info' , 'Bank info' , 'Buying secceeded' , 'Add new']
                }
            };
        },
        created(){
            this.currentTabItem = "Account info";
        },
        methods:{
            tabsFun(item){
                this.currentTabItem = item;
            }
        }
    }
</script>
