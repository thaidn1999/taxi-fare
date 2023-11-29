<template>
  <div class="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl text-center mt-8">List User Infomation</h2>
    <div class="flex">
      <input type="file" ref="inputFileCsv" class="hidden" accept=".csv" @change="handleFileChange" />
      <button type="button" class="rounded-md bg-blue-500 hover:bg-blue-400 font-semibold text-white py-2 px-4 my-6"
        @click="handleInput">
        Add file CSV
      </button>
      <p class="mt-7 mx-2" v-if="selectedFile">Selected file: {{ selectedFile }}</p>
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Surname
            </th>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              Vehicle Type
            </th>
            <th scope="col" class="px-6 py-3">
              Base Fare Price
            </th>
            <th scope="col" class="px-6 py-3">
              Base Fare Distance
            </th>
            <th scope="col" class="px-6 py-3">
              Fare
            </th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Delete</span>
            </th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(infoUser, index) in filesData" :key="index" class="bg-white border-b  hover:bg-gray-50 ">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
              {{ infoUser.name }}
            </th>
            <td class="px-6 py-4">
              {{ infoUser.surName }}
            </td>
            <td class="px-6 py-4">
              {{ infoUser.email }}
            </td>
            <td class="px-6 py-4">
              {{ infoUser.vehicleType }}
            </td>
            <td class="px-6 py-4">
              {{ infoUser.baseFare }}
            </td>
            <td class="px-6 py-4">
              {{ infoUser.baseDistance }}
            </td>
            <td class="px-6 py-4">
              {{ infoUser.fare }}
            </td>
            <td class="px-6 py-4 text-right">
              <p @click="handleDelete(infoUser.id)" class="font-medium text-red-600 hover:cursor-pointer">Delete</p>
            </td>
            <td class="px-6 py-4 text-right">
              <p @click=handleEdit(infoUser.id) class="font-medium text-blue-600 hover:cursor-pointer">Edit
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex justify-end">
      <button type="button" class="rounded-md font-semibold text-white py-2 px-4 my-6"
        :class="!isDisable ? 'bg-gray-500' : 'bg-green-500 hover:bg-green-400'" :disabled="!isDisable"
        @click="handleAddUser">Add user</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IUser } from '@/interface/user';
import router from '@/router';
import { ref } from 'vue';
import Papa from 'papaparse'

const csvData = ref([])
const selectedFile = ref()

const inputFileCsv = ref();

const storedData = localStorage.getItem('filesData');
const filesData = ref<IUser[]>([])
const isDisable = ref<boolean>(false)
if (storedData) {
  filesData.value = JSON.parse(storedData);
}

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file: File | null = (target.files as FileList)[0];
  selectedFile.value = file.name
  if (file) {
    Papa.parse(file, {
      complete: function (results: any) {
        csvData.value = results.data;
        const filesJSONString = JSON.stringify(csvData.value);
        localStorage.setItem('fileCsv', filesJSONString);
        isDisable.value = true
      }
    });
  }
};

const handleInput = () => {
  inputFileCsv.value.click();
}

const handleEdit = (idUser: string | undefined) => {
  if (idUser) {
    // Navigate to the route '/user' and pass the object as query parameters
    router.push({ name: 'edit-user', params: { id: idUser } })
  }
}
const handleDelete = (id: string | undefined) => {
  const index = filesData.value.findIndex(item => item.id === id);
  if (index !== -1) {
    filesData.value.splice(index, 1);
  }
  const filesJSONString = JSON.stringify(filesData.value);
  localStorage.setItem('filesData', filesJSONString);
}
const handleAddUser = () => {
  router.push({ name: 'add-user' })
}
// watch(() => csvData.value, () => {
//   csvData.value.length > 0 ? isDisable.value = false : isDisable.value = true
// })
</script>

<style lang="scss" scoped></style>
