function message(msg)
{
    document.getElementById("output").innerHTML=msg + ' EVENT';

}




function displayDate()
{
    document.getElementById("paragraph").innerHTML='The date is: '+  Date();
}





function change(msg)
{
    document.getElementById("changeable").innerHTML=msg +' button is clicked.';
}




function openMe()
{
   op=document.getElementById("paragraph1");
   /* we can change the style attribute directly
 op.style.display="block";
     */
  //or we can create a class to change the style from css
  op.innerHTML='This is the Paragraph you wanted to open.';
  op.className="open";
  body=document.getElementById("body");
  body.className="body_after_open";
    
}

function closeMe()
{
    clo=document.getElementById("paragraph1");
    
   /* we can change the style attribute directly

  clo.style.display="none"; */
   //or we can create a class to change the style from css
    clo.innerHTML='EVERYTHING CLOSED' ;
    clo.className="close";
    body=document.getElementById("body");
    body.className="body_after_close";
  
}





















