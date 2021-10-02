function extract(content) {
    let text = document.getElementById('content').textContent;

    let regularExpression = /\(([^)]+)\)/g;

    let match = text.match(regularExpression);
    
    return match.join('; ');
}