var management=[
    {place:"SECRETARY",name:'Rtn II RAJINIKANTH .S',image:"images/image5.jpg",},
    {place:"Vice-President",name:'Rtn II Dr.LEELAVATHI JANARDHAN',image:"images/image6.jpg"},
    {place:"President",name:'Rtn II PARASMAL BAFNA',image:"images/image4.jpg"},
];
var members=[
  {place:"Members",name:'Rtn II N.C SWAMY',image:"images/image8.jpg"},
  {place:"Members",name:'Rtn II  Dr.HARISH M.K',image:'images/image7.jpg'},
  {place:"Members",name:'Rtn II K.B SUBRAHMANYA',image:'images/image2.jpg'},
  {place:"Members",name:'Rtn II H.R. DAYANADA',image:'images/image1.jpg'},
];
var staff={

}

function incerting(a){
var card = document.querySelector(".management");
var mem = document.querySelector(".members");
console.log(a);
var block = "<div class='card'><img class='card-img-top image' src='' alt='Card image cap'><div class='card-body'><h6 class='card-title text-center place'></h6><h5 class='card-title text-center name'></h5></div><div>";
console.log(block);
console.log(card);
if(a==management){
  var ans=card;
}
else if (a==members) {
  var ans=mem;
}
  a.map(function(item, index, array){
  ans.insertAdjacentHTML('afterbegin',block);
    console.log(ans);
    var image = ans.querySelector(".image");
    image.src=a[index].image;
    var name = ans.querySelector(".name");
    name.innerHTML=a[index].name;
    var place = ans.querySelector(".place");
    place.innerHTML=a[index].place;
  });
};
x
