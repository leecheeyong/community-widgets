<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div
          class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
        >
          <div
            class="flex flex-col sm:flex-row items-center sm:justify-start gap-2 sm:gap-4 text-center sm:text-left"
          >
            <router-link to="/">
              <div
                class="flex flex-col items-center sm:flex-row sm:items-center gap-2 sm:gap-4"
              >
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
                    Widgets
                  </h1>
                  <p class="text-gray-500">
                    Explore widgets created by the community
                  </p>
                </div>
              </div>
            </router-link>
          </div>
          <a
            href="https://github.com/leecheeyong/community-widgets"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-2 text-gray-400 hover:text-green-600 transition-colors text-base font-medium border border-gray-200 rounded-lg px-4 py-2"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.089 2.91.833.091-.647.35-1.089.636-1.341-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 7.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.025 2.747-1.025.546 1.378.202 2.396.099 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"
              />
            </svg>
            Add Your Widget
          </a>
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
            <a
              :href="
                'https://github.com/leecheeyong/community-widgets/blob/main/widgets/' +
                widget.id +
                '.json'
              "
              target="_blank"
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
            </a>
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
  return value !== undefined && value !== null ? value : field.type;
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
