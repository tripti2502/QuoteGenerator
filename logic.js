let generate = (()=>{
    fetch('https://type.fit/api/quotes')
        .then(arr => arr.json())
        .then(function(arr) {
            let rndm = Math.floor(Math.random() * arr.length);
            let para = document.querySelector('.quotes')
            let quote = para.firstElementChild;
            let author = para.lastElementChild;
            quote.innerText = arr[rndm]["text"];
            author.innerText = "~ " + arr[rndm]["author"];

        })
});
