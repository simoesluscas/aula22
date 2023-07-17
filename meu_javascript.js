var xhr = new XMLHttpRequest();
console.log('UNSENT', xhr.readyState); //readyState será 0

xhr.open('GET', 'https://restcountries.com/v3.1/name/brazil', true);
console.log('OPENED', xhr.readyState); //readyState será 1

xhr.onprogress = function () {
    console.log('LOADING', xhr.readyState); //readyState será 3
};
xhr.onload = function () {
    console.log('DONE', xhr.readyState); //readyState será 4
    console.log( JSON.parse(xhr.responseText))
};  
xhr.send();
