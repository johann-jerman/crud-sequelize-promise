// let img = [
//     [255,255,255],[4,12,14],[4,12,14],[4,12,14],[4,12,14],[4,12,14],[4,12,14],[4,12,14],[4,12,14],[4,12,14],[4,12,14],[4,12,14],[255,255,255]
//     ,[4,12,14],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[4,12,14], 
// ]

// for (let i = 0; i < img.length; i++) {
//     let caja = document.write('<div class="caja"></div>')
//     for (let j = 0; j < img[i].length; j++) {
        
//     }
// }

let img = [  [255,255,255],[4,12,14],[4,12,14],[4,12,14],[4,12,14],[4,12,14],[4,12,14],[4,12,14],[4,12,14],[4,12,14],[4,12,14],[4,12,14],[255,255,255],
// salto de dinea
  [4,12,14],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[4,12,14],
// salto de dinea
  [4,12,14],[113,165,152],[206,253,209],[206,253,209],[206,253,209],[206,253,209],[206,253,209],[206,253,209],[206,253,209],[206,253,209],[206,253,209],[113,165,152],[4,12,14],
// salto de dinea
  [4,12,14],[113,165,152],[206,253,209],[206,253,209],[206,253,209],[206,253,209],[206,253,209],[206,253,209],[206,253,209],[206,253,209],[206,253,209],[113,165,152],[4,12,14],
// salto de dinea
  [4,12,14],[113,165,152],[206,253,209],[4,12,14],[206,253,209],[206,253,209],[206,253,209],[206,253,209],[206,253,209],[4,12,14],[206,253,209],[113,165,152],[4,12,14],
// salto de dinea
  [4,12,14],[113,165,152],[206,253,209],[206,253,209],[206,253,209],[4,12,14],[4,12,14],[4,12,14],[206,253,209],[206,253,209],[206,253,209],[113,165,152],[4,12,14],
// salto de dinea
  [4,12,14],[113,165,152],[206,253,209],[206,253,209],[206,253,209],[206,253,209],[206,253,209],[206,253,209],[206,253,209],[206,253,209],[206,253,209],[113,165,152],[4,12,14],
// salto de dinea
  [4,12,14],[113,165,152],[206,253,209],[206,253,209],[206,253,209],[206,253,209],[206,253,209],[206,253,209],[206,253,209],[206,253,209],[206,253,209],[113,165,152],[4,12,14],
// salto de dinea
  [4,12,14],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[4,12,14],
// salto de dinea
  [4,12,14],[113,165,152],[34,57,49],[34,57,49],[34,57,49],[34,57,49],[34,57,49],[113,165,152],[113,165,152],[29,6,157],[113,165,152],[113,165,152],[4,12,14],
// salto de dinea
  [4,12,14],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[4,12,14],
// salto de dinea
  [4,12,14],[113,165,152],[113,165,152],[229,203,80],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[4,12,14],
// salto de dinea
  [4,12,14],[113,165,152],[229,203,80],[229,203,80],[229,203,80],[113,165,152],[113,165,152],[103,230,81],[113,165,152],[93,196,211],[113,165,152],[113,165,152],[4,12,14],
// salto de dinea
  [4,12,14],[113,165,152],[113,165,152],[229,203,80],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[216,47,90],[113,165,152],[113,165,152],[113,165,152],[4,12,14],
// salto de dinea
  [4,12,14],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[113,165,152],[4,12,14],
// salto de dinea
  [255,255,255],[4,12,14],[4,12,14],[4,12,14],[4,12,14],[4,12,14],[4,12,14],[4,12,14],[4,12,14],[4,12,14],[4,12,14],[4,12,14],[255,255,255],
];

let contenedor = document.getElementById("contenedor");
for (let i = 0; i < img.length; i++) {
  
    if (i % 13 == 0 && i != 0) {
        let caja = document.createElement("div");
        caja.className = "salto";
        caja.style.backgroundColor = "rgb(1, 1, 74)";
        contenedor.appendChild(caja);
          
    }  
  
    let caja = document.createElement("div");
    caja.className = "caja";
    caja.style.backgroundColor = "rgb(" + img[i][0] + "," + img[i][1] + "," + img[i][2] + ")";
    contenedor.appendChild(caja);
  
}