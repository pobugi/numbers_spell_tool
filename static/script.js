const API_V1_prefix = "api/v1/";
const HOST = window.location.href;

const processURL = HOST + API_V1_prefix + "create";

console.log(processURL);
let result = {"value": "default"};


// const number = document.querySelector('#number');




const inputNumber = document.querySelector('#number');
const resultField = document.querySelector('.well');

console.log(inputNumber.value);
// inputNumber.addEventListener('input', (e) => {
//     console.log(inputNumber.value);
// });

inputNumber.addEventListener('input', () => {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", processURL);                                               
    xhr.setRequestHeader("Content-Type","application/json; charset=UTF-8");
    console.log(inputNumber);
    xhr.send(JSON.stringify(+inputNumber.value));

    xhr.onreadystatechange = (e) => {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            var status = xhr.status;
            if (status === 0 || (status >= 200 && status < 400)) {
                var jsonBody = JSON.parse(xhr.response);  
                resultField.textContent = jsonBody['value'];
                console.log(jsonBody);
            }
        }
    }

    });
