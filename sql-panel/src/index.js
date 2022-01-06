import PanelComponent from './panel.vue';

export default {
	id: 'sql-panel',
	name: 'SQL panel',
	icon: 'box',
	description: 'Show result of a stored SQL query as a table',
	component: PanelComponent,
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
		{
			field: 'columnWidth',
			name: 'Coma separated list of column widths',
			type: 'string',
			meta: {
				interface: 'input',
				width: 'full',
			},
		},
	],
	minWidth: 12,
	minHeight: 8,
};
