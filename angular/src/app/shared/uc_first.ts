export const uc_first = ((text: any) => {
    let first = text.slice(0,1).toUpperCase();
    let rest = text.slice(1);
    return first + rest;
});