'use strict';

/*
const input = document.getElementById('input');
const infoBtn = document.querySelector('.btn')
const container = document.querySelector('.sub-conatiner');
const header = document.querySelector('.inputes');


infoBtn.addEventListener('click', (()=>{
    if (!input.value == "") {
        const countryName = input.value.toLowerCase();
    

        const getCountryInfo = ((url, callback)=>{
            const request = new XMLHttpRequest();
            request.addEventListener('readystatechange', (()=>{
                
                if (request.readyState === 4 && request.status === 200) {
                    //in JSON
                    const [data] = JSON.parse(request.responseText)
                    callback("", data)
                } else if (request.readyState === 4 && request.status !== 200){
                    callback(data.status, "")
                }
            }))
            request.open('GET', url);
            request.send()
            
        })
        
        
        getCountryInfo(`https://restcountries.eu/rest/v2/name/${countryName}`, (err, data)=>{
            console.log(data);
            getCountryInfo('https://restcountries.eu/rest/v2/alpha/NER', (err, data)=>{
                console.log(data);
            })
        })
    }
}))

/*infoBtn.addEventListener('click', (()=>{
    const countryName = input.value.toLowerCase();
    const getCountryInfo = ((url)=>{
        return new Promise((resolve, reject)=>{
            const request = new XMLHttpRequest();
            request.addEventListener('readystatechange', (()=>{
                if(request.readyState === 4 && request.status === 200){
                    const data = JSON.parse(request.responseText)
                    resolve(data)
                }else if (request.readyState === 4 && request.status !== 200) {
                    reject('Something went wrong');
                }
            }))
            request.open('GET', url);
            request.send();
        })
    })
    //PROMIS CHAINING
    
    getCountryInfo (`https://restcountries.eu/rest/v2/name/${countryName}`).then((data)=>{
        console.log(data);
        // const neighbourCountry = data.borders[0];
        // console.log(neighbourCountry);
        return getCountryInfo (`https://restcountries.eu/rest/v2/alpha/ISR`).then((data)=>{
            console.log(data);
        })
    }).catch((err)=>{
        console.log(err);
    })


}));

//FETCH
/*
fetch(`https://restcountries.eu/rest/v2/name/ghana`).then((resource)=>{
    console.log('Ressolve', resource);
    return resource.json()
}).then((data)=>{
    console.log(data);
fetch(`https://restcountries.eu/rest/v2/name/nigeria`).then((resource)=>{
    return resource.json()
}).then((data)=>{
    console.log(data);
fetch(`https://restcountries.eu/rest/v2/name/mali`).then((resource)=>{
    return resource.json()
}).then((data)=>{
    console.log(data);
})
})
}).catch((err)=>{
    console.log('SOome Erro', err);
})

//ASYNC AWAIT

getme = async (()=>{
    const respon = await fetch('https://restcountries.eu/rest/v2/name/ghana');
    const data = await respon.json()
    return data

})

const data = getme()
console.log(data);*/


    

const input = document.getElementById('input');
const infoBtn = document.querySelector('.btn')
const container = document.querySelector('.sub-conatiner');
const header = document.querySelector('.inputes');


//MAIN COUNTRY
const renderCountry = ((data)=>{
    const mainCountry = document.querySelector('.main-country');
    const html = `<div class="image-flag">
    <img class="imge" src="${data.flag}" alt="">
</div>
<div class="country-info">
<li><h1>${data.name.toUpperCase()}</h1></li>
<li><h3>${data.region.toUpperCase()}</h3></li>
    <div class="sub-info">
        <div class="label">
            <li><label for="">Sub-Region:</label></li>
            <li><label for="">Capital:</label></li>
            <li><label for="">Population:</label></li>
            <li><label for="">Currency:</label></li>
            <li><label for="">CallingCodes:</label></li>
            <li><label for="">Official Language:</label></li>
        </div>
        <div class="main-info">
        <li>${data.subregion}</li>
        <li>${data.capital}</li>
        <li>${(data.population/1000000).toFixed(2)}M People</li>
        <li>${data.currencies[0].name} (${data.currencies[0].symbol})</li>
        <li>${data.callingCodes[0]}</li>
        <li>${data.languages[0].name}</li>
        </div>
    </div>
</div>`
mainCountry.innerHTML = html;
});
//NEIGHBORING COUNTRIES
const neighbourCountry1 = ((data, div)=>{
    const neighbourCountryLeft = document.querySelector('.main-left');
     const html = `
        <div class="image-flag">
            <img class="imge" src="${data.flag}" alt="">
        </div>
        <div class="country-info">
        <li><h1>${data.name.toUpperCase()}</h1></li>
        <li><h3>${data.region.toUpperCase()}</h3></li>
            <div class="sub-info">
                <div class="label">
                <li><label for="">Sub-Region:</label></li>
                <li><label for="">Capital:</label></li>
                <li><label for="">Population:</label></li>
                <li><label for="">Currency:</label></li>
                <li><label for="">CallingCodes:</label></li>
                <li><label for="">Official Language:</label></li>
                </div>
                <div class="main-info">
                <li>${data.subregion}</li>
                <li>${data.capital}</li>
                <li>${(data.population/1000000).toFixed(2)}M People</li>
                <li>${data.currencies[0].name} (${data.currencies[0].symbol})</li>
                <li>${data.callingCodes[0]}</li>
                <li>${data.languages[0].name}</li>
                </div>
            </div>
        </div>`;
        neighbourCountryLeft.innerHTML = html;
});

//NEIGHBORING 2

const neighbourCountry2 = ((data, div)=>{
    const neighbourCountryRight = document.querySelector('.main-right');
    const html = `
       <div class="image-flag">
           <img class="imge" src="${data.flag}" alt="">
       </div>
       <div class="country-info">
       <li><h1>${data.name.toUpperCase()}</h1></li>
       <li><h3>${data.region.toUpperCase()}</h3></li>
           <div class="sub-info">
               <div class="label">
               <li><label for="">Sub-Region:</label></li>
               <li><label for="">Capital:</label></li>
               <li><label for="">Population:</label></li>
               <li><label for="">Currency:</label></li>
               <li><label for="">CallingCodes:</label></li>
               <li><label for="">Official Language:</label></li>
               </div>
               <div class="main-info">
               <li>${data.subregion}</li>
                <li>${data.capital}</li>
                <li>${(data.population/1000000).toFixed(2)}M People</li>
                <li>${data.currencies[0].name} (${data.currencies[0].symbol})</li>
                <li>${data.callingCodes[0]}</li>
                <li>${data.languages[0].name}</li>
               </div>
           </div>
       </div>`;
       neighbourCountryRight.innerHTML = html;
})
infoBtn.addEventListener('click', (()=>{
    const countryName = input.value.toLowerCase();
    getCountryInfo(countryName);
    document.querySelector('main').style.opacity = 1;


}));

const getCountryInfo = ((countryName)=>{
    const request = fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then(respon=> respon.json())
    .then(data=>{
        renderCountry(data[0])
        const firstNeighbourCountry = data[0].borders[0];
        const secondNeighbourCountry = data[0].borders[1];
        if (!firstNeighbourCountry || !secondNeighbourCountry) return;
        return fetch(`https://restcountries.eu/rest/v2/alpha/${firstNeighbourCountry}`)
        .then(request=>request.json())
        .then(data=>{
            neighbourCountry1(data);
            return fetch(`https://restcountries.eu/rest/v2/alpha/${secondNeighbourCountry}`)
        })
    }).then(request=>request.json())
    .then(data=>{
        neighbourCountry2(data)
    });
    //
    // .catch(err=>console.log(err.message))
    
    
});

