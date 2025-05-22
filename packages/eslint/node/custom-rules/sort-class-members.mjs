export default [
  2,
  {
    groups: {
      getters: [{ kind: 'get', sort: 'alphabetical', type: 'method' }],
      methods: [{ sort: 'alphabetical', type: 'method' }],
      properties: [{ sort: 'alphabetical', type: 'property' }],
      setters: [{ kind: 'set', sort: 'alphabetical', type: 'method' }],
    },
    order: [
      '[properties]',
      '[getters]',
      '[setters]',
      'constructor',
      '[methods]',
    ],
  },
];
