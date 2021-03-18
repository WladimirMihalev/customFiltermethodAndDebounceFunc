Array.prototype.myFilter = function (callback, context) {
    let filtered = new Array();

    for (let i = 0; i < this.length; i++) {
        if (context) {
            if (callback.call(context, this[i], i, this)) {
                filtered.push(this[i])
            }
        }
        else {
            if (callback(this[i], i, this)) {
                filtered.push(this[i])
            }
        }

    }
    return filtered
}

 

function createDebounceFunction(func, timeout) {
    let completed = false;
    let timerId = null;
    return function () {
        if (completed) {
            clearTimeout(timerId)
        }
        completed = true;
        timerId = setTimeout(func, timeout)
        setTimeout(() => completed = false, timeout)
    }
}