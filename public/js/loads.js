function loadall()
{
var xmlrequest=new XMLHttpRequest();
xmlrequest.open('GET',"http://localhost:3000/food");
xmlrequest.send();

xmlrequest.onreadystatechange=
function()
{
  if(this.readyState==4)
  {
       console.log(this.response);
       let resularr=JSON.parse(this.response);
       var htmlans="<li>elements are </li>";
       resularr.forEach(
           (res)=>
           {
 htmlans+=`<li> ${res.id}  itemname is ${res.itemname} price is ${res.price} </li>`;  
           }
       ) ; //forends
           
document.getElementById("spafood").innerHTML=htmlans;
        } //if ends
  }

}


