let apiQuotes = [];

async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    try{
         const response = await fetch(apiUrl);
         apiQuotes = await response.json();
         console.log(apiQuotes[9]);

    }catch(err){
        alert(err);
    }
}


getQuotes();