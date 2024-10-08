/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/

/*------------------------ Cached Element References ------------------------*/
const Lzero = document.querySelector(".L0")
const Rzero = document.querySelector(".R0")
const Lone = document.querySelector(".L1")
const Rone = document.querySelector(".R1")
const Ltwo = document.querySelector(".L2")
const Rtwo = document.querySelector(".R2")
const Lthree = document.querySelector(".L3")
const Rthree = document.querySelector(".R3")
const Lfour = document.querySelector(".L4")
const Rfour = document.querySelector(".R4")
const Lfive = document.querySelector(".L5")
const Rfive = document.querySelector(".R5")
const divPc0 = document.querySelector(".pc0")
const divPc1 = document.querySelector(".pc1")
const divPc2 = document.querySelector(".pc2")
const divPc3 = document.querySelector(".pc3")
const divPc4 = document.querySelector(".pc4")
constdivgPc5 = document.querySelector(".pc5")
const divPly0 = document.querySelector(".player0")
const divPly1 = document.querySelector(".player1")
const divPly2 = document.querySelector(".player2")
const divPly3 = document.querySelector(".player3")
const divPly4 = document.querySelector(".player4")
const divPly5 = document.querySelector(".player5")
const imgPc0 = document.querySelector(".pc0img")
const imgPc1 = document.querySelector(".pc1img")
const imgPc2 = document.querySelector(".pc2img")
const imgPc3 = document.querySelector(".pc3img")
const imgPc4 = document.querySelector(".pc4img")
const imgPc5 = document.querySelector(".pc5img")
const imgPly0 = document.querySelector(".plyrc0img")
const imgPly1 = document.querySelector(".plyrc0img")
const imgPly2 = document.querySelector(".plyrc0img")
const imgPly3 = document.querySelector(".plyrc0img")
const imgPly4 = document.querySelector(".plyrc0img")
const imgPly5 = document.querySelector(".plyrc0img")
/*-------------------------------- Functions --------------------------------*/
// change the image by ID
// function changeImageSrc(newSrc) {
//     var image = document.getElementById('imageId');
//     image.src = newSrc;
//   }

// dynamic image changer function
// Lzero.addEventListener('click', function() {
//     changeImageSrc('new-image.jpg');
//   });

// if image is missed
// image.alt = 'New image description';

// Adding an event listener for errors
// image.onerror = function() {
//   // Handle the error, perhaps set a default image
//   this.src = 'default-image.jpg';
// };

const leftClick = ()=>{
    console.log("Left Zero")
}
/*----------------------------- Event Listeners -----------------------------*/
Lzero.addEventListener("click",leftClick)
 
