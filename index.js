/*
var persona = {
    nombre: "kevin",
    profesion: "desarrollador"
};
let estringefiar = JSON.stringify(persona);
console.log(estringefiar)
console.log(typeof(estringefiar))
*/
async function obtenerDatos(){
    const response = await fetch("http://127.0.0.1:5500/Practica/JSONYOBJETOS/primer.json");
    
    //const json = await response.text();
    // el .json del final, hace lo mismo que JSON.parse(json)
    const json = await response.json();
    
    //console.log(JSON.parse(json))
    console.log(json)
    console.log(json.nombre)
    console.log(json.conocimientos)
    console.log(json.conocimientos[0])
    console.log(json.direccion.comuna)
    json.arregloDeObjetosExperiencia.forEach((element) => {
        console.log(element.empresa);
        console.log(element.anios);
    });
}   
obtenerDatos()