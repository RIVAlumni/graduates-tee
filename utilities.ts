namespace Util {
  export function formatInternational(tel: string) {
    if (!tel) return '';
    return `+65 ${tel.slice(0, 4)} ${tel.slice(4, 8)}`;
  }
}
