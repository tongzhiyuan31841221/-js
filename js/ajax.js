function Ajax(url, resolve) {
    let xhr = new XMLHttpRequest()
    xhr.open("get", url)
    xhr.send()
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            resolve(xhr.responseText)
        }
    }
}

export default Ajax
export const AjaxPost = function (url, resolve) {
    let data = {
        name: 111,

    }
    let xhr = new XMLHttpRequest()
    xhr.open("get", url)
    xhr.setRequestHeader('Content-Type', 'applicaton/json')
    xhr.send(JSON.stringify(data))
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            resolve(xhr.responseText)
        }
    }
}

