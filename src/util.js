export function Combine(base, modifiers = {}, inherited = '') {
  return Object.keys(modifiers).reduce((a, key) => {
    return a.concat(!modifiers[key] ? [] : [key])
  }, [base]).concat(inherited ? [inherited] : []).join(' ');
}