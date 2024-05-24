<template>
         <div>
      <heading  title="Fatura Bilgileri"  />

        <label for="client_name" class="flex flex-col text-gray-400 mb-2">
          <small class="mb-1">Müşteri Adı</small>
          <input autocomplete="off" v-model="contact.contact_name" id="client_name" class="input" type="text" />
        </label>
        <label for="client_email" class="flex flex-col text-gray-400 mb-2">
          <small class="mb-1">E-posta</small>
          <input autocomplete="off" id="client_email" v-model="contact.email" class="input" type="email" />
        </label>

        <div class="grid grid-cols-3 gap-5">
          <label for="city" class="flex flex-col text-gray-400 mb-2">
            <small class="mb-1">Şehir</small>
            <input autocomplete="off" id="city"  v-model="contact.city" class="input" type="text" />
          </label>
          <label for="zip_code" class="flex flex-col text-gray-400 mb-2">
            <small class="mb-1">Posta Kodu</small>
            <input autocomplete="off" id="zip_code"  v-model="contact.zipcode" class="input" type="text" />
          </label>
          <label for="country" class="flex flex-col text-gray-400 mb-2">
            <small class="mb-1">Ülke</small>
            <input autocomplete="off" id="country" v-model="contact.country" class="input" type="text" />
          </label>
        </div>
      </div>
</template>

<script setup>
        defineProps({contact:Object}) //gelen veriyi yakala
</script>