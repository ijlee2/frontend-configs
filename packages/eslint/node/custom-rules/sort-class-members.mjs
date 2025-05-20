export default [
  2,
  {
    groups: {
      getters: [{ kind: 'get', sort: 'alphabetical' }],
      methods: [{ sort: 'alphabetical', type: 'method' }],
      properties: [{ sort: 'alphabetical', type: 'property' }],
      setters: [{ kind: 'set', sort: 'alphabetical' }],
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
