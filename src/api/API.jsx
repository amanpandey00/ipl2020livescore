const API_KEY="lfDfM4mqxbMcJ7IzqQVyXfQJT852";

// Get All Matchs [up-coming matches]

export const getMathes = () =>{
    const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;

    return fetch(url)
    .then((response) => response.json())
    .catch((error)=>console.log("Error: ", error));
}

// Load Match Details
export const getMatchDetail = (id) =>{
    const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;

    return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log("Error: ", error));
}