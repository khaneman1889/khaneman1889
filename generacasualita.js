var persone = ["Pupow ๐ถ", "e come suona la cassa oh", "cassa attiva", "io vi valorizzo chat", "Supersium",
 "holaa ", "contacc","patriParty chat", "quel porco di homyatol ๐", "quel porco del crystale ๐", "hey siri quanti gradi ci sono a Rimini?๐โ",
"oanimal", "vado nel reparto scam ๐ฎ", "di design", "spingere chat", "una spagnoletta di design", "vi leggo chat",
"le faccio la centrifuga", "maledetti sviluppatori ", "sono su facetime ๐ฑ", "bettate merde", "vivo a rimini dal 2005",
"ho 40 anni chat ๐ด", "fate passare il playboy ๐ด", "uscirร  prossimamente un video", "nooo mi dissocioooo", "mi mette ansia",
"grazie brameil", "grazie armandopeto per questa gif", "italiana? ๐ฎ๐น", "single? ", "sposata?๐", "maggiorenni?๐",
"io sono sempre onesto con voi", "che devo fare chat?", "verytimid gurl", "ohh mai gadd", "ppporccoddio", "Pierino ",
"mi state trollando", "chip m1 ๐", "viva la figa", "ciuffo voglioso ๐จโ๐ฆฑ", "io non ho sponsor",
"stasera vado da julia", "no vabbรจ",  "limone velocc", "da quanto tempo non baci un ragazzo?",
"ma che รจ dubai oo ๐", "ma che รจ netflix oo", "ma chi รจ bred pitt?", "ma chi รจ enrique iglesias?", "che piccolaa ๐ป",
"lo zaino? ๐ ", "controlliamo il monopattino", "girate lo smartphone in orizzonatale ๐ฑ", "che qualitร ร ",
"4000mila kappabait per second", "apple watch serie 7 ๐", "vogliosi premiatemi ogni tanto", "accendiamo il faretto",
"e chi รจ rocky รฒ Barboun' ๐", "gnanuino sempre presente", "flo905 sempre tra  i primi a scrivere", "uuuh che manine ๐",
              "io non sono un gamer", "vi aggiorno dopo su intagram", "bravissima, 28 anni", "io ho un condom๐ ",
              "non ti รจ andata poi cosรฌ male"];

 

  window.onload = function(){
    getUfficialita();
  }

  function getUfficialita(){
    var randomPersone = persone[Math.floor(Math.random() * persone.length)];
   

  document.getElementById("dataOggiId").textContent = persone[Math.floor(Math.random() * persone.length)];
  
  }
  
