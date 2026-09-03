export function first(arr) {
    return arr[0];
}

export function last(arr) {
    return arr[arr.length - 1];
}

export function sum(arr) {
    return arr.reduce((total, n) => total + n, 0);
}