/* Lecteur partagé : la musique continue d'une page à l'autre */
(function(){var S=sessionStorage,a=new Audio(),i=+S.mi||0,bar;
function ui(){if(bar)return;bar=document.createElement('div');bar.id='mp';bar.innerHTML='<span id="mp-status" role="status" aria-live="polite"></span><button id="pp">⏸</button><button id="nx2">⏭</button>';document.body.appendChild(bar);
$('pp').onclick=function(){a.paused?start():a.pause()};$('nx2').onclick=function(){MP.play(i+1)}}
function status(message){ui();$('mp-status').textContent=message}
function reportError(error){console.error('Impossible de lire la musique "'+CFG.tracks[i].t+'".',error||a.error);status(error&&error.name==='NotAllowedError'?'Touchez la page pour autoriser le son.':'Musique illisible. Vérifiez le fichier audio.')}
function start(){a.play().catch(function(error){if(error.name==='NotAllowedError'){reportError(error);addEventListener('pointerdown',function(){start()},{once:true})}else if(!a.error)reportError(error)})}
a.onplay=function(){ui();$('mp-status').textContent='';$('pp').textContent='⏸'};
a.onpause=function(){if($('pp'))$('pp').textContent='▶'};
a.onended=function(){MP.play(i+1)};
a.onerror=function(){reportError(a.error)};
a.ontimeupdate=function(){S.t=a.currentTime};
window.MP={a:a,on:function(){return S.on==='1'},play:function(n){i=(n+CFG.tracks.length)%CFG.tracks.length;S.mi=i;S.on='1';S.t=0;status('Chargement…');a.src=CFG.tracks[i].f;start()}};
if(S.on==='1'){var t=+S.t||0;a.src=CFG.tracks[i].f;a.addEventListener('loadedmetadata',function(){a.currentTime=t},{once:true});start()}
})();
