var btn = document.getElementById('submit');
btn.addEventListener('click', onSubmitClick);

function onSubmitClick() {
process(document.getElementById("data").value)
}

function logResults(result1, result2){
    document.getElementById('result').innerHTML = '<p>Part 1 answer is: <code><em>' + result1 +'</em></code></p>' + '<p>Part 2 answer is: <code><em>' + result2 +'</em></code></p>'
}