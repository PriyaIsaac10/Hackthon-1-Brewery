var div=document.createElement("div");
div.className="search-div";

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","text");
input.setAttribute("placeholder","Here you go...!")
input.setAttribute("required","true");


var br=document.createElement("br");

var button=document.createElement("button");
button.className="btn btn-primary";
button.addEventListener("click",bar);
button.innerHTML="Search";

div.append(input,br,button);
document.body.append(div);

var bodydiv=document.createElement("div");
bodydiv.className="brewery-list";

function foo(brewery) {
    try {
    let url="";
    const Con= document.createElement("div");
    Con.className = "brewery-container";
    function notNull(value) {
    if (value != null) {
        return value;
    }
    else {
        return "Not Available"; }
    }
        
    function notNullAddr(adrs){
        if (adrs!=null){
            return adrs;
        }
        else return"";
    }   
    Con.innerHTML = ` 
        <div>
            <p class="brewery-values">Brewery Name:  ${notNull(brewery.name)}</p>
            <p class="brewery-values">Brewery Type:  ${notNull(brewery.id)}</p>
            <p class="brewery-values">Brewery Address:  ${notNullAddr(brewery.street)} ${notNullAddr(brewery.address_2)} ${notNullAddr(brewery.address_3)} ${notNullAddr(brewery.city)} ${notNullAddr(brewery.state)} ${notNullAddr(brewery.country)} ${notNullAddr(brewery.postal_code)}. </p>
            <p class="brewery-values">Brewery website:  ${notNull(brewery.website_url)}</p>
            <p class="brewery-values">Brewery PhoneNo:  ${notNull(brewery.phone)}</p>
         </div>
        `;
    bodydiv.append(Con);
    }
     catch{
        console.log(error);
    }    
}
document.body.append(bodydiv);

async function bar() {
let raw=document.getElementById("text").value;
const res = await fetch(`https://api.openbrewerydb.org/breweries`);
const res1 = await res.json();
res1.forEach((brewery) => foo(brewery));
}
