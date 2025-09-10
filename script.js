function szamolas() {
  const letszam = parseInt(document.getElementById("letszam").value);
  const erkezes = new Date(document.getElementById("erkezes").value);
  const tavozas = new Date(document.getElementById("tavozas").value);


  const ejszakak = (tavozas - erkezes) / (1000 * 60 * 60 * 24);

  if (isNaN(ejszakak) || ejszakak <= 0) {
    document.getElementById("osszeg").innerText = "Hibás dátum!";
    return;
  }

 
  let ar = 10000;


  if (document.getElementById("tenger").checked) ar += 2500;
  if (document.getElementById("egyagyas").checked) ar += 2500;

  
  const osszeg = ar * letszam * ejszakak;

  document.getElementById("osszeg").innerText =
    `Fizetendő összeg: ${osszeg.toLocaleString()} Ft (${letszam} fő, ${ejszakak} éjszaka)`;
}
