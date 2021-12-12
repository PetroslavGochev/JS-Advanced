function requestValidator(request){
    let invalidMessage = 'Invalid request header: Invalid ';
    
    if (request.method!='GET' && request.method!='POST'&& request.method!='DELETE'&& request.method!='CONNECT') {
        invalidMessage += 'Method';
        throw new Error(invalidMessage);
    }
    

    if(!(/^([a-zA-Z0-9\.]+|\*)$/gm.test(request.uri)) || request.uri == undefined){
        invalidMessage += 'URI';
        throw new Error(invalidMessage);
    }

    if (request.version!='HTTP/0.9' && request.version!='HTTP/1.0'&& request.version!='HTTP/1.1'&& request.version!='HTTP/2.0') {
        invalidMessage += 'Version'
        throw new Error(invalidMessage); 
    }

    if (!/^[^<>\\&'"]*$/gm.test(request.message) || request.message === undefined) {
        invalidMessage += 'Message';
        throw new Error(invalidMessage);
    }

    return request;
}

console.log(requestValidator(
    {
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.0',
        message: ''
      }      
));
console.log(requestValidator(
    {
        method: 'OPTIONS',
        uri: 'git.master',
        version: 'HTTP/1.1',
        message: '-recursive'
      }        
));
console.log(requestValidator(
    {
        method: 'POST',
        uri: 'home.bash',
        message: 'rm -rf /*'
      }
            
));