<template>
  <h2 class="text-center text-3xl">{{ isEdit ? 'Edit' : 'Register' }}</h2>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-md">
      <form>
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-6">
                <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                <div class="mt-2">
                  <div
                    class="w-full flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                    <input v-model="userInfo.name" type="text" name="username" id="username"
                      class="block flex-1 border-0 bg-transparent py-1.5 px-2 text-base text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Smith" />
                  </div>
                </div>
              </div>

              <div class="sm:col-span-6">
                <label for="surname" class="block text-sm font-medium leading-6 text-gray-900">Surname</label>
                <div class="mt-2">
                  <div
                    class="w-full flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                    <input v-model="userInfo.surName" type="text" name="surname" id="surname"
                      class="block flex-1 border-0 bg-transparent py-1.5 px-2 text-base text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Jane" />
                  </div>
                </div>
              </div>

              <div class="sm:col-span-6">
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                <div class="mt-2">
                  <div
                    class="w-full flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                    <input v-model="userInfo.email" type="email" name="email" id="email" :disabled="isEdit"
                      :class="isEdit ? 'bg-gray-300 rounded-md' : null"
                      class="block flex-1 border-0 bg-transparent py-1.5 px-2 text-base text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="janesmith@gmail.com" />
                  </div>
                </div>
              </div>

              <div class="sm:col-span-6">
                <label for="vehicle" class="block text-sm font-medium leading-6 text-gray-900">Vehicle Type</label>
                <div class="mt-2">
                  <div
                    class="w-full flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                    <input v-model="userInfo.vehicleType" type="text" name="vehicle" id="vehicle"
                      class="block flex-1 border-0 bg-transparent py-1.5 px-2 text-base text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
                  </div>
                </div>
              </div>

              <div class="sm:col-span-6">
                <label for="basefare" class="block text-sm font-medium leading-6 text-gray-900">Base Fare
                  Price</label>
                <div class="mt-2">
                  <div
                    class="w-full flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                    <input v-model="userInfo.baseFare" type="number" name="basefare" id="basefare"
                      class="block flex-1 border-0 bg-transparent py-1.5 px-2 text-base text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
                  </div>
                </div>
              </div>

              <div class="sm:col-span-6">
                <label for="distance" class="block text-sm font-medium leading-6 text-gray-900">
                  Base Fare Distance
                </label>
                <div class="mt-2">
                  <div
                    class="w-full flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                    <input v-model="userInfo.baseDistance" type="number" name="distance" id="distance"
                      class="block flex-1 border-0 bg-transparent py-1.5 px-2 text-base text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" class="text-sm font-semibold leading-6 text-gray-900"
            @click="handleCancel">Cancel</button>
          <button @click="handleSubmit" type="button" :disabled="!isDisable"
            :class="!isDisable ? 'bg-gray-400 hover:bg-gray-400 focus-visible:outline-none cursor-default' : null"
            class="rounded-md cursor-pointer bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import type { IUser } from '@/interface/user';
import { csvInfo } from '@/data/csv';
import { priceFare } from '@/modules/utilities';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const isEdit = computed<boolean>(() => {
  return route.name === 'edit-user' ? true : false
})

const isDisable = computed<boolean>(() => {
  return userInfo.value.baseDistance && userInfo.value.baseFare
    && userInfo.value.name && userInfo.value.surName
    && userInfo.value.vehicleType && userInfo.value.email
    ? true : false
})

const userInfo = ref<IUser>({
  name: '',
  surName: '',
  email: '',
  vehicleType: '',
  baseFare: 0,
  baseDistance: 0
})
const userInfoEdit = ref<IUser>({
  name: '',
  surName: '',
  email: '',
  vehicleType: '',
  baseFare: 0,
  baseDistance: 0
})

if (isEdit.value) {
  userInfoEdit.value = JSON.parse(`${route.query.user}`)
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

const replaceObjectByKey = (userEdit: IUser) => {
  const index = listUserInfo.value.findIndex(item => item.email === userEdit.email);
  if (index !== -1) {
    listUserInfo.value.splice(index, 1, userEdit);
  }
}

const handleCancel = () => {
  if (isEdit.value) {
    resetForm();
    router.push({ name: 'home' });
  }
}

const handleSubmit = () => {
  // check trong local storage co listUser thi gan lai listUser
  const filesDataExists = !!localStorage.getItem('filesData');
  const storedData = localStorage.getItem('filesData');
  if (filesDataExists && storedData) {
    listUserInfo.value = JSON.parse(storedData)
  }
  if (!isEdit.value) {
    // tinh fare tuong ung voi user vua nhap
    priceFare(csvInfo.distanceTravel, csvInfo.travelUnit, csvInfo.costPerDistance, userInfo.value.baseDistance, userInfo.value.baseFare);
    listUserInfo.value.push({
      name: userInfo.value.name,
      surName: userInfo.value.surName,
      email: userInfo.value.email,
      vehicleType: userInfo.value.vehicleType,
      baseFare: userInfo.value.baseFare,
      baseDistance: userInfo.value.baseDistance,
      fare: priceFare(csvInfo.distanceTravel, csvInfo.travelUnit, csvInfo.costPerDistance, userInfo.value.baseDistance, userInfo.value.baseFare)
    })
  } else {
    replaceObjectByKey({
      name: userInfo.value.name,
      surName: userInfo.value.surName,
      email: userInfo.value.email,
      vehicleType: userInfo.value.vehicleType,
      baseFare: userInfo.value.baseFare,
      baseDistance: userInfo.value.baseDistance,
      fare: priceFare(csvInfo.distanceTravel, csvInfo.travelUnit, csvInfo.costPerDistance, userInfo.value.baseDistance, userInfo.value.baseFare)
    })
  }
  // luu vao local storage
  const filesJSONString = JSON.stringify(listUserInfo.value);
  localStorage.setItem('filesData', filesJSONString);

  router.push({ name: 'list-user' })
}

const resetForm = () => {
  userInfo.value = {
    name: '',
    surName: '',
    email: '',
    vehicleType: '',
    baseFare: 0,
    baseDistance: 0
  }
}

</script>

<style lang="scss" scoped></style>

