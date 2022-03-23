const header=document.getElementById('header');
const mainDiv = document.createElement("div");
mainDiv.classList.add('content');
const mainContainer = document.createElement("div");
mainContainer.classList.add("elements");
mainDiv.appendChild(mainContainer);
const div1 = document.createElement("div");
div1.classList.add("elem");
div1.innerText = "Currency";
div1.style.backgroundColor="yellow";
div1.style.color="black";
mainContainer.appendChild(div1);
const div2 = document.createElement("div");
div2.classList.add("elem");
div2.innerText = "Symbol";
div2.style.backgroundColor="yellow";
div2.style.color="black";
mainContainer.appendChild(div2);
const div3 = document.createElement("div");
div3.classList.add("elem");
div3.innerText = "Current price";
div3.style.backgroundColor="yellow";
div3.style.color="black";
mainContainer.appendChild(div3);
const div4 = document.createElement("div");
div4.classList.add("elem");
div4.innerText = "Volume";
div4.style.backgroundColor="yellow";
div4.style.color="black";
mainContainer.appendChild(div4);
const div5 = document.createElement("div");
div5.classList.add("elem");
div5.innerText = "Percent change";
div5.style.backgroundColor="yellow";
div5.style.color="black";
mainContainer.appendChild(div5);
const div6 = document.createElement("div");
div6.classList.add("elem");
div6.innerText = "Market cap";
div6.style.backgroundColor="yellow";
div6.style.color="black";
mainContainer.appendChild(div6);
//mainDiv.appendChild(mainContainer);
header.appendChild(mainContainer);
const cryptoDataFunc = async function () {
    try {
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=m`);
        const cryptoData = await res.json(); 
        cryptoData.forEach(elem => {
            const mainContainer = document.createElement("div");
            mainContainer.classList.add("elements");
            const div1 = document.createElement("div");
            div1.classList.add("elem");
            const img=document.createElement("img");
            img.src=elem.image;
            img.classList.add("img");
            div1.appendChild(img);
            div1.style.textAlign='left';
            const para=document.createElement("p");
            para.innerText=`${elem.name}`
            div1.appendChild(para);
            div1.style.display='flex';
            mainContainer.appendChild(div1);
            const div2 = document.createElement("div");
            div2.classList.add("elem");
            div2.innerText = `${elem.symbol.toUpperCase()}`;
            mainContainer.appendChild(div2);
            const div3 = document.createElement("div");
            div3.classList.add("elem");
            div3.innerText = `$ ${elem.current_price.toFixed(2)}`;
            mainContainer.appendChild(div3);
            const div4 = document.createElement("div");
            div4.classList.add("elem");
            div4.innerText = `${elem.total_volume.toLocaleString('en-us')}`;
            mainContainer.appendChild(div4);
            const div5 = document.createElement("div");
            div5.classList.add("elem");
            if(elem.market_cap_change_percentage_24h>0)
            {div5.style.color="green";
            div5.innerText = `⬆  ${Math.abs(elem.market_cap_change_percentage_24h.toFixed(2))}  %`;}
            else if(elem.market_cap_change_percentage_24h<0)
            {div5.style.color="red";
            div5.innerText = `⬇  ${Math.abs(elem.market_cap_change_percentage_24h.toFixed(2))}  %`;}
            mainContainer.appendChild(div5);
            const div6 = document.createElement("div");
            div6.classList.add("elem");
            div6.innerText = `$ ${elem.market_cap.toLocaleString('en-us')}`;
            mainContainer.appendChild(div6);
            mainDiv.appendChild(mainContainer);
        })
        return cryptoData;
    }
    catch (err) {
        console.error(`Error message : ${err}`);
    }
    
}
// cryptoDataFunc()
const data=cryptoDataFunc();
console.log(data);
document.body.appendChild(mainDiv);
let searchVal=document.getElementById('search');
searchVal.addEventListener('input',function(e){
     //console.log(searchVal.value);
     const para=document.getElementsByClassName('elements');
    //  para[0].style.display='none';
     //console.log(para[0].children[6].outerText);
     for(let i=1;i<para.length;i++)
     {
        if((para[i].children[0].outerText).toLowerCase().includes(searchVal.value))
        para[i].style.display='flex';
        else
        para[i].style.display='none';
     }
});

const changeOrderBtn=document.getElementById('btn');
changeOrderBtn.addEventListener('click',function(){
    const changeOrder=document.querySelector('.content');
    changeOrder.classList.toggle("content-toggle");
})
