let name = ['safa','lma','rama','rna','sama','alma'];
let array=[ '18 old years','24 old years' ,'30 old years' ,'29 old years' ,'22 old years' ,'17 old years' ]


let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign='center';

function elment(name,array){
let content =document.createElement('div')
let title =document.createElement('h2');
let para =document.createElement('p');
let img =document.createElement('img');
let haed = document.createTextNode(name);
let ages = document.createTextNode(array);
img.src='1.jpg';
img.style.width='50%'
title.appendChild(haed);
para.appendChild(ages);
content.appendChild(title);
content.appendChild(para);
content.appendChild(img);

container.appendChild(content);
content.style.width='200px';
content.style.background='#444'
content.style.margin='2px';
content.style.color='#fff';
content.style.padding='10px';
content.style.display='inline-block';

};
for (let i = 0; i < 7; i++) {
   elment(name[i],array[i]);
};

