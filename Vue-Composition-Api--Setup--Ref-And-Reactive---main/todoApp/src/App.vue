<template>
<div class="w-screen h-screen bg-gray-400 ">
                <div class="bg-gray-700 rounded-md shadow-md text-white w-1/3 p-3  mx-auto">
                        <h3 class="text-center text-2xl"> todoList</h3>
                       <addSection  :AddTodo="AddTodo"  />
                       <todoList  @delete-event="deleteItem"   :todoList="todoList"/>
                </div>
        </div>
</template>


<script>
import addSection from "./component/addSection.vue"
import todoList from "./component/todoList.vue"
import { ref } from "vue" // reactive ref gibi calısır reactive bir obje döner   reactive data gibi dusunelebilir
export default {
        components:{
                addSection,
                todoList
        },
        setup(){
                const todoList = ref([])
                const AddTodo = (todoText) => { //props olarak yukarıya gönder
                        console.log(todoText)
                        todoList.value.push({
                                id:new Date().getTime(),
                                title:todoText  
                        })
                }

                const deleteItem = (todo) => {
                        console.log("todo",todo)
                        todoList.value = todoList.value.filter(t => t.id != todo.id)
                }
                 return {todoList,AddTodo,deleteItem }
        }
}
</script>
