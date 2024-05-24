<template>
  <div class="w-screen  bg-gray-800 flex flex-row text-white items-start justify-center">

   <appSideBar  :invoices="invoiceList" :editInvoice="editInvoice"  />
   <invoicecontent :saveInvoce="saveInvoce"  :activeInvoice="state.activeInvoice"/>
  </div>
</template>


<script setup>
import appSideBar from "./components/appSideBar.vue"
import invoicecontent from "./components/invoicecontent.vue"
import {ref,reactive} from "vue"
const  state = reactive( {activeInvoice : null} )
const invoiceList = ref([
{
        id:new Date().getTime(),
        contact:{
                contact_name:"Omercan",
                email:"omercan@gmail",
                city:"Germany",
                country:"Berlin",
                zipcode:56,
        },
        items:[
                {
        
                }
        ]
}
]);




const saveInvoce = (invoice) => {       
        invoiceList.value.push(invoice)
       console.log(invoice)
}
const editInvoice = (invoice) => {
        
        state.activeInvoice = invoice
            setTimeout(()=>{
                state.activeInvoice = null;
        },1500)
}
</script>