const display = (result) => {
    console.log(result);
}

export const add = (a, b) => {
    display(a + b);
}

export const deduct = (a, b) => {
    display(a - b);
}

export const divide = (a, b) => {
    display(a / b);
}

export const multiply = (a, b) => {
    display(a * b);
}

// export { add, deduct, divide, multiply as sum }