
var originalText = document.getElementById('image').innerHTML;

function upDate(previewPic)
{
    image=document.getElementById("image");
      image.innerHTML=previewPic.alt
      image.style.backgroundImage="url('" + previewPic.src + "')";
}
function unDo()
{
       image=document.getElementById("image");
    
      image.innerHTML=originalText;
      image.style.backgroundImage="url('')";
     
}