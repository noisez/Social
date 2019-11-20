export const required = (value) => {
    if (value) return undefined;
    return 'Field is required';
};

// export const maxLenght30 = (value) => {
//     if (value && value.lenght > 30) {
//         return 'Max lenght is 30 symbols';
//     }
//     return undefined;
// };

export const maxLenghtCreator = (maxLenght) => (value) => {
    if (value.length > maxLenght) {
        return `Max lenght is ${maxLenght} symbols`
    }
    return undefined;
};