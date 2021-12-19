class Request{
    constructor(method, uri, version, message){
        this.method = method;
        this.message = message;
        this.uri = uri;
        this.version = version;
        this.response = undefined;
        this.fulfilled = false;
    }
}

let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '')
console.log(myData);
