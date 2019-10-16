$(document).ready(function () {
    var take;



    $("button").on("click", function () {
        take = $('input').val();
        $.ajax({
            url: "http://api.edamam.com/search?q=" + take + "&app_id=$ba455ead&app_key=$31dcb7291ec3ec4dd89cd608adf97e57&from=0&to=1"
            ,

            method: "GET"
        })
            //we use response.data to move through the objects to grab the actual value
            .then(function (response) {
                var results = response.data;


                console.log(response.hits[0].recipe.url);
                console.log(response);
                $('iframe').attr('src', response.hits[0].recipe.url)


            })

        $.ajax({
            url: "https://api.unsplash.com/search/photos/?client_id=5f075f2a36d998d71e48a195d5b190a4c0b4194471f1a8108f42370aa300ce04&page=1&query=" + take,
            method: "GET"
        })

            .then(function (image) {
                return image.results[0].urls.full;
            }
            )

    })




}
)