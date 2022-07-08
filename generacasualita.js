var persone = ["Pupow 🐶", "e come suona la cassa oh", "cassa attiva", "io vi valorizzo chat", "Supersium",
 "holaa ", "contacc","patriParty chat", "quel porco di homyatol 🐖", "quel porco del crystale 🐖", "hey siri quanti gradi ci sono a Rimini?🍎⌚",
"oanimal", "vado nel reparto scam 👮", "di design", "spingere chat", "una spagnoletta di design", "vi leggo chat",
"le faccio la centrifuga", "maledetti sviluppatori ", "sono su facetime 📱", "bettate merde", "vivo a rimini dal 2005",
"ho 40 anni chat 👴", "fate passare il playboy 🛴", "uscirà prossimamente un video", "nooo mi dissocioooo", "mi mette ansia",
"grazie brameil", "grazie armandopeto per questa gif", "italiana? 🇮🇹", "single? ", "sposata?💍", "maggiorenni?🔞",
"io sono sempre onesto con voi", "che devo fare chat?", "verytimid gurl", "ohh mai gadd", "ppporccoddio", "Pierino ",
"mi state trollando", "chip m1 🍎", "viva la figa", "ciuffo voglioso 👨‍🦱", "io non ho sponsor",
"stasera vado da julia", "no vabbè", "vi aggionrno su instagram ", "limone velocc", "da quanto tempo non baci un ragazzo?",
"ma che è dubai oo 🌃", "ma che è netflix oo", "ma chi è bred pitt?", "ma chi è enrique iglesias?", "che piccolaa 🐻",
"lo zaino? 🎒 ", "controlliamo il monopattino", "girate lo smartphone in orizzonatale 📱", "che qualitàà",
"4000mila kappabait per second", "apple watch serie 7 🍎", "vogliosi premiatemi ogni tanto", "accendiamo il faretto",
"e chi è rocky ò Barboun' 👊", ""];

 

  window.onload = function(){
    getUfficialita();
  }

  function getUfficialita(){
    var randomPersone = persone[Math.floor(Math.random() * persone.length)];
   

  document.getElementById("dataOggiId").textContent = persone[Math.floor(Math.random() * persone.length)];
  
  }
  
