let btn_start = document.querySelector("#start");
let content = document.querySelector("#container");
let extra_colors = [];

let extradivs = "";
const data = [
  {
    content: ['Some Text ...'],
    color: ['red']
  },
  {
    content: ['Some text again ...'],
    color: ['green']
  },
  {
    content: ['Some text again ......'],
    color: ['blue']
  }
  ,
  {
    content: ['Some text again ......'],
    color: ['grey']
  }

]

const extra = [
  {
    content: ['Some Extra Content ...'],
    color: ['blue'],
    description: ['this is an extra element of array']
  },
  {
    content: ['Some another extra content ....'],
    color: ['red']
  },
  {
    content: ['Some extra content .....'],
    color: ['green']
  }

]

function createExtraDivs(extra) {

  for (let i = 0; i < extra.length; i++) {
        
    var extra_color = extra[i].color;       
    extra_colors.push(extra_color);
    let extradivs = document.createElement('div');
    extradivs.setAttribute("class", "extradiv");
    extradivs.style.setProperty('background-color', extra_colors[i]);
    let update = document.querySelector("#newdiv");
    update.appendChild(extradivs);
   
    console.log(update);
   

}

  document.querySelectorAll('div.newdiv.border_darker').forEach(function(divs) {

  });

}

function createDivs(data) {

  for (var key in data) {

    let value = data[key];
    let color = value['color'];
    let text = value['content'];
    let newdivs = document.createElement('div');

    newdivs.setAttribute("class", "newdiv");
    newdivs.setAttribute("id", "newdiv");
    newdivs.style.setProperty('background-color', color);
    newdivs.classList.add("border_darker");
    newdivs.appendChild(document.createTextNode(text));
    content.appendChild(newdivs);
    
  }

}

btn_start.addEventListener("click", function() { 

  createDivs(data);
  createExtraDivs(extra);

});

