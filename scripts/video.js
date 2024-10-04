// 1 -fetch - load and show categoric  on html

// create loadCategories
const loadCategories = () => {
    // fetch data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((res) => res.json())
        .then((data) => displayCategory(data.categories))
        .catch((error) => console.log(error))
}

const loadVideos = () => {
    // fetch
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then((res)=> res.json())
        .then((data) =>videoCategories(data.videos))
        .catch((error) => console.log(error))

}

// card demo
// const cardDemo= {
//     {
//         "category_id": "1001",
//         "video_id": "aaaa",
//         "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//         "title": "Shape of You",
//         "authors": [
//             {
//                 "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//                 "profile_name": "Olivia Mitchell",
//                 "verified": ""
//             }
//         ],
//         "others": {
//             "views": "100K",
//             "posted_date": "16278"
//         },
//         "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
//     }
// }


// create displayVideo (videos)
const videoCategories = (videos) => {
    console.log(videos)
    const videoContainer = document.getElementById("videos")

    // forEach
    videos.forEach((video) => {
        console.log(video)

        // create a  cards
        const card = document.createElement("div")
        card.classList="card card-compact"
        card.innerHTML = `
        
        <figure class="h-52 relative">
            <img class ="w-full h-full object-cover" src=${video.thumbnail} alt="Shoes" />
            <span class="absolute right-2 bottom-2 text-white font-semibold bg-black rounded-lg p-1 text-xs">
            ${video.others.posted_date}
            </span>
        </figure>
        <div class="px-0 py-2 flex gap-2">

            <div>
                <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture} />
            </div>

        <div>
            <h2 class ="font-bold">${video.title}</h2>
            <div class="flex gap-2 items-center">
                <p class= "text-gray-400">${video.authors[0].profile_name} </p>
                ${video.authors[0].verified == true?
                    `<img class="w-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png">`
                    :
                     ""}
            </div>
            <p> </p>
        </div>
          
        </div>
        `;
        videoContainer.append(card);

    })
}


// create displayCategory (btn)
const displayCategory = (categories) => {
    const categoriesContainer = document.getElementById("categories")

    // forEach
    categories.forEach((item) => {
        // create a button
        const button = document.createElement("button")
        button.classList = "btn";
        button.innerText = item.category

        // append
        categoriesContainer.append(button)
    });
}

// call main fetch func

loadCategories()
loadVideos()
