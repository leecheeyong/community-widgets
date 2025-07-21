<template>
  <div class="min-h-screen bg-white text-gray-900 overflow-x-hidden">
    <header
      class="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60"
        ></div>
        <div
          class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-60"
        ></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto">
        <div class="text-center mb-16 animate-fade-in mt-16">
          <img
            src="/icon.png"
            alt="Custom API Logo"
            class="mx-auto mb-6 w-24 h-24 object-contain"
          />
          <h1
            class="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight"
          >
            Custom API
            <span
              class="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Dashboard
            </span>
          </h1>

          <p
            class="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            A powerful widget-based dashboard app that lets you display data
            from any API endpoint.
          </p>

          <div
            class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button class="btn-primary group">
              <div class="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style="fill: rgba(0, 0, 0, 1)"
                >
                  <path
                    d="M18.344 8.71c-.707 0-1.279.572-1.279 1.278v4.53a1.278 1.278 0 1 0 2.558 0v-4.53c0-.706-.572-1.278-1.279-1.278zm-12.688 0c-.707 0-1.279.572-1.279 1.278v4.53a1.278 1.278 0 1 0 2.558 0v-4.53A1.277 1.277 0 0 0 5.656 8.71zm8.889-3.809.768-1.388a.343.343 0 0 0-.133-.47.344.344 0 0 0-.471.135l-.789 1.42c-.588-.235-1.236-.368-1.92-.368s-1.332.132-1.92.367l-.789-1.418a.344.344 0 0 0-.471-.135.345.345 0 0 0-.133.47l.768 1.388C8.072 5.69 7.148 7.099 7.148 8.71c0 .011 0 .021.002.034-.002.006-.002.013-.002.019v.001h9.703V8.71c.001-1.611-.923-3.019-2.306-3.809zM9.76 6.869a.346.346 0 1 1 .005-.693.346.346 0 0 1-.005.693zm4.48 0a.347.347 0 0 1 0-.692.346.346 0 0 1 0 .692zM7.148 16.12c0 .646.525 1.171 1.174 1.171h.586v2.401a1.279 1.279 0 0 0 2.558 0v-2.401h1.066v2.401c0 .707.572 1.278 1.277 1.278.709 0 1.281-.571 1.281-1.278v-2.401h.586c.648 0 1.174-.524 1.174-1.171V9.028H7.148v7.092z"
                  ></path>
                </svg>
                Download for Android
                <svg
                  class="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </div>
            </button>
            <button class="btn-secondary">
              <div class="flex items-center gap-2">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 13V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6m16 0v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6m16 0H4"
                  />
                </svg>
                View Community Widgets
              </div>
            </button>
          </div>
        </div>

        <div class="animate-slide-up">
          <div class="relative max-w-6xl mx-auto">
            <div class="flex justify-center">
              <div class="relative">
                <div
                  class="relative mx-auto w-80 h-[665px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl"
                >
                  <div
                    class="w-full h-full bg-black rounded-[2.3rem] overflow-hidden relative"
                  >
                    <div class="h-full">
                      <div
                        class="flex transition-transform duration-500 ease-in-out h-full"
                        :style="{
                          transform: `translateX(-${currentSlide * 100}%)`,
                        }"
                      >
                        <div class="w-full flex-shrink-0 h-full">
                          <img
                            src="/screenshots/screenshot-1.jpg"
                            alt="Dashboard Overview"
                            class="w-full h-full object-cover"
                          />
                        </div>

                        <div class="w-full flex-shrink-0 h-full">
                          <img
                            src="/screenshots/screenshot-2.jpg"
                            alt="API Testing"
                            class="w-full h-full object-cover"
                          />
                        </div>

                        <div class="w-full flex-shrink-0 h-full">
                          <img
                            src="/screenshots/screenshot-3.jpg"
                            alt="Analytics"
                            class="w-full h-full object-cover"
                          />
                        </div>

                        <div class="w-full flex-shrink-0 h-full">
                          <img
                            src="/screenshots/screenshot-4.jpg"
                            alt="Analytics"
                            class="w-full h-full object-cover"
                          />
                        </div>

                        <div class="w-full flex-shrink-0 h-full">
                          <img
                            src="/screenshots/screenshot-5.jpg"
                            alt="Analytics"
                            class="w-full h-full object-cover"
                          />
                        </div>

                        <div class="w-full flex-shrink-0 h-full">
                          <img
                            src="/screenshots/screenshot-6.jpg"
                            alt="Analytics"
                            class="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-center mt-8 gap-2">
              <button
                v-for="(slide, index) in 6"
                :key="index"
                @click="currentSlide = index"
                :class="[
                  'w-3 h-3 rounded-full transition-all duration-300',
                  currentSlide === index
                    ? 'bg-blue-600'
                    : 'bg-gray-300 hover:bg-gray-400',
                ]"
              ></button>
            </div>

            <button
              @click="previousSlide"
              class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-all duration-300 z-10 lg:left-8"
            >
              <svg
                class="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
            <button
              @click="nextSlide"
              class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-all duration-300 z-10 lg:right-8"
            >
              <svg
                class="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>

    <section class="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <h2
            class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
          >
            Make API Data Visualization Effortless
          </h2>
          <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Create custom widgets, install community widgets, and personalize
            your dashboard
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            class="feature-card flex flex-col items-center justify-center text-center"
          >
            <div
              class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6"
            >
              <svg
                class="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-gray-900 text-center">
              Create Custom Widgets
            </h3>
            <p class="text-gray-600 leading-relaxed text-center">
              Build widgets that connect to any API endpoint and display your
              data exactly how you want it.
            </p>
          </div>

          <div
            class="feature-card flex flex-col items-center justify-center text-center"
          >
            <div
              class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6"
            >
              <svg
                class="w-6 h-6 text-purple-600"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-2.764a14.67 14.67 0 0 0-1.792-6.243A8.013 8.013 0 0 1 19.931 11zM12.53 4.027c1.035 1.364 2.427 3.78 2.627 6.973H9.03c.139-2.596.994-5.028 2.451-6.974.172-.01.344-.026.519-.026.179 0 .354.016.53.027zm-3.842.7C7.704 6.618 7.136 8.762 7.03 11H4.069a8.013 8.013 0 0 1 4.619-6.273zM4.069 13h2.974c.136 2.379.665 4.478 1.556 6.23A8.01 8.01 0 0 1 4.069 13zm7.381 6.973C10.049 18.275 9.222 15.896 9.041 13h6.113c-.208 2.773-1.117 5.196-2.603 6.972-.182.012-.364.028-.551.028-.186 0-.367-.016-.55-.027zm4.011-.772c.955-1.794 1.538-3.901 1.691-6.201h2.778a8.005 8.005 0 0 1-4.469 6.201z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-gray-900 text-center">
              Community Widgets Library
            </h3>
            <p class="text-gray-600 leading-relaxed text-center">
              Discover and install widgets created by the community, or share
              your own creations.
            </p>
          </div>

          <div
            class="feature-card flex flex-col items-center justify-center text-center"
          >
            <div
              class="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-6"
            >
              <svg
                class="w-6 h-6 text-green-600"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
                ></path>
                <path
                  d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-gray-900 text-center">
              Real-time Updates
            </h3>
            <p class="text-gray-600 leading-relaxed text-center">
              Your widgets automatically refresh to show the latest data from
              your APIs in real-time.
            </p>
          </div>
        </div>
      </div>
    </section>

    <footer class="py-8 text-center text-gray-500 text-sm">
      <p>
        Made with <span class="text-red-500">❤️</span> by
        <a
          href="https://github.com/leecheeyong"
          target="_blank"
          class="text-gray-700 hover:underline"
        >
          Chee Yong Lee
        </a>
      </p>
      <p class="mt-1">
        Project available as open source under the terms of
        <a
          href="https://github.com/leecheeyong/community-widgets/blob/main/LICENSE"
          target="_blank"
          class="text-gray-700 hover:underline"
          >MIT License</a
        >
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const currentSlide = ref(0);
let autoSlideInterval: number | null = null;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % 6;
};

const previousSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? 2 : currentSlide.value - 1;
};

const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 5000);
};

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
  }
};

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  stopAutoSlide();
});
</script>
