let btn_start = document.querySelector("#start");
let content = document.querySelector("#container");

let extradivs = "";
const data = [
  {
    content: 'Some Text .',
    color: 'red'
  },
  {
    content: 'Some text again ..',
    color: 'green'
  },
  {
    content: 'Some text again ...',
    color: 'blue'
  }
  ,
  {
    content: 'Some text again ....',
    color: 'grey'
  }

]

const extra = [
  {
    content: 'Some Extra Content .',
    color: ['blue'],
  },
  {
    content: 'Some another extra content ..',
    color: 'red'
  },
  {
    content: 'Some extra content ...',
    color: 'green'
  },
  {
    content: 'Some extra content ....',
    color: 'DodgerBlue'
  }

]

function createExtraDivs(extra) {

  for (let i = 0; i < extra.length; i++) {

    let extra_color = extra[i].color;
    let extra_content = extra[i].content;
    let extradivs = document.createElement('div');
    extradivs.setAttribute("class", "extradiv");
    extradivs.style.setProperty('background-color', extra_color);
    let update = document.querySelector("#newdiv");

    let div_to_update = document.querySelectorAll('div.newdiv.border_darker')[i]; 
    div_to_update.appendChild(extradivs);
    let extradiv_to_update = document.querySelectorAll('div.extradiv')[i];
    extradiv_to_update.appendChild(document.createTextNode(extra_content));
    extradiv_to_update.classList.add("border_darker");
     
  }

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

btn_start.addEventListener("click", function () {

  createDivs(data);
  createExtraDivs(extra);

});

