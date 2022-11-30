//Ref: https://github.com/w3c/IntersectionObserver/issues/296

const checkIntersectionObserverCompatibility = () => {
    return 'IntersectionObserver' in window ||
        'IntersectionObserverEntry' in window ||
        'intersectionRatio' in window.IntersectionObserverEntry.prototype;
}

export default checkIntersectionObserverCompatibility;