
function sumNumbersCallback(numbers, callback) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    callback(sum);
}

sumNumbersCallback([1, 2, 3, 4], function (result) {
    console.log("Sum using callback:", result);
});


function sumNumbersPromise(numbers) {
    return new Promise((resolve, reject) => {
        if (!numbers || numbers.length === 0) {
            reject("No numbers provided");
            return; 
        }
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        resolve(sum);
    });
}

sumNumbersPromise([1, 2, 3, 4])
    .then((result) => {
        console.log("Sum using promises:", result);
    })
    .catch((error) => {
        console.error(error);
    });


async function sumNumbersAsync(numbers) {
    return sumNumbersPromise(numbers); 
}

(async () => {
    try {
        const result = await sumNumbersAsync([1, 2, 3, 4]);
        console.log("Sum using async/await:", result);
    } catch (error) {
        console.error(error);
    }
})();


const url1 = "https://jsonplaceholder.typicode.com/posts/1";

function getPosts() {
    fetch(url1)
        .then((response) => response.json())
        .then((post) => {
            const postDetails = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            `;
            document.getElementById("post-details1").innerHTML = postDetails;
        })
        .catch((error) => console.error("Error fetching post:", error));
}

getPosts();


const url2 = "https://jsonplaceholder.typicode.com/posts/1";

async function getPost() {
    try {
        const response = await fetch(url2);
        const post = await response.json();
        const postDetails = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        document.getElementById("post-details2").innerHTML = postDetails;
    } catch (error) {
        console.error("Error fetching post:", error);
    }
}

getPost();
