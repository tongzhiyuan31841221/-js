function Ajax(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open("get", url)
        xhr.send()
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(JSON.parse(xhr.response))
                } else {
                    reject(JSON.parse(xhr.response))
                }
            }
        }
    })
}
// export default Ajax