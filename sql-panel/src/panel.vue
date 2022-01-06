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
    columnWidth: {
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
      let columnWidth = this.columnWidth.split(',').map( parseFloat );
      data.headers.forEach(function(v,i){
        v.width = columnWidth[i];
      });
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
