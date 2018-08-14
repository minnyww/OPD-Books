export function setErrorMsg(key, value, arr) {
    let duplicated = false;
    if (arr.length !== 0) {
        for (let i = 0; i <= arr.length - 1; i++) {
            if (arr[i].key === key) {
                arr[i].value = value
                duplicated = true;
                break;
            } else {
                duplicated = false
            }
        }
    }
    if (!duplicated || arr.length === 0) {
        arr.push({ key: key, value: value })
    }
    return arr
}


export function setErrorMsgSplice(key, arr) {
    let indexSplice = -1;
    if (arr.length !== 0) {
        for (let i = 0; i <= arr.length - 1; i++) {
            if (arr[i].key === key) {
                indexSplice = i
                break;
            }
        }
    }
    if (indexSplice > -1) {
        arr.splice(indexSplice, 1);
    }
    return arr
}