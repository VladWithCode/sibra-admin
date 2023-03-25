const customerKeys = {
  all: () => ['customers'],
  lists: () => [...customerKeys.all(), 'list'],
  list: filters => [...customerKeys.lists(), { ...filters }],
  details: () => [...customerKeys.all(), 'detail'],
  detail: id => [...customerKeys.details(), id],
  files: () => [...customerKeys.all, 'file'],
  fileDetail: fileId => [...customerKeys.files(), file],
};

export default customerKeys;
