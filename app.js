const $gifBoard = $("#gif-board")
const $searchInput = $("#search")

//create div and set img source for gif//
function addGif(result) {
    let gifResult = result.data.length
    if(gifResult) {
        let gifIndex = Math.floor(Math.random() * gifResult);
        let $newDiv = $("<div>", { class: "gif-div" });
        let $newGif = $("<img>", { src: result.data[gifIndex].images.original.url, class: "gif-image"});

        $newDiv.append($newGif);
        $gifBoard.append($newDiv);
    }
    
}

//On form submission, send get request and append gif//
$("form").on("submit", async function(e) {
    e.preventDefault();

    let searchTerm = $searchInput.val();
    $searchInput.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchTerm,
            api_key: "ofZMM0JmnhW1r6D0huonYTrJQwlALMM2"
        }
    });
    addGif(response.data);
});

//remove all gifs//
$("#removeBtn").on("click", function() {
    $gifBoard.empty();
});