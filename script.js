        // Maraton Guayerd -  Intro a la Programacion con JS

// Los ejercicios presentan una dificultad incremental. Es conveniente avanzar en orden.

// Cuando resolves uno, comentar las líneas del mismo y arrancar con el siguiente.

// Buena suerte!!!


// Pedir nombre al usuario y saludarlo. Pasar el texto a Mayúsculas y a Minúsculas. Mostrar ambos en pantalla.
        // let nombre=prompt("Ingrese un nombre");
        //         function saludo(nombre) {
        //             console.log(`Hola como estas ${nombre}`.toLowerCase());
        //             console.log(`Hola como estas ${nombre}`.toUpperCase());
                
        //         }
        //         saludo(nombre)

//  Pedir al usuario dos números y mostrar la suma y resta de ellos. Para la resta, restar siempre al más grande el más chico.

        // let n1=parseInt(prompt("ingrese el primer numero"));
        // let n2=parseInt(prompt("ingrese el segundo numero"));

        // function operaciones(n1,n2) {
        //         suma=n1 + n2
        //         if (n1>n2) {
        //                 resta=n1-n2
        //         }else{
        //                 resta=n2-n1
        //         }
        // alert(`La suma es igual a ${suma} y la resta es igual a ${resta}`)
        // }
        // operaciones(n1,n2)
// Ingresar un texto. Preguntar si quiere ver el resultado en pantalla (alert) o consola (console.log). Pasar el texto a MAYUSCULA y mostrar donde corresponda.

        // let texto= prompt("ingrese un texto por favor");
        // let ver=parseInt(prompt("Por donde quiero ver el texto: \n1)Alert\n2)Console.log"))

        // if (ver===1) {
        //         alert(texto.toUpperCase())
        // } else {
        //         console.log(texto.toUpperCase())
        // }

//  Calculadora. Pedir ingresar dos números. Luego ingresar una operación (SUMA/RESTA/MULTI/DIV/POTENCIA). Realizar la operación y mostrar el resultado en pantalla.
        //  let n1=parseInt(prompt("ingrese el primer numero"));
        //  let n2=parseInt(prompt("ingrese el segundo numero"));
        //  let operaciones=parseInt(prompt("¿Que operacion quiere realizar?\n1)Suma\n2)Resta\n3)Multiplicacion\n4)division\n5)Potencia"))

        //  switch (operaciones) {
        //          case 1:
        //                alert(n1+n2)  
        //                  break;
        //         case 2:
        //                alert(n1-n2)  
        //                  break;
        //         case 3:
        //                alert(n1*n2)  
        //                 break;  
        //         case 4:
        //                 if(n1!=0&& n2!=0){
        //                 alert(n1/n2)
        //                 }else{
        //                 alert("No se puede dividir por 0")
        //                 }
        //                 break;
        //         case 5:
        //               alert(Math.pow(n1,n2))  
        //                 break;
        //          default:
        //               alert("opcion invalida, intente otra vez")
        //                  break;
        //  }

//  Vamos reutilizar la calculadora del punto 5. Pero esta vez, luego de mostrar el resultado, vamos a preguntar al usuario si desea hacer otra operación o terminar. Si quiere seguir operando, volvemos a pedir valores, operación y mostrar resultado HASTA que nos diga que no quiere continuar.
// Extra: investigar/googlear la función de Javascript "confirm"
        // let cortar;
        // while (cortar!=false) {
        //          let n1=parseInt(prompt("ingrese el primer numero"));
        //          let n2=parseInt(prompt("ingrese el segundo numero"));
        //          let operaciones=parseInt(prompt("¿Que operacion quiere realizar?\n1)Suma\n2)Resta\n3)Multiplicacion\n4)division\n5)Potencia"))

        //          switch (operaciones) {
        //                  case 1:
        //                        alert(n1+n2)  
        //                          break;
        //                 case 2:
        //                        alert(n1-n2)  
        //                          break;
        //                 case 3:
        //                        alert(n1*n2)  
        //                         break;  
        //                 case 4:
        //                         if(n1!=0&& n2!=0){
        //                         alert(n1/n2)
        //                         }else{
        //                         alert("No se puede dividir por 0")
        //                         }
        //                         break;
        //                 case 5:
        //                       alert(Math.pow(n1,n2))  
        //                         break;
        //                  default:
        //                       alert("opcion invalida, intente otra vez")
        //                          break;
        //          }
        //           cortar= confirm("Desea seguir?")
                
        // }

//  Agregar alumnos/as a un curso. Vamos a pedirle al usuario que ingrese nombres de alumnos/as para el nuevo curso. Continuar guardando nombres HASTA que el usuario ingrese SALIR. Mostrar todos los nombres en pantalla. 
        // let array=[];
        // let alumnos;
        //  function curso() {
        //     while (alumnos!="exit"){
        //         array.push(alumnos);
        //         alumnos= prompt("Ingrese los nombre de los alumnos para el curso, precione salir para finalizar proceso")
                
        //     } alert(`Los nombre de los alumnos son ${array}`)
        // }
        // curso(alumnos)

//  Dado el siguiente array de nombres, recorrerlo y mostrar en pantalla: Indice (posición) y Nombre con la primera letra en mayúscula.

        //         const ej7Nombres = ["goku","mario","melchor","mafalda","cacho","hermione","tony","pappo","leia","homero"];
        //         function heroes(ej7Nombres) {
        //                 for (let i = 0; i < ej7Nombres.length; i++) {
        //                   alert(`En la posicion ${i} esta ${ ej7Nombres[i].charAt(0).toUpperCase() + ej7Nombres[i].slice(1)}`);
                                
        //                 }
        //         }
        //        heroes(ej7Nombres)

//  Para una veterianaria. (Descomentar el codigo) dado el siguiente array de nombres de mascotas completar el código con las  siguentes reglas de negocio:
// - Si el nombre tiene más de 6 caracteres, informar: "Nombre largo"
// - Si tiene menos o es igual a 3 caracteres, informar: "Nombre corto"
// - Si es igual a "Fido" o "Gertrudis", informar: "Hay que vacunar contra la rabia"
// - Si es igual a "Tuerca", informar: "Entregar alimento balanceado"
        //  const ej8Mascotas = ["Tuerca","Ramshanaram","Gertrudis","Kat","Fido","Lo","Loko","MAX"];

        //  function perros(ej8Mascotas) {
        //          for (let i = 0; i < ej8Mascotas.length; i++) {
        //                 if(ej8Mascotas[i]==="Gertrudis"){
        //                         alert("Hay que vacunar contra la rabia")
        //                 }
        //                 else if (ej8Mascotas[i].length>6 ) {
        //                          alert("Nombre largo")
        //                 }else if (ej8Mascotas[i].length<=3) {
        //                         alert("Nombre corto")
        //                 }else if (ej8Mascotas[i]==="Fido" ) {
        //                         alert("Hay que vacunar contra la rabia")
        //                 }else if (ej8Mascotas[i]==="Tuerca") {
        //                         alert("Entregar alimento balanceado")
        //                 }else if(ej8Mascotas[i]==="Gertrudis" && ej8Mascotas[i].length>6){
        //                         alert("Hay que vacunar contra la rabia")
        //                 }
                        
        //          }
        //  }
        // perros(ej8Mascotas)

//  Un restaurant desea mejorar su sistema de reserva para mostrar a los clientes un aproximado de costos. 
// - Cada menor de edad pagará el menú $450 y cada adulto, $700. 
// - Si el grupo tiene más de 4 adultos, se hará un 10% al total de la factura. 
// Mostrar por pantalla la cantidad de comensales y el costo total a pagar. 
        //  const ej9restaurant = [25,17,18,44,12,9,36,50]
        // let cantidadMenor=0;
        // let cantidadMayor=0;


        // function menor(cantidadMenor) {
        //         return 450*cantidadMenor
        // }

        // function adulto(cantidadAdulto) {
        //         return 700 * cantidadAdulto
        // }

        // function restaurant(ej9restaurant) {
        //         for (let i = 0; i < ej9restaurant.length; i++) {
        //                 if (ej9restaurant[i]>=18) {
        //                     cantidadMayor++   
                                
        //                 }else{
        //                     cantidadMenor++
        //                 }
                
        //         } if (cantidadMayor>4) {
        //                 alert(`El descuento es de ${total = (adulto(cantidadMayor)+ menor(cantidadMenor))*0.1}$\nLa cantidad de comensales es de ${ej9restaurant.length} Personas\nEl monto que le mesa ${(adulto(cantidadMayor)+ menor(cantidadMenor))}\nComo son mas de 4 adulto el total es ${(adulto(cantidadMayor)+ menor(cantidadMenor)) - total}`)  
        //                  }else{
        //                  alert(`La cantidad de comensales es de ${ej9restaurant.length} Personas\nEl monto que le mesa ${(adulto(cantidadMayor)+ menor(cantidadMenor))}`)  
        //         }
        //       }   
        //      restaurant(ej9restaurant) 


// De un consultorio médico nos piden automatizar el proceso de recepción de los pacientes. 
//   Para ello:
//   - Ingresar código de paciente (Number XXX, 3 dígitos de 1 a 999).
//   - Si el código ingresado esta entre 1 y 99, es un paciente VIP.
//     - Preguntarles "Como valoran la calidad del servicio? (1..10)". Guardar el resultado ingresado.
//     - Agregar el código de paciente adelante en la cola (array) de turnos
//   - Si el código ingresado esta entre 100 y 500, es un paciente de prepaga.
//     - Agregar el código de paciente al final de la cola (array) de turnos
//   - Si el código ingresado esta entre 501 y 999, es un paciente nuevo.
//     - Preguntarles "Desea pasarse a VIP?". Si la respuesta es afirmativa, guardar el código de paciente.
//     - Agregar el código de paciente al final de la cola (array) de turnos
    
//   - Si todos los pacientes fueron ingresados, informar en pantalla:
//     - Calidad del servicio VIP. Informar valor promedio, valor máximo y valor mínimo.
//     - Ingreso al consultorio: Mostrar en pantalla el orden de ingreso x código de paciente.
//     - Pasarse a VIP: Mostrar en pantalla todos los códigos de pacientes que desean ser VIP
  
//   - Nota: Escribir código con funciones para facilitar su lectura.
