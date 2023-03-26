const lotKeys = {
    all: () => ['lots'],
    lists: () => [...lotKeys.all(), 'list'],
    list: filters => [...lotKeys.lists(), { ...filters }],
    details: () => [...lotKeys.all(), 'detail'],
    detail: id => [...lotKeys.details(), id],

    projectLists: () => [...lotKeys.all(), 'project'],
    projectList: (projectId, filters) => [
        ...lotKeys.projectLists(),
        projectId,
        { ...filters },
    ],
};

export default lotKeys;
