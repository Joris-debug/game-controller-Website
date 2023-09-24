var requestPending = false; //No request is currently pending

function sendData(joyDir, button){
    if(!requestPending){ //If there is no pending request
        requestPending = true;
        buttonValue = button.value;
        var data = '"' + joyDir + ";" + buttonValue + '"';
        console.log(data);
        fetch("http://{YOUR_SERVER_IP}", { method: "post", body: data })
        .then((data) => {
            console.log(data);
            button.value = false; //Only when the request went trough, attack is disabled 
            requestPending = false;
        }).catch(err => console.error(err), requestPending = false);
    }        
}
