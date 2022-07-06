var http = new XMLHttpRequest();
var url = "https://jsonplaceholder.typicode.com/posts";
var method = "GET";

http.open(method, url);
http.onreadystatechange = function () {
  //the xmlhhtprequest property returns the state an XMLHttpRequest client is in. An XHR client exists in one of the following states:
  // 1 unsent - client has been created open() not called yet,2 open() has been called , 3 headers_received() - send() has been called and headers and status are avaible, 4 downloading responseText holds partials data,5 the operation is complete
  if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
    console.log(JSON.parse(http.responseText)[0].id);
  } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
    console.log("Error!");
  }
};

http.send();
