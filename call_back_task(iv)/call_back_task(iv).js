

const DEMO_URL = "https://jsonplaceholder.typicode.com/posts";

 const request = fetch(DEMO_URL).then((response) => {
     console.log(response)
     return response.json()
})
     .then((data) => {
        console.log(data);
         console.log(`ID: ${data.id}`);
          console.log(`Title: ${data.title}`);
    })
     .catch((error) => {
         console.log("Error:", error);
   });

 console.log(request); 


function fetchData(url, callback) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => callback(data))
        .catch((error) => console.error("An error occurred", error));
}

function handleData(data) {
    console.log("Received data", data);
    for (let i = 0; i < 12; i++){
        console.log(data);
        console.log(`ID:${data[i]["id"]},Title: ${data[i]["title"]}`);
    }
}

fetchData("https://jsonplaceholder.typicode.com/posts", handleData);




const fetchAPI = async function () {
    const res = fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res;
    console.log("Data fetched!", data);
  };
  fetchAPI();
console.log("Hi I am executing!");
  


 