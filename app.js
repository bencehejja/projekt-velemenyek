const reviews = [

    {
        name: "Szent Endre",
        job: "PHP fejlesztő",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quasi pariatur totam, odio qui eligendi perferendis iste cumque corrupti aperiam."
    },

    {
        name: "Nagy Zsanett",
        job: "Marketing menedzser",
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quasi pariatur totam, odio qui eligendi perferendis iste cumque corrupti aperiam."

    },

    {
        name: "Török Bálint",
        job: "Automata tesztelő",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quasi pariatur totam, odio qui eligendi perferendis iste cumque corrupti aperiam."
    }

]

// A hasznalni kivant elemek eltarolasa valtozokba

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const text = document.getElementById('text');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

//Kiindulo ertekek megadasa (ez fogja reprezentalni az aktualis elemet a tombomben)

let current = 0;

//Kiindulo szemely betoltose

window.addEventListener('load', () =>{

    const item = reviews[current];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;

})

//Irunk egy fuggvenyt amellyel ki tudjuk valasztani a kovetkezo emberunket

function showPerson(person){

    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;

}

//Gombnyomasra ugorjuk a kovetkezo emberre

nextBtn.addEventListener('click', () => {

    current++;

    if(current > reviews.length -1){

        current = 0;
    }

    showPerson(current);
})

//Gombnyomasra ugorjunk az elozo emberre

prevBtn.addEventListener('click',() => {

    current--;

    if(current < 0){

        current = reviews.length -1;
    }

    showPerson(current);

})