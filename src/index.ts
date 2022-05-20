let nombreAlumno = document.getElementById("alumno");
let notaPractica = document.getElementById("practico");
let notaProblema = document.getElementById("problema");
let notaTeorica = document.getElementById("teorico");
let buttonOk = document.getElementById("buttonOk");

buttonOk.addEventListener("click", () => {
  let alumno: string = String(nombreAlumno.value);
  let nota1: number = Number(notaPractica.value);
  let nota2: number = Number(notaProblema.value);
  let nota3: number = Number(notaTeorica.value);
  let notaFinal: number = 0;
  if (alumno !== "") {
    console.log(alumno);
    if (
      nota1 > -1 &&
      nota1 < 11 &&
      nota2 > -1 &&
      nota2 < 11 &&
      nota3 > -1 &&
      nota3 < 11
    ) {
      notaFinal = nota1 * 0.1 + nota2 * 0.5 + nota3 * 0.4;
      console.log("La nota final de " + alumno + " es: " + notaFinal);
    } else {
      console.log(
        "Una de las notas no cumple con los valores normales de calificacion (0 - 10)",
        "Verifique que los valores ingresados sean correctos y vuelva a calcular la Nota Promedio Final.",
        "Nota Practica ingresada: " + nota1,
        "Nota Problema ingresada: " + nota2,
        "Nota Teorica ingresada: " + nota3
      );
    }
  } else {
    console.log("No se agrego el Nombre del alumno");
  }
});
