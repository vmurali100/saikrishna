function createUser() {

    // let username = document.getElementById("username").value
    // let password = document.getElementById("password").value
    // let email = document.getElementById("email").value

    //Capture data from HTML Page
    let user = {
        username: "",
        email: "",
        password: ""
    }

    for (a in user) {
        user[a] = document.getElementById(a).value
    }

    console.log(user)



    // POST data to Server or API

    var sendData = new XMLHttpRequest()
    sendData.onreadystatechange = function () {
        //status = 201
        //readyState = 4
        if (sendData.readyState == 4 && sendData.status == 201) {
            console.log("User Added Succesfully")
        }
    }

    sendData.open("POST", "http://localhost:3000/users")
    sendData.setRequestHeader('Content-type', 'application/json')
    sendData.send(JSON.stringify(user))
}