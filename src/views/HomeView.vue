<template>
  <h2 class="text-center text-3xl">{{ isEdit ? 'Edit' : 'Register' }}</h2>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-md">
      <form @submit.prevent="event => event.preventDefault()">
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

              <div class="sm:col-span-6">
                <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                <div class="mt-2">
                  <div class="w-full flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300">
                    <input v-model="userInfo.name" type="text" name="username" id="username"
                      @blur="() => userInfo.name === '' ? isName = true : isName = false"
                      class="block flex-1 border-0 bg-transparent py-1.5 px-2 text-base text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      :class="isName ? 'border border-red-500 border-solid rounded-md focus-within:ring-red-500' : null"
                      placeholder="Smith" />
                  </div>
                  <p v-if="isName" class="text-red-500 text-sm mt-1">
                    Please enter a valid name
                  </p>
                </div>
              </div>

              <div class="sm:col-span-6">
                <label for="surname" class="block text-sm font-medium leading-6 text-gray-900">Surname</label>
                <div class="mt-2">
                  <div class="w-full flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300">
                    <input v-model="userInfo.surName" type="text" name="surname" id="surname"
                      @blur="() => userInfo.surName === '' ? isSurName = true : isSurName = false"
                      class="block flex-1 border-0 bg-transparent py-1.5 px-2 text-base text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      :class="isSurName ? 'border border-red-500 border-solid rounded-md focus-within:ring-red-500' : null"
                      placeholder="Jane" />
                  </div>
                  <p v-if="isSurName" class="text-red-500 text-sm mt-1">
                    Please enter a valid surname
                  </p>
                </div>
              </div>

              <div class="sm:col-span-6">
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                <div class="mt-2">
                  <div class="w-full flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300">
                    <input v-model="userInfo.email" type="email" name="email" id="email" @blur="handleBlurEmail"
                      class="block flex-1 border-0 bg-transparent py-1.5 px-2 text-base text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      :class="isEmail ? 'border border-red-500 border-solid rounded-md focus-within:ring-red-500' : null"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder=" janesmith@gmail.com" />
                  </div>
                  <p v-if="isEmail" class="text-red-500 text-sm mt-1">
                    Please enter a valid email
                  </p>
                </div>
              </div>


              <div class="sm:col-span-6">
                <label for="vehicle" class="block text-sm font-medium leading-6 text-gray-900">Vehicle Type</label>
                <div class="mt-2">
                  <div class="w-full flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300">
                    <input v-model="userInfo.vehicleType" type="text" name="vehicle" id="vehicle"
                      @blur="() => userInfo.vehicleType === '' ? isVehicle = true : isVehicle = false"
                      class="block flex-1 border-0 bg-transparent py-1.5 px-2 text-base text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      :class="isVehicle ? 'border border-red-500 border-solid rounded-md focus-within:ring-red-500' : null" />
                  </div>
                  <p v-if="isVehicle" class="text-red-500 text-sm mt-1">
                    Please enter a valid Vehicle Type
                  </p>
                </div>
              </div>

              <div class="sm:col-span-6">
                <label for="basefare" class="block text-sm font-medium leading-6 text-gray-900">
                  Base Fare Price
                </label>
                <div class="mt-2">
                  <div class="w-full flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300">
                    <input v-model="userInfo.baseFare" type="number" name="basefare" id="basefare"
                      @blur="() => userInfo.baseFare === '' ? isFare = true : isFare = false"
                      class="block flex-1 border-0 bg-transparent py-1.5 px-2 text-base text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      :class="isFare ? 'border border-red-500 border-solid rounded-md' : null" />
                  </div>
                  <p v-if="isFare" class="text-red-500 text-sm mt-1">
                    Please enter a valid Base Fare Price
                  </p>
                </div>
              </div>

              <div class="sm:col-span-6">
                <label for="distance" class="block text-sm font-medium leading-6 text-gray-900">
                  Base Fare Distance
                </label>
                <div class="mt-2">
                  <div class="w-full flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300">
                    <input v-model="userInfo.baseDistance" type="number" name="distance" id="distance"
                      @blur="() => userInfo.baseDistance === '' ? isDistance = true : isDistance = false"
                      class="block flex-1 border-0 bg-transparent py-1.5 px-2 text-base text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      :class="isDistance ? 'border border-red-500 border-solid rounded-md ' : null" />
                  </div>
                  <p v-if="isDistance" class="text-red-500 text-sm mt-1">
                    Please enter a valid Base Fare Distance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button class="text-sm font-semibold leading-6 text-gray-900" @click="handleCancel">
            Cancel
          </button>
          <button @click="handleSubmit" :disabled="isError"
            class="rounded-md cursor-pointer bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            :class="isError ? 'cursor-default bg-indigo-400 hover:bg-indigo-400' : null">
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { IUser } from '@/interface/user';
import { useRoute, useRouter } from 'vue-router';
import { v4 as uuidv4 } from 'uuid';

const router = useRouter();
const route = useRoute();

const isEdit = computed<boolean>(() => {
  return route.name === 'edit-user' ? true : false
})

const dataCsv = ref([])
const fileCsv = localStorage.getItem('fileCsv');
if (fileCsv) {
  dataCsv.value = JSON.parse(fileCsv);
}

const userInfo = ref<IUser>({
  name: '',
  surName: '',
  email: '',
  vehicleType: '',
  baseFare: '',
  baseDistance: ''
})

const isName = ref<boolean>(false);
const isSurName = ref<boolean>(false);
const isEmail = ref<boolean>(false);
const isVehicle = ref<boolean>(false);
const isFare = ref<boolean>(false);
const isDistance = ref<boolean>(false);

const isError = ref<boolean>(true);

const userInfoEdit = ref<IUser>({
  name: '',
  surName: '',
  email: '',
  vehicleType: '',
  baseFare: '',
  baseDistance: ''
})

if (isEdit.value) {
  const filesDataExists = !!localStorage.getItem('filesData');
  const storedData = localStorage.getItem('filesData');
  if (filesDataExists && storedData) {
    userInfoEdit.value = JSON.parse(storedData).find((item: IUser) => item.id === route.params.id)
  }
  userInfo.value = {
    name: userInfoEdit.value.name,
    surName: userInfoEdit.value.surName,
    email: userInfoEdit.value.email,
    vehicleType: userInfoEdit.value.vehicleType,
    baseFare: userInfoEdit.value.baseFare,
    baseDistance: userInfoEdit.value.baseDistance
  }
}

const listUserInfo = ref<IUser[]>([])
// find index with email

const handleCancel = () => {
  if (isEdit.value) {
    resetForm();
  }
  router.push({ name: 'home' });
}

const updateData = (userEdit: IUser) => {
  const index = listUserInfo.value.findIndex(item => item.id === userEdit.id);
  if (index !== -1) {
    listUserInfo.value.splice(index, 1, userEdit);
  }
}

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};


const handleBlurEmail = () => {
  if (!validateEmail(userInfo.value.email) || userInfo.value.email === '') {
    isEmail.value = true;
  } else {
    isEmail.value = false;
  }
}

const handleSubmit = () => {
  if (isError.value) {
    return;
  }

  const filesDataExists = !!localStorage.getItem('filesData');
  const storedData = localStorage.getItem('filesData');
  if (filesDataExists && storedData) {
    listUserInfo.value = JSON.parse(storedData)
  }

  if (!isEdit.value) {
    // tinh fare tuong ung voi user vua nhap
    listUserInfo.value.push({
      id: uuidv4(),
      name: userInfo.value.name,
      surName: userInfo.value.surName,
      email: userInfo.value.email,
      vehicleType: userInfo.value.vehicleType,
      baseFare: userInfo.value.baseFare,
      baseDistance: userInfo.value.baseDistance,
    })
  } else {
    updateData({
      id: route.params.id.toString(),
      name: userInfo.value.name,
      surName: userInfo.value.surName,
      email: userInfo.value.email,
      vehicleType: userInfo.value.vehicleType,
      baseFare: userInfo.value.baseFare,
      baseDistance: userInfo.value.baseDistance,
    })
  }

  // luu vao local storage
  const filesJSONString = JSON.stringify(listUserInfo.value);
  localStorage.setItem('filesData', filesJSONString);
  router.push({ name: 'home' })
}

const resetForm = () => {
  userInfo.value = {
    name: '',
    surName: '',
    email: '',
    vehicleType: '',
    baseFare: '',
    baseDistance: ''
  }
}

watch(() => userInfo.value, () => {
  !isName.value && !isSurName.value && !isEmail.value && !isVehicle.value && !isFare.value && !isDistance.value ? isError.value = false : isError.value = true
}, { deep: true })

</script>

<style lang="scss" scoped></style>

