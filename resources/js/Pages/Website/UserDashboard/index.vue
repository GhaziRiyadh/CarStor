<template>
    <app-layout :Auth="Auth">
        <header class="h-[80px] w-full flex items-center justify-center">
            <tabs
                :tabsFun="tabsFun"
                :currerntTab="currentTabItem"
                :tabData="tabsData"
            />
        </header>
        <section class="flex items-center justify-center">
            <profile :userInfo="user" v-if="currentTabItem == 'Account info'" />
            <bankdata v-else-if="currentTabItem == 'Bank info'" />
            <add-new :carData="show" v-else-if="currentTabItem == 'Add new'" />
            <done v-else />
        </section>
    </app-layout>
</template>

<script>
    import tabs from '@/components/tabs.vue';
    import profile from './Profile/profile.vue';
    import done from './Done/done.vue';
    import bankdata from './BankData/bankData.vue';
    import AppLayout from '@/Layouts/AppLayout.vue';
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
            userImage:{
                type:String,
                default:'/images/person.jpg',
            },
            userName:{
                type:String,
                default:'Itsmy',
            },
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
                    default:[{model:'Account info'} , {model:'Bank info'} , {model:'Buying secceeded'},  {model:'Add new'}]
                }
            };
        },
        created(){
            this.currentTabItem = "Account info";
            this.tabsData = [{model:'Account info'} , {model:'Bank info'} , {model:'Buying secceeded'},  {model:'Add new'}]
        },
        methods:{
            tabsFun(item){
                this.currentTabItem = item;
            }
        }
    }
</script>
