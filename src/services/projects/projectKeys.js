const projectKeys = {
    all: () => ['projects'],
    lists: () => [...projectKeys.all(), 'list'],
    list: filters => [...projectKeys.lists(), { ...filters }],
    details: () => [...projectKeys.all(), 'detail'],
    detail: id => [...projectKeys.details(), id],
};

export default projectKeys;
