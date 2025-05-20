export default [
  2,
  {
    groups: {
      'ember-actions': [
        {
          groupByDecorator: 'action',
          sort: 'alphabetical',
          type: 'method',
        },
      ],
      'ember-data-decorators': [
        {
          groupByDecorator: 'belongsTo',
          sort: 'alphabetical',
          type: 'property',
        },
        {
          groupByDecorator: 'hasMany',
          sort: 'alphabetical',
          type: 'property',
        },
        {
          groupByDecorator: 'attr',
          sort: 'alphabetical',
          type: 'property',
        },
      ],
      'ember-controller-model': [{ name: 'model', type: 'property' }],
      'ember-controller-queryParams': [
        { name: 'queryParams', type: 'property' },
      ],
      'ember-services': [
        {
          groupByDecorator: 'service',
          sort: 'alphabetical',
          type: 'property',
        },
      ],
      'ember-tracked-properties': [
        {
          groupByDecorator: 'tracked',
          sort: 'alphabetical',
          type: 'property',
        },
      ],
      getters: [{ kind: 'get', sort: 'alphabetical' }],
      methods: [{ sort: 'alphabetical', type: 'method' }],
      properties: [{ sort: 'alphabetical', type: 'property' }],
      setters: [{ kind: 'set', sort: 'alphabetical' }],
    },
    order: [
      '[ember-data-decorators]',
      '[ember-controller-model]',
      '[ember-controller-queryParams]',
      '[ember-services]',
      '[ember-tracked-properties]',
      '[properties]',
      '[getters]',
      '[setters]',
      'constructor',
      '[methods]',
      '[ember-actions]',
    ],
  },
];
