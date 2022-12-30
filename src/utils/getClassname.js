export default function getClassname(...args) {
  return args.filter(Boolean).join(' ');
}
