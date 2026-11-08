
var MUSIQUES=[
  ["Please Me  Cardi B ft Bruno Mars","musique1.mp3"],
  ["Right By My Side Nicki Minaj ft Chris Brown","musique2.mp3"],
  ["Je tombe aussi Cysoul","musique3.mp3"],
  ["Get Into It Yuh Doja Cat ","musique4.mp3"],
  ["Justin Timberlake Mirrors","musique5.mp3"],
  ["WAA Santrinos Raphael feat Zeynab","musique6.mp3"]
];

/* 2. ALBUM : noms des fichiers (dans assets/photos/ et assets/videos/). Tu peux changer les noms et les extensions. */
var PHOTOS=["photo1.jpg","photo2.jpg","photo3.jpg","photo4.jpg","photo5.jpg","photo6.jpg","photo7.jpg","photo8.jpg","photo9.jpg","photo10.jpg"];
var VIDEOS=["video1.mp4","video2.mp4","video3.mp4","video4.mp4","video5.mp4","video6.mp4","video7.mp4","video8.mp4","video9.mp4","video10.mp4"];

/* 3. VITESSES : plus petit = plus lent */
var VITESSE_ALBUM=0.4;   /* défilement de l'album : 0.2 très lent, 0.4 doux, 0.8 rapide */
var VITESSE_COEURS=0.15;  /* cœurs de la page "univers" : 0.15 très lent, 0.3 doux, 1 = ancienne vitesse */

/* 4. MOTS D'AMOUR affichés quand elle touche un cœur */
var MOTS_D_AMOUR=["Tu es la plus belle chose qui me soit arrivée.","Tu es ma jannati.","La lumière de mon monde.","Je t'aime plus qu'hier et moins que demain.","Tu es mon étoile préférée.","Ma maison, c'est toi.","Merci d'être toi.","Dans tes bras, le temps s'arrête.","Tu rends ma vie plus douce.","Mon cœur t'a choisie, et il ne regrette rien.","Mon plus beau cadeau.","Bibi je t'aime.","Mon oasis.","Ma force et ma paix.","Je t'aime ma femme, pour toujours.","Mon rêve devenu réalité.","Ta voix est ma mélodie préférée🤤.","Happy bithday my Queen.","My univers."];

/* 5. LETTRE FINALE (\n = retour à la ligne, \n\n = ligne vide) */
var LETTRE="Bibi,\n\nAujourd'hui, c'est ton jour🥳, et je souhate que ton futur tourne comme une boucle infinie de sourires, de surprises et de plein plein d'amour, la plus grande dose venant bien sûr de moi😌.\n\nTu es entrée dans ma vie comme une lumière douce, au moment où mon coeur tournais en mode économie d'energie et depuis, tout est devenu plus beau, tu est defenue le fichier CSS de mo exitence🥹. Ton rire, ta gentillesse, ta force... tout en toi me rends meilleur.\n\nMerci d'être à mes côtés, face aux bugs de la vie comme dans ses plus belles mise à jour. A toi, je me sens chez moi, partout.\n\nEncore que cette nouvelle année te print(\"la joie, la santé, la réussite et tous les rêves que ton cœur garde en secret\"). Je veux en être le témoin, et le complice, chaque jour.\n\nTu es mon univers, ma paix et mon plus beau cadeau.\n\nJoyeux anniversaire, ma femme. Je t'aime.\n\nAvec tout mon amour, ton canard qui t'adore. ❤️";


var CFG={
  tracks:MUSIQUES.map(function(m){return{t:m[0],f:'assets/music/'+m[1]}}),
  photos:PHOTOS,videos:VIDEOS,albumSpeed:VITESSE_ALBUM,heartsSpeed:VITESSE_COEURS,
  colors:['#ff4d8d','#ff7eb6','#ffd166','#b79bff','#7b5cff','#ffffff'],
  hearts:['#ff4d8d','#7b5cff','#ffd166','#ff7eb6','#b79bff','#ff2e63'],
  loveWords:MOTS_D_AMOUR,letter:LETTRE
};
function $(i){return document.getElementById(i)}