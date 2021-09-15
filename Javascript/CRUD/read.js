function getDataFromServer() {
    var sendData = new XMLHttpRequest()
    sendData.onreadystatechange = function () {
        //status = 201
        //readyState = 4
        if (sendData.readyState == 4 && sendData.status == 200) {
            console.log(sendData.response)

        }
    }

    sendData.open("GET", "http://localhost:3000/users")
    sendData.send()
}

getDataFromServer()