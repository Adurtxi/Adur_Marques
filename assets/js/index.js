function querySelector(id) {
    return document.querySelector(id);
}

function isInViewport (elem, className) {
    const distance = elem.getBoundingClientRect();

    if (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom - document.documentElement.clientHeight / 2 <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <=
            (window.innerWidth || document.documentElement.clientWidth)
    ) {
        elem.classList.add(className);
    }
};

const elem1 = querySelector('#slist-1');
const elem2 = querySelector('#slist-2');

window.addEventListener('scroll', function (_) {
    isInViewport(elem1, 'u-move-from-left');
    isInViewport(elem2 , 'u-move-from-right');
});