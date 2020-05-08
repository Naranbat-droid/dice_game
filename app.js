// toglogchiin eeljiig hadgalah huwisagch, 1-r toglogchiig 0, 2-r toglogchiig 1 gej temdeglie
var activePlayer = 0;

// toglogchdiin tsugluulsan onoog hadgalah huwisagch
var scores = [0, 0];

// toglogchiin eeljindee tsugluulj baigaa onoog hadgalah huwisagch
var roundScore = 0;

// shooni ali talaaraa buusnig hadgalah huwisagch heregtei, 1-6 gesen utgig ene huwisagchid sanamsarguigeer uusgej ogno.
// var dice = Math.floor(Math.random() * 6) + 1;

// <div class="player-score" id="score-0">43</div>
// document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").innerHTML = "<em>YES!</em>";

// programm ehlehed beltgie

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";

document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function() {
    // 1-6 доторх санамсаргүй нэг тоо гаргаж авна
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // шооны зургийг веб дээр гаргаж ирнэ
    diceDom.style.display = "block";

    // буусан санамсаргүй тоонд харгалзах шооны зургийг веб дээр гаргаж ирнэ
    diceDom.src = "dice-" + diceNumber + ".png";

    // буусан тоо нь нэгээс ялгаатай бол идэвхитэй тоглогчийн ээлжиийн оноог нэмэгдүүлнэ
    if (diceNumber !== 1) {
        // 1-ээс ялгаатай тоо буулаа. буусан тоог тоглогчид нэмж өгнө
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {
        // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө

        // энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно
        roundScore = 0;
        document.getElementById("current-" + activePlayer).textContent = 0;

        // Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ
        // хэрэв идэвхитэй тоглогч нь 0 байвал идэвхитэй тоглогчийг 1 болго
        // Үгүй бол идэвхитэй тоглогчийг 0 болго

        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        // if (activePlayer === 0) {
        //     activePlayer = 1;
        // } else {
        //     activePlayer = 0;
        // }

        // Улаан цэгийг шилжүүлэх
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
    }
});