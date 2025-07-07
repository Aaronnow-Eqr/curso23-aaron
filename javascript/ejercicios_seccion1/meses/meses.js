let number = Number(prompt("Ingrese un número:"));
let meses = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo","Junio", "Julio", 
  "Agosto", "Septiembre", "Octubre","Noviembre", "Diciembre"
];

if (number >= 1 && number <= 12) {  
  alert("el mes es: " + [number - 1]);
} else {
  alert("Número no válido. Por favor, ingrese un número entre 1 y 12.");
}


/*
if (number >= 1 && number <= 12) {
  switch (number) {
    case 1:
      alert("Enero");
      break;
    case 2:
      alert("Febrero");
      break;
    case 3:
      alert("Marzo");
      break;
    case 4:
      alert("Abril");
      break;
    case 5:
      alert("Mayo");
      break;
    case 6:
      alert("Junio");
      break;
    case 7:
      alert("Julio");
      break;
    case 8:
      alert("Agosto");
      break;
    case 9:
      alert("Septiembre");
      break;
    case 10:
      alert("Octubre");
      break;
    case 11:
      alert("Noviembre");
      break;
    case 12:
      alert("Diciembre");
      break;
  }
}
  */