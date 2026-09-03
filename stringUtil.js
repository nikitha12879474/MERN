function upper(str) {
    return str.toUpperCase();
}

function lower(str) {
    return str.toLowerCase();
}

function reverse(str) {
    return str.split('').reverse().join('');
}

export default {
    upper,
    lower,
    reverse
};