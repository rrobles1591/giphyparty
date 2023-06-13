console.log("Let's get this party started!");

const $gifArea = $("#gif-area")
const $search = $("#search")

function appendGif(res){
    let numRes = res.data.length;
    if (numRes){
        let random = Math.floor(Math.random() * numRes);
        let $newDiv = $("<div>")
        let $newGif = $("<img>", {
            src: res.data[random].images.original.url, 
        });

        $newDiv.append($newGif);
        $gifArea.append($newDiv);
    }
}

$("form").on("submit", async function(e){
    e.preventDefault();

    let searchTerm = $search.val();
    $search.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params:{
            q : searchTerm,
            api_key : "guuUm51knBrIrE5reZPJx5lWMztaY1L9"
        }
    }); 

    appendGif(response.data);
})

$("#remove").on("click", function(){
    $gifArea.empty();
});