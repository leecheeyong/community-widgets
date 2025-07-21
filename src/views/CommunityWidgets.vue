<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div class="flex items-center justify-center sm:justify-start gap-4 text-center sm:text-left">
            <img
              src="/icon.png"
              alt="Logo"
              loading="lazy"
              class="w-10 h-10"
            />
            <div>
              <h1
                class="text-3xl font-bold text-gray-900 mb-1 flex items-center gap-2"
              >
                Community Widgets
              </h1>
              <p class="text-gray-500">
                Explore widgets created by the community
              </p>
            </div>
          </div>
          <router-link
            to="/"
            class="flex items-center gap-2 text-gray-400 hover:text-blue-600 transition-colors text-base font-medium"
          >
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
            Back to Home
          </router-link>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-8">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
      >
        <div
          v-for="widget in widgets"
          :key="widget.id"
          class="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-200 flex flex-col min-h-[320px]"
        >
          <div
            class="h-32 p-5 flex flex-col justify-center items-center"
            :style="{
              backgroundColor: widget.backgroundColor,
              color: widget.textColor,
            }"
          >
            <div class="text-base font-semibold opacity-90 mb-2 text-center">
              {{ widget.title }}
            </div>
            <div class="space-y-1 w-full">
              <div
                v-for="field in widget.fields.slice(0, 2)"
                :key="field.key"
                class="text-xs opacity-80 text-center"
              >
                {{ field.label }}: {{ getFieldValue(widget, field) }}
              </div>
            </div>
          </div>

          <div class="p-5 flex-1 flex flex-col justify-between">
            <div class="mb-3">
              <h3
                class="font-semibold text-gray-900 text-base mb-1 text-center sm:text-left"
              >
                {{ widget.title }}
              </h3>
              <p
                class="text-gray-500 text-xs line-clamp-2 text-center sm:text-left"
              >
                {{ widget.description }}
              </p>
            </div>
            <div
              class="flex flex-wrap items-center justify-between text-xs text-gray-400 mb-3 gap-2"
            >
              <div class="flex items-center gap-1">
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                {{ widget.author }}
              </div>
              <span
                class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-600"
              >
                {{ widget.category }}
              </span>
              <div class="flex items-center gap-1">
                <svg
                  class="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                {{ widget.refreshInterval / 1000 }}s
              </div>
            </div>
            <div class="pt-3 border-t border-gray-100">
              <div class="text-xs text-gray-400 mb-1">API Endpoint:</div>
              <code
                class="text-xs bg-gray-50 px-2 py-1 rounded text-gray-700 break-all"
                >{{ widget.apiUrl }}</code
              >
            </div>
          </div>
        </div>
      </div>

      <div v-if="widgets.length === 0" class="text-center py-16">
        <svg
          class="w-16 h-16 text-gray-200 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          ></path>
        </svg>
        <h3 class="text-lg font-medium text-gray-900 mb-2">No widgets found</h3>
        <p class="text-gray-500">Check back later for new community widgets.</p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const widgets = ref([]);

onMounted(async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/leecheeyong/community-widgets/refs/heads/main/widgets.json",
    );
    widgets.value = await response.json();
  } catch {
    widgets.value = [];
  }
});

const getFieldValue = (widget, field) => {
  const widgetObj = Array.isArray(widgets.value)
    ? widgets.value.find((w) => w.id === widget.id)
    : null;
  if (!widgetObj) return field.type === "number" ? "0" : "Loading...";

  let data = widgetObj;
  if (widgetObj.data) data = widgetObj.data;

  const keys = field.key.split(".");
  let value = data;
  for (const key of keys) {
    value = value?.[key];
  }
  return value !== undefined && value !== null
    ? value
    : field.type
};
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-clamp: 2;
}
</style>
