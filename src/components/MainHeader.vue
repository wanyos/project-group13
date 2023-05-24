<template>
<header aria-label="Site Header" class="shadow-sm">
  <div class="mx-auto max-w-screen-xl p-4">
    <div class="flex items-center justify-between gap-4 lg:gap-10">
      <div class="flex lg:w-0 lg:flex-1">
        <a href="#">
          <span class="sr-only">--WebAgenda--</span>
          <span class="inline-block h-10 w-32 rounded-lg bg-gray-200"></span>
        </a>
      </div>

      <nav
        aria-label="Site Nav"
        class="hidden gap-8 text-sm font-medium md:flex"
      >
      <RouterLink class="p-2 text-xl" to="/">Home</RouterLink>
      <RouterLink class="p-2 text-xl" to="/calendar">Calendar</RouterLink>
      <RouterLink class="p-2 text-xl" to="/mycalendar">MyCalendar</RouterLink>
      <RouterLink class="p-2 text-xl" to="/statistics">Statistics</RouterLink>
      <RouterLink class="p-2 text-xl" to="/settings">Settings</RouterLink>
      </nav>

      <div class="hidden flex-1 items-center justify-end gap-4 sm:flex">
        <button @click="login" class="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-500">Log In</button>
        <button class="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white">Sign up</button>
      </div>

      <div class="lg:hidden">
        <button class="rounded-lg bg-gray-100 p-2 text-gray-600" type="button">
          <span class="sr-only">Open menu</span>
          <svg
            aria-hidden="true"
            class="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewbox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { onMounted } from "vue"
import { googleOneTap } from "vue3-google-login"
import { googleTokenLogin } from "vue3-google-login"


const login = () => {
  googleTokenLogin().then((response) => {
    ///console.log("Handle the response", response)
    return response;
  })
}


// onMounted(() => {
//     googleOneTap({ autoLogin: true })
//     .then((response) => {
//       //console.log("Handle the response", response)
//     })
//     .catch((error) => {
//       //console.log("Handle the error", error)
//     })
// })

</script>

<style lang="css" scoped></style>
