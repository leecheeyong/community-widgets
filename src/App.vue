<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <KeepAlive>
        <Suspense timeout="0">
          <component :is="Component"></component>

          <template #fallback>
            <div class="flex justify-center items-center h-screen">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="animate-spin text-5xl text-primary-100"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                style="fill: rgba(0, 0, 0, 1)"
              >
                <path
                  d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
                ></path>
              </svg>
            </div>
          </template>
        </Suspense>
      </KeepAlive>
    </template>
  </RouterView>
</template>
