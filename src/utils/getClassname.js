const getClassname = (...args) => args.filter(cn => Boolean(cn)).join(' ');

export default getClassname;
