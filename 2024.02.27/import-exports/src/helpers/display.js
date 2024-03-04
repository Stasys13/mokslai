export const formatString = (string) => {
    return `<h1>${string}</h1>`;
}

export const displayString = (string) => {
    document.querySelector('.result').innerHTML = formatString(string);
}

// export { formatString, displayString }

export default displayString;