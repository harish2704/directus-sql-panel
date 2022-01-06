<template>
  <div class="sql-panel-container" :class="{ 'has-header': showHeader }">
      <v-table
        :showResize="true"
        v-model:headers="headers"
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
.sql-panel-container {
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: auto;
}

</style>
