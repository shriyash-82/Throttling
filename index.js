const container = document.querySelector('.container');
// throttle uses one boolean value and return a function.
const throttle = (callback,delay) => {
    let iswaiting = false;
    return (...args) => {
        if( iswaiting ) return;
        callback(...args);
        iswaiting = true;
        setTimeout ( ()=> {
            iswaiting = false;
        },delay)
    }
}
const handleScroll = () => {
    console.log("scrolled");
}
const throttlefunction = throttle(handleScroll,5000)
container.addEventListener('scroll',throttlefunction);