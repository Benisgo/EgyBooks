var Button = document.getElementById("ScrollDown")
var Background = document.getElementById("Background")
var Nav = document.getElementsByClassName("navbar navbar-expand-lg navbar-light bg-light")
var LocationsHTML = document.getElementById("Locations")
var SearchButton = document.getElementById("search-button")

var Locations = ["Madinaty", "Giza", "New Cairo", "El Shrouk", "Maadi", "Alexandria", "Banha", "6th of October", "El Obour"]

var LocationsLink = [
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55233.30772423678!2d31.607629024496052!3d30.091845471360603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581e0197d20347%3A0x77e815673cfde03b!2sMadinaty%2C%20Second%20New%20Cairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1675199226849!5m2!1sen!2seg" width="470" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110550.23395030096!2d31.119602685818172!3d30.016918399767576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458469235579697%3A0x4e91d61f9878fc52!2sGiza%2C%20El%20Omraniya%2C%20Giza%20Governorate!5e0!3m2!1sen!2seg!4v1675199450361!5m2!1sen!2seg" width="470" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110549.03241344997!2d31.417419585842936!3d30.017996247749718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145822cffcd270e7%3A0x98b73d687889fd8!2sNew%20Cairo%20City%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1675199465495!5m2!1sen!2seg" width="470" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55201.93736650442!2d31.594792174813755!3d30.14795397397877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457f7d7c85c1e63%3A0xa16c80a505d27145!2sEl%20Shorouk%20City%2C%20El%20Shorouk%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1675199500679!5m2!1sen!2seg" width="470" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55306.59230978249!2d31.2706891237543!3d29.960398832153803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583809b8f551e3%3A0x6265c5febb8ab4a3!2sMaadi%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1675199515216!5m2!1sen!2seg" width="470" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218359.6853247553!2d29.81479982584854!3d31.224328546450877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c49126710fd3%3A0xb4e0cda629ee6bb9!2sAlexandria%2C%20Alexandria%20Governorate!5e0!3m2!1sen!2seg!4v1675199537537!5m2!1sen!2seg" width="470" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55027.07928083155!2d31.15340207658626!3d30.458986510355956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145875f6592ee989%3A0xa0f7a3872335c0ce!2sBanha%2C%20Qism%20Banha%2C%20Banha%2C%20Al%20Qalyubia%20Governorate!5e0!3m2!1sen!2seg!4v1675199549970!5m2!1sen!2seg" width="470" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55027.07928083155!2d31.15340207658626!3d30.458986510355956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145855e126df199d%3A0x24a6cf9d2fda5678!2s6th%20of%20October%20City%2C%20Giza%20Governorate!5e0!3m2!1sen!2seg!4v1675199561691!5m2!1sen!2seg" width="470" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110313.73332360027!2d31.40344544069248!3d30.22840150334534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581ab73d4ca47d%3A0x89e1c92d1d007f67!2sEl%20Obour%20City%2C%20Al%20Qalyubia%20Governorate!5e0!3m2!1sen!2seg!4v1675199576161!5m2!1sen!2seg" width="470" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
]

const Books = {
    1: ["Harry Potter and the Philosopher’s Stone", "J.K. Rowling", "Giza"],
    2: ["Harry Potter and the Prisoner of Azkaban ", "J.K. Rowling", "Madinaty"],
    3: ["Harry Potter and the Deathly Hallows ", "J.K. Rowling", "Madinaty"],
    4: ["Harry Potter and the Order of the Phoenix ", "J.K. Rowling", "Madinaty"],
    5: ["Harry Potter and the Chamber of Secrets ", "J.K. Rowling", "Giza"],
    6: ["Harry Potter and the Goblet of Fire ", "J.K. Rowling", "Giza"],
    7: ["Harry Potter and the Half-Blood Prince ", "J.K. Rowling", "Maadi"],
    8: ["Harry Potter and the Cursed Child: Parts One and Two", "J.K. Rowling", "Maadi"],
    9: ["Harry Potter and the half blood prince", "J.K. Rowling", "Giza"],
    10: ["Ready Player One", "Ernest Cline", "Madinaty"],
    11: ["The Hunger Games", "Suzanne Collins", "Alexandria"],
    12: ["Harry Potter and the Philosopher’s Stone", "J.K. Rowling", "Alexandria"],
    13: ["The Maze Runner", "J.K. Rowling", "Madinaty"],
}

Button.addEventListener("click", function () {
    window.scrollBy({
        top: Background.clientHeight + 80,
        behavior: "smooth"
    })
})

var inner = `<td class = "Location2">`

var position = 1;
for (let i = 0; i < Locations.length; i++) {
    inner += `
        <div class="card Location shadow-5-strong" style="background-color: #332d2d; margin-bottom:50px;" >
            <div class="class-body">
                <h5 style="color:#FFFFFF;">${Locations[i]}</h5>
                <button class="btn btn-warning btn-outline-light" id="OpenLocation${Locations[i]}" onclick="Clicked(${i})">OPEN </button>
            </div>
        </div>
        `
    position++;
    if (position > 3) {
        inner += `
        </td>
        <td class = "Location2">`
        position = 1;
    }
}
inner += `</td>`
LocationsHTML.innerHTML = inner;





//Search
SearchButton.addEventListener("click", function () {
    var word = document.getElementById("search-input").value
    var cont = ""
    for (let i = 1; i < Object.keys(Books).length; i++) {
        var Index = i;
        var BookName = Books[i][0];
        var Author = Books[i][1];
        var loc = Books[i][2];

        var IndexToSend = 0;
        for (let j = 0; j < Locations.length; j++) {
            if (loc == Locations[j]) {
                IndexToSend = j;
            }
        }

        if (BookName.toLowerCase().includes(word.toLowerCase()) || (Author.toLowerCase().includes(word.toLowerCase))) {
            cont += `
            <tr>
                <th scope="row">${Index}</th>
                <td>${BookName}</td>
                <td>${Author}</td>
                <td>${loc}</td>
                <td><button id="OpenLocation${Locations[i]}" onclick="Clicked(${IndexToSend})" class="btn btn-warning btn-outline-dark" style="margin-top:-5px">Open</button></td>
            </tr>`
        }
    }
    document.getElementById("SearchTable").innerHTML = cont
})



var cont = ""



for (let i = 1; i < Object.keys(Books).length; i++) {
    var Index = i;
    var BookName = Books[i][0];
    var Author = Books[i][1];
    var loc = Books[i][2];
    var IndexToSend = 0;
    for (let j = 0; j < Locations.length; j++) {
        if (loc == Locations[j]) {
            IndexToSend = j;
        }
    }
    cont += `
            <tr>
                <th scope="row">${Index}</th>
                <td>${BookName}</td>
                <td>${Author}</td>
                <td>${loc}</td>
                <td><button id="OpenLocation${Locations[i]}" onclick="Clicked(${IndexToSend})" class="btn btn-warning btn-outline-dark">Open</button></td>
            </tr>`
}
document.getElementById("SearchTable").innerHTML = cont

function Clicked(index) {
    document.getElementById("GoogleBody").innerHTML = LocationsLink[index]
    $('#GoogleMaps').modal('show')
}


console.log('SCRIPT SCRIPT SCRIPT SCRIPT SCRIPT SCRIPT SCRIPT SCRIPT SCRIPT SCRIPT SS')