import { useApi } from '@directus/extensions-sdk';
import { resolveComponent, openBlock, createElementBlock, normalizeClass, createVNode } from 'vue';

var script = {
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

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_table = resolveComponent("v-table");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(["text", { 'has-header': $props.showHeader }])
  }, [
    createVNode(_component_v_table, {
      headers: $data.headers,
      items: $data.items
    }, null, 8 /* PROPS */, ["headers", "items"])
  ], 2 /* CLASS */))
}

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = "\n.text[data-v-0129a3fb] {\n  padding: 12px;\n}\n.text.has-header[data-v-0129a3fb] {\n  padding: 0 12px;\n}\n";
n(css,{});

script.render = render;
script.__scopeId = "data-v-0129a3fb";
script.__file = "src/panel.vue";

var index = {
	id: 'sql-panel',
	name: 'SQL panel',
	icon: 'box',
	description: 'Show result of a stored SQL query as a table',
	component: script,
	options: [
		{
			field: 'sql',
			name: 'SQL query',
			type: 'string',
			meta: {
				interface: 'input-multiline',
				width: 'full',
			},
		},
	],
	minWidth: 12,
	minHeight: 8,
};

export { index as default };
