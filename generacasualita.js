var persone = ["Pupow", "e come suona la cassa oh", "cassa attiva", "io vi valorizzo chat", "Supersium",
 "holaa", "contacc","patriParty chat", "quel porco di homyatol", "quel porco del crystale", "hey siri quanti gradi ci sono a Rimini?",
"oanimal", "vado nel reparto scam", "di design", "spingere chat", "una spagnoletta di design", "vi leggo chat",
"le faccio la centrifuga", "maledetti sviluppatori", "sono su facetime", "bettate merde", "vivo a rimini dal 2005",
"ho 40 anni chat", "fate passare il playboy", "uscirà prossimamente un video", "nooo mi dissocioooo", "mi mette ansia",
"grazie brameil", "grazie armandopeto per questa gif", "italiana?", "single?", "sposata?", "maggiorenni?",
"io sono sempre onesto con voi", "che devo fare chat?", "verytimid", "ohh mai gadd", "ppporccoddio", "Pierino",
"mi state trollando", "chip m1"];

 

  window.onload = function(){
    getUfficialita();
  }

  function getUfficialita(){
    var randomPersone = persone[Math.floor(Math.random() * persone.length)];
   

  document.getElementById("dataOggiId").textContent = persone[Math.floor(Math.random() * persone.length)];
  
  }
  
