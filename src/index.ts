let nombreAlumno = document.getElementById("alumno");
let notaPractica = document.getElementById("practico");
let notaProblema = document.getElementById("problema");
let notaTeorica = document.getElementById("teorico");
let buttonOk = document.getElementById("buttonOk");

buttonOk.addEventListener("click", () => {
  let alumno: number = nombreAlumno.value;
  let nota1: number = Number(notaPractica.value);
  let nota2: number = Number(notaProblema.value);
  let nota3: number = Number(notaTeorica.value);
  let notaFinal: number = nota1 * 0.1 + nota2 * 0.5 + nota3 * 0.4;
  console.log("La nota final de " + alumno + " es: " + notaFinal);
});
