// Тоглоомын бүх газарт ашиглагдах глобаль хувьсагчдыг энд зарлая

// тоглоом дууссан эсэхийг хадгалах хувьсагч
var isNewGame;
// аль тоглогч шоо шидэх вэ гэдгийг энд хадгална
var activePlayer;

// 2 тоглогчийн цуглуулсан оноонууд
var scores;

// идэвхитэй тоглогчийн цуглуулж байгаа ээлжийн оноо
var roundScore;

// шооны зургийг үзүүлэх эвентийг DOM-оос хайж олоод энд хадгалъя
var diceDom = document.querySelector(".dice");

// тоглоомыг эхлүүлэх дэлгэц цэвэрлэх
initGame();

function initGame() {
    // тоглоом эхэллээ гэдэг төлөвт оруулна
    isNewGame = true;

    // toglogchiin eeljiig hadgalah huwisagch, 1-r toglogchiig 0, 2-r toglogchiig 1 gej temdeglie
    activePlayer = 0;

    // toglogchdiin tsugluulsan onoog hadgalah huwisagch
    scores = [0, 0];

    // toglogchiin eeljindee tsugluulj baigaa onoog hadgalah huwisagch
    roundScore = 0;

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    // тоглогчдын нэрийг буцааж гаргах
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    document.querySelector(".player-0-panel").classList.add("active");

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

    diceDom.style.display = "none";
}

// шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function() {
    if (isNewGame) {
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
            document.getElementById(
                "current-" + activePlayer
            ).textContent = roundScore;
        } else {
            nextPlayer();
        }
    } else {
        alert("Тоглоом дууссан байна. START GAME товч дээр дарж шинээр эхлэнэ үү");
    }
});
// HOLD  товчны эвент листенер
document.querySelector(".btn-hold").addEventListener("click", function() {
    if (isNewGame) {
        // Уг тоглогчийн цуглуулсан ээлжний оноог глобаль оноон дээр нь нэмж өгнө
        scores[activePlayer] = scores[activePlayer] + roundScore;

        // Дэллгэц дээр оноог нь өөрчилнө
        document.getElementById("score-" + activePlayer).textContent =
            scores[activePlayer];

        diceDom.style.display = "none";

        // уг тоглогч хожсон эсэхийг (оноо нь 100-с их эсэх) шалгах
        if (scores[activePlayer] >= 100) {
            isNewGame = false;
            // ялагч гэсэн текстийг нэрнийх нь оронд гаргана
            document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";

            document
                .querySelector(".player-" + activePlayer + "-panel")
                .classList.add("winner");
            document
                .querySelector(".player-" + activePlayer + "-panel")
                .classList.remove("active");
        } else {
            nextPlayer();
        }
    } else {
        alert("Тоглоом дууссан байна. START GAME товч дээр дарж шинээр эхлэнэ үү");
    }
});

// энэ функц нь тоглох ээлжийг дараачийн тоглогч руу шилжүүлнэ
function nextPlayer() {
    // ээлжийн оноог нь 0 болгоно
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    // тоглогчийн ээлжийг солино
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
}

//  шинэ тоглоом эхлүүлэх товчний эвент листенер
document.querySelector(".btn-new").addEventListener("click", function() {
    initGame();
});