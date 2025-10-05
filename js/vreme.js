const apiKljuc="adbd61c0424520eac06f4c3415d7ab31";
const dugme=document.querySelector("#pretraga");
const unospolje=document.querySelector("#grad");

dugme.addEventListener("click",function(){
    const grad=unospolje.value.trim();
    if(!grad || grad===""){
        alert("Unesite naziv grada");
        return;
    }
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${grad}&appid=${apiKljuc}&units=metric&lang=sr`;

    fetch(url)
    .then(odgovor=>{
        if(!odgovor.ok){
            throw new Error("Greska u preuzimanju podataka");
        }
        
        return odgovor.json();
    })
    .then(podaci=>{
        const temperatura=podaci.main.temp;
        const opis=podaci.weather[0].description;
       
        const rezultatDiv=document.querySelector("#rezultat");
        rezultatDiv.innerHTML=`Temperatura u ${grad} je ${temperatura}°C, a vreme je ${opis}.`;
    })
    .catch(greska=>{
        console.error("Greska:",greska);
    });

});