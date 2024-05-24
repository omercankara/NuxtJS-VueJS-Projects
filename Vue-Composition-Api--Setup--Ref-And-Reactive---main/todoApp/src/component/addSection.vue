<template>
                  <section class="">
                                <input   @keydown.enter="newItem"  type="text" placeholder="Nedir ?" class="w-full px-2 p1 bg-gray-700 border-[1px] border-gray-400 rounded-md outline-none">
                </section>
</template>



<script>
export default {
        props:{
                AddTodo :Function, //Gelen props verisini burada yakala
        },
        setup(props){
                const newItem = (event) => {
                        props.AddTodo(event.target.value)
                        event.target.value=""

                }
                return { newItem}
        }
}
</script>