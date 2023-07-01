let word = document.getElementById('word');
let pho = document.getElementById('pho');
let ant = document.getElementById('ant');
let syn = document.getElementById('syn');
let pos = document.getElementById('pos');
let def1 = document.getElementById('def1');
let def2 = document.getElementById('def2');
let def3 = document.getElementById('def3');
let btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
        let inp = document.getElementById('inp');
// alert(inp)
//         console.log(inp)

                // let w = "https://goweather.herokuapp.com/weather/"
                let p = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inp.value}` )
                p.then((value1) => {
                      
                        return value1.json()
                }).then((value2) => {
                        word.innerHTML = 'Word: ' + inp.value;
                        pho.innerHTML = 'phonetic: ' + value2[0].phonetic;
                        pos.innerHTML = 'Parts Of Speech: ' + value2[0].meanings[0].partOfSpeech;
                        syn.innerHTML = 'Synonyms: ' + value2[0].meanings[0].synonyms;
                        ant.innerHTML = 'Antonyms: ' + value2[0].meanings[0].antonyms;
                        def1.innerHTML = 'Definition 1: ' + value2[0].meanings[0].definitions[0].definition;
                        def2.innerHTML = 'Definition 2: ' + value2[0].meanings[0].definitions[1].definition;
                        def3.innerHTML = 'Definition 3: ' + value2[0].meanings[0].definitions[2].definition;
                        
                       
                        //  console.log(value2)
                        
                        inp.value = " "
                     
        
                })
})



