var VIDEO_HTTP = "https://www.googleapis.com/youtube/v3/videos?";
var API_KEY = "AIzaSyCK2mRjH-soMjsh0pOwRwrXbf67tKPaUzM";
var VIDEO_SEARCH = "https://www.googleapis.com/youtube/v3/search?"

// var search;

var Gdata = [];
var mainDiv = document.getElementById("mainVideoDiv");
if(SubmitEvent)
{

function getdata(search) 
{
    console.log("i am in getdata")
    mainDiv.innerHTML = '';
    fetch(
        VIDEO_SEARCH +
        new URLSearchParams({
            key: API_KEY,
            part: "snippet",
            // chart: "mostPopular",
            q: search,
            maxResults: 40,
            regionCode: "IN"
        })
    )
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            // Gdata = data;
            // console.log("gdata = ",Gdata)
            data.items.forEach(ele => {
                console.log("ele=", ele)
                setvideo(ele);
            })
        })
}
function setvideo(Gdata) 
{

    var vidid = Gdata.id.videoId

    mainDiv.innerHTML += `
    <Div class="col"><iframe class="embed-responsive-item" id="videoDiv" width="270" height="200" src="https://www.youtube.com/embed/${vidid}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Div>
    `;
}
}
////////////////////////////////////////////////

////////////////////////////////////////////////
else
{
var btn = document.getElementById('submit');
btn.addEventListener('click', func);
var Gdata = [];
var serDiv = document.getElementById("textfield");
var setmainvid = document.getElementById("mainVideoDiv");


function func()
{
    console.log(serDiv.value);
   
}
getdata(newnew)
 

function getdata(search) 
{
    console.log("this is getdata 2")
    fetch(
        VIDEO_SEARCH +
        new URLSearchParams({
            key: API_KEY,
            part: "snippet",
            // chart: "mostPopular",
            q: search,
            maxResults: 40,
            regionCode: "IN"
        })
    )
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            
            data.items.forEach(ele => {
                console.log("ele=", ele)
                setvideo(ele);
            })
        })
}
function setvideo(Gdata) 
{

    // var newnew = serDiv.value;
    var vidid = Gdata.id.videoId   

    setmainvid.innerHTML += `<Div class="col"><iframe class="embed-responsive-item" id="videoDiv" width="270" height="200" src="https://www.youtube.com/embed/${vidid}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Div>`;
}
}




var Gdata = [];
var mainDiv = document.getElementById("mainVideoDiv");

function getdata1() 
{
    // console.log("i am in getdata")
    mainDiv.innerHTML = '';
    fetch(
        VIDEO_SEARCH +
        new URLSearchParams({
            key: API_KEY,
            part: "snippet",
            chart: "naruto",
            // q: search,
            maxResults: 40,
            regionCode: "IN"
        })
    )
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            Gdata = data;
            console.log("gdata = ",Gdata)
            data.items.forEach(ele => {
                console.log("ele=", ele)
                setvideo(ele);
            })
        })
}
function setvideo(Gdata) 
{

    var vidid = Gdata.id.videoId

    mainDiv.innerHTML += `
    <Div class="col"><iframe class="embed-responsive-item" id="videoDiv" width="270" height="200" src="https://www.youtube.com/embed/${vidid}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Div>
    `;
}

getdata1()


///////////////////////////////////////////////////

// scroll navbar transparent color

$(window).scroll(function () {
    var offset = $(window).scrollTop();
    // console.log(offset);
    $('.navbar').toggleClass('trans', offset < 50);
});





