const projectKeys = {
  all: () => ['projects'],
  lists: () => [...projectKeys.all(), 'list'],
  list: (filters) => [...projectKeys.lists(), { ...filters }],
  details: () => [...projectKeys.all(), 'details'],
  detail: (id) => [...projectKeys.details(), id],
};

export default projectKeys;
