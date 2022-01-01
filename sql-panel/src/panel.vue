<template>
  <div class="text" :class="{ 'has-header': showHeader }">
    <v-table
      :headers="headers"
      :items="items"
    />
  </div>
</template>

<script>
import { useApi } from "@directus/extensions-sdk";
export default {
  props: {
    id: String,
    showHeader: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "",
    },
  },

  data(){
    return {
      headers: [],
      items: [],
    };
  },

  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const api = useApi();
      const { data } = await api(`sql-panel-api/${this.id}`);
      this.headers = data.headers;
      this.items = data.items;
    },
  },
};
</script>

<style scoped>
.text {
  padding: 12px;
}

.text.has-header {
  padding: 0 12px;
}
</style>
