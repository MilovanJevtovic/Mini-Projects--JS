pictures = document.getElementById('picture');
names = document.getElementById('name');
jobs = document.getElementById('job');
descriptions = document.getElementById('description');


const person1 = {
    Picture: "person/person-1.jpg",
    Name: "Susan Smith",
    Job: "WEB DEVELOPER",
    Description: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.",
};

const person2 = {
    Picture: "person/person-2.jpg",
    Name: "Anna Johnson",
    Job: "WEB DESIGNER",
    Description: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
};

const person3 = {
    Picture: "person/person-3.jpg",
    Name: "Peter Jones",
    Job: "INTERN",
    Description: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
};

const person4 = {
    Picture: "person/person-4.jpg",
    Name: "Bill Anderson",
    Job: "THE BOSS",
    Description:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
};

let num = 0;
people = [person1,person2,person3,person4];


function next(){
    num = (num+1)%4;
    names.innerHTML = people[num].Name;
    jobs.innerHTML = people[num].Job;
    descriptions.innerHTML = people[num].Description;
    pictures.src = people[num].Picture;
}

function previous(){
    if(num < 1){
        num += 3;
    }else{
        num = (num-1);
    }
    names.innerHTML = people[num].Name;
    jobs.innerHTML = people[num].Job;
    descriptions.innerHTML = people[num].Description;
    pictures.src = people[num].Picture;
}

function random(){
    num = Math.floor(Math.random() * 4);
    console.log(num);

    names.innerHTML = people[num].Name;
    jobs.innerHTML = people[num].Job;
    descriptions.innerHTML = people[num].Description;
    pictures.src = people[num].Picture;
}