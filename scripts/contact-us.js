const createRE = (re) => {
    sessionStorage.setItem("re", re);
}
const clearRE = () => {
    sessionStorage.removeItem("re");
}
const getRE = () => {
    return sessionStorage.getItem("re");
}