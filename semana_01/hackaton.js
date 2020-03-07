//ejercicio 0
var listaent=[-4 ,6 , 2 , 9, 12 , 60 , 10 ];
//console.log(listaent);

var array2=listaent.sort(function (a, b){
    return a - b;
})

function mayorvalor()
{
var mayor=array2[0];
return mayor;

}
//console.log(mayorvalor());

//ejercicio 1

function Empresa(nombre, direccion, telefono,nif) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.nif=nif
  }
  var vempresa = new Empresa("Empresa prueba", "Av. Javier prado4 44", "9345434","43");
//console.log(vempresa);
  function Cliente(nombre, direccion, telefono,correo) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.nif=correo
  }
  var vcliente= new Cliente("Cliente 01", "Av. Aviaciòn 22", "323232","prueba@prueba.com");
  //console.log(vcliente);


  function Detallefactura(descripcion, precio, cantidad) {
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantidad = cantidad;
    
  }

  var vdetallefactura01= new Detallefactura("detalle 01", 30, 3);
  var vdetallefactura02= new Detallefactura("detalle 01", 40, 2);
  var vdetallefactura03= new Detallefactura("detalle 01", 50, 4);
  var listadetalle = [vdetallefactura01,vdetallefactura02,vdetallefactura03];
  function calcularimportetotal(detalle)
  {
      var imptotal=0;
      detalle.forEach(element => {
    imptotal=imptotal +  element.precio * element.cantidad;
 });
 return  imptotal;
  }
  //console.log(calcularimportetotal(listadetalle));

  function informacionfactura(importetotal,tipoiva, formapago) {
    this.importetotal=importetotal;
    this.tipoiva=tipoiva;
    this.formapago=formapago;
    
  }
  var informacionfactura= new informacionfactura(0, "IGV", "Credito");

  function factura(empresa,cliente,detalle, informacionfactura) {
    this.empresa=empresa;
    this.cliente=cliente;
    this.detalle=detalle;  
    this.informacionfactura = informacionfactura;
    this.total=calcularimportetotal(listadetalle);
    
  }
  var vfactura= new factura(vempresa, vcliente, listadetalle,informacionfactura);

  vfactura.informacionfactura.importetotal=calcularimportetotal(listadetalle);
  //console.log(vfactura);


//ejercicio 2
var arrayejercicio2 = [];

console.log(arrayejercicio2);
const tamanio=arrayejercicio2.length;
for(var i=0; i<10;i++)
{
    arrayejercicio2[i]="nuevo elemento" + (i+1);
}
console.log("Parte 01 Ejercicio 02",arrayejercicio2);

var arraynombres=["Carlos","Pedro" ,"Juan" ];
arraynombres.push("Martin");
console.log("Parte 02 ejercicio 02",arraynombres);

//ejercicio 03

function calcularinversion(valor,periodo,tasa )
  {
      var inversion=0;
      inversion=valor*Math.pow(1+tasa/100,periodo);
 return  inversion;
  }
console.log("Ejercicio 03 inversión",calcularinversion(200,12,5));

//ejercicio 04
var arraymeses=["Enero","Febrero" ,"Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre" ];
//window.alert(arraymeses);
//ejercicio 05

//ejercicio 06

function Usuario(nombre, direccion, telefono,correo) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.nif=correo
  }
  var vusuario1= new Usuario("Usuario 01", "Av. los pinos", "9405045","prueba@prueba1.com");
  var vusuario2= new Usuario("Usuario 02", "Av. las flores", "999999","prueba@prueba2.com");
  var vusuario3= new Usuario("Usuario 03", "Av. los cuzco",  "888888","prueba@prueba3.com");
  var listausuario = [vusuario1,vusuario2,vusuario3];
  function verusuario(telefono )
  {
      var usuariol;
    listausuario.forEach(element => {
        if(element.telefono==telefono)
        usuariol= element;
        else
        rusuariol="";
    });
    return usuariol;
  }
console.log("ejercicio 06",verusuario("999999"));

//ejercicio 07

function Persona(nombre, talla, peso) {
    this.nombre = nombre;
    this.talla = talla;
    this.peso = peso;
   
  }

  var vpersona= new Persona("Martin", 1.70,  40.45);

  function calcularindicecorporal(ppersona )
  {
     var imc=0;
     imc=ppersona.peso/ppersona.talla;
    return imc;
  }
console.log(calcularindicecorporal(vpersona));

//ejercicio 08
var arrayidioma=[{
    idioma: "Español",texto: "Bienvenido al curso de React Native en PachaQtec",id_idioma: 1,},
    {idioma: "Ingles",texto: "Welcome to the React Native course at PachaQtec",id_idioma: 2,},
    {idioma: "Francés",texto: "Bienvenue dans le cours React Native chez PachaQtec",id_idioma: 3,},
    {idioma: "Italiano",texto: "Benvenuti al corso React Native presso PachaQtec",id_idioma: 4,},
    {idioma: "Portugués",texto: "Bem-vindo ao curso React Native na PachaQtec",id_idioma: 5,}]

    function vertextoidioma(idioma)
    {
        var textoidioma="";
        arrayidioma.forEach(element => {
          if(element.idioma==idioma)
          {
          textoidioma= element.texto;}   
      });
      return textoidioma;
    }
console.log("Ejercicio 08 Idioma",vertextoidioma("Italiano"));