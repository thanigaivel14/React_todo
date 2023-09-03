const Local = (items) => {
    localStorage.setItem("Todo",JSON.stringify(items));
}

export default Local;
