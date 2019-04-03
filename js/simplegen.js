var canvas = document.getElementById('logo_image');
var canvas2 = document.getElementById('fav_image');

  canvas.width  = 5;
  canvas.height = 5;
  canvas2.width = 5;
  canvas2.height = 5;
  

var ctx = logo_image.getContext("2d");
var ctx2 = fav_image.getContext("2d");
var txt = "";
var txt2 = "";
var ico_b = document.getElementById('ico').value;
var ico = String.fromCharCode(parseInt(ico_b,16))
var clr = "#000000"
var fnt = "Arial"
var fnt2 = "Arial"
var clr2 = "#ffffff"
var off_1 = 0;
var off_2 = 0;

document.getElementById('ico').oninput = function() {
  ico_b = document.getElementById('ico').value;
  ico = String.fromCharCode(parseInt(ico_b,16));
  renderImage();
}

document.getElementById('txt').oninput = function() {
  txt = document.getElementById('txt').value;
  renderImage();
}

document.getElementById('txt2').oninput = function() {
  txt2 = document.getElementById('txt2').value;
  renderImage();
}

document.getElementById('fx1').onclick = function() {
  if (off_1 !== 3) {
  off_1 = 3;
  renderImage();
  } else {
  off_1 = 0;
  renderImage();
  }
}

document.getElementById('fx2').onclick = function() {
  clr = document.getElementById('clr').value;
  clr2 = hexToComplimentary(clr);
  document.getElementById('clr2').value = clr2;
  renderImage();
}

document.getElementById('clr').oninput = function() {
  clr = document.getElementById('clr').value;
  renderImage();
}

document.getElementById('clr2').oninput = function() {
  clr2 = document.getElementById('clr2').value;
  renderImage();
}

var fonts = ["Arial","Montez","Lobster","Josefin Sans","Shadows Into Light","Pacifico","Amatic SC", "Orbitron", "Rokkitt","Righteous","Dancing Script","Bangers","Chewy","Sigmar One","Architects Daughter","Abril Fatface","Covered By Your Grace","Kaushan Script","Gloria Hallelujah","Satisfy","Lobster Two","Comfortaa","Cinzel","Courgette","Annie Use Your Telescope","Baloo","Bowlby One SC","Bungee Inline","Cabin Sketch","Caveat","Contrail One","Damion","Economica","Fascinate Inline","Faster One","Fredericka the Great","Gabriela","Just Another Hand","Kodchasan","Love Ya Like A Sister","Megrim","Monoton","Mouse Memoirs","Podkova","Pompiere","Quicksand","Reenie Beanie","Rokkitt","Six Caps","Source Sans Pro","Special Elite","Spicy Rice","VT323","Wire One"];
var string = "";
var select = document.getElementById("select")
var select2 = document.getElementById("select2")
for(var a = 0; a < fonts.length ; a++){
	var opt = document.createElement('option');
	opt.value = opt.innerHTML = fonts[a];
	opt.style.fontFamily = fonts[a];
	select.add(opt);
}
for(var a = 0; a < fonts.length ; a++){
	var opt = document.createElement('option');
	opt.value = opt.innerHTML = fonts[a];
	opt.style.fontFamily = fonts[a];
	select2.add(opt);
}

document.getElementById('select').oninput = function() {
  fnt = document.getElementById('select').value;
  fontChange();
  renderImage();
}

document.getElementById('select2').oninput = function() {
  fnt2 = document.getElementById('select2').value;
  fontChange2();
  renderImage();
}

function fontChange(){
	var x = document.getElementById("select").selectedIndex;
  var y = document.getElementById("select").options;
	document.body.insertAdjacentHTML("beforeend", "<style> #text{ font-family:'"+y[x].text+"';}"+"#select{font-family:'"+y[x].text+"';</style>");
}

function fontChange2(){
	var x = document.getElementById("select2").selectedIndex;
  var y = document.getElementById("select2").options;
	document.body.insertAdjacentHTML("beforeend", "<style> #text{ font-family:'"+y[x].text+"';}"+"#select2{font-family:'"+y[x].text+"';</style>");
}

function renderImage() {

document.fonts.ready.then(_ => {
  
  ctx.font = '900 48px "Font Awesome 5 Free"';
  var ico_w = ctx.measureText(ico).width;
  
  ctx2.font = '900 48px "Font Awesome 5 Free"';
  var ico_w2 = ctx2.measureText(ico).width;
  
  ctx.font = 'bold 48px '+ fnt;
  var txt_w = ctx.measureText(txt).width;
  
  ctx.font = 'bold 48px '+ fnt2;
  var txt2_w = ctx.measureText(txt2).width;
  
  canvas.width  = ico_w + txt_w + txt2_w + 15;
  canvas.height = 65;
  canvas2.width = ico_w;
  canvas2.height = 65;
  
  
  ctx.font = '900 48px "Font Awesome 5 Free"';
  ctx.fillStyle = clr2;
  ctx.fillText(ico, off_1, 50 + off_1);
  ctx.font = 'bold 48px '+ fnt;
  ctx.fillStyle = clr2;
  ctx.fillText(txt, ico_w + off_1 ,50 + off_1);
  ctx.font = '900 48px "Font Awesome 5 Free"';
  ctx.fillStyle = clr;
  ctx.fillText(ico, 0 , 50 );
  ctx2.font = '900 48px "Font Awesome 5 Free"';
  ctx2.fillStyle = clr;
  ctx2.fillText(ico, 0, 50);
  ctx.font = 'bold 48px '+ fnt;
  ctx.fillStyle = clr;
  ctx.fillText(txt, ico_w, 50);
  
  if (txt2 != "") {
  ctx.strokeStyle = clr;
  ctx.moveTo(ico_w + 0 + txt_w + 2, 50);
  ctx.lineTo(ico_w + 0 + txt_w + 2, 15);
  ctx.arcTo(ico_w + 0 + txt_w + 2, 12, ico_w + 0 + txt_w + 5, 12, 3);
  ctx.lineTo(ico_w + 0 + txt_w + 2 + txt2_w + 3, 12);
  ctx.arcTo(ico_w + 0 + txt_w + 2 + txt2_w + 6, 12, ico_w + 0 + txt_w + 2 + txt2_w + 6, 15, 3);
  ctx.lineTo(ico_w + 0 + txt_w + 2 + txt2_w + 6, 50);
  ctx.arcTo(ico_w + 0 + txt_w + 2 + txt2_w + 6, 53, ico_w + 0 + txt_w + 2 + txt2_w + 3, 53, 3);
  ctx.lineTo(ico_w + 0 + txt_w + 5, 53);
  ctx.arcTo(ico_w + 0 + txt_w + 2, 53, ico_w + 0 + txt_w + 2, 50, 3);
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.fillStyle = clr;
  ctx.fillRect(ico_w + 0 + txt_w + 2, 12,txt2_w + 6, 40);
  }
  
  ctx.font = 'bold 48px '+ fnt2;
  ctx.fillStyle = clr2;
  ctx.fillText(txt2, ico_w + 0 + txt_w + 5,50); 



})
}

var button = document.getElementById('fav-download');
button.addEventListener('click', function (e) {
    var dataURL = canvas2.toDataURL('image/png');
    button.href = dataURL;
});
var button2 = document.getElementById('logo-download');
button2.addEventListener('click', function (e) {
    var dataURL2 = canvas.toDataURL('image/png');
    button2.href = dataURL2;
});
var button3 = document.getElementById('svg-download');
button3.addEventListener('click', function (e) {
    var dataURL3 = canvas.toDataURL('image/svg');
    button3.href = dataURL3;
});

/* hexToComplimentary : Converts hex value to HSL, shifts
 * hue by 180 degrees and then converts hex, giving complimentary color
 * as a hex value
 * @param  [String] hex : hex value  
 * @return [String] : complimentary color as hex value
 */
function hexToComplimentary(hex){

    // Convert hex to rgb
    // Credit to Denis http://stackoverflow.com/a/36253499/4939630
    var rgb = 'rgb(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length/3 + '})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16); }).join(',') + ')';

    // Get array of RGB values
    rgb = rgb.replace(/[^\d,]/g, '').split(',');

    var r = rgb[0], g = rgb[1], b = rgb[2];

    // Convert RGB to HSL
    // Adapted from answer by 0x000f http://stackoverflow.com/a/34946092/4939630
    r /= 255.0;
    g /= 255.0;
    b /= 255.0;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2.0;

    if(max == min) {
        h = s = 0;  //achromatic
    } else {
        var d = max - min;
        s = (l > 0.5 ? d / (2.0 - max - min) : d / (max + min));

        if(max == r && g >= b) {
            h = 1.0472 * (g - b) / d ;
        } else if(max == r && g < b) {
            h = 1.0472 * (g - b) / d + 6.2832;
        } else if(max == g) {
            h = 1.0472 * (b - r) / d + 2.0944;
        } else if(max == b) {
            h = 1.0472 * (r - g) / d + 4.1888;
        }
    }

    h = h / 6.2832 * 360.0 + 0;

    // Shift hue to opposite side of wheel and convert to [0-1] value
    h+= 180;
    if (h > 360) { h -= 360; }
    h /= 360;

    // Convert h s and l values into r g and b values
    // Adapted from answer by Mohsen http://stackoverflow.com/a/9493060/4939630
    if(s === 0){
        r = g = b = l; // achromatic
    } else {
        var hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        };

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;

        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    r = Math.round(r * 255);
    g = Math.round(g * 255); 
    b = Math.round(b * 255);

    // Convert r b and g values to hex
    rgb = b | (g << 8) | (r << 16); 
    return "#" + (0x1000000 | rgb).toString(16).substring(1);
}  
