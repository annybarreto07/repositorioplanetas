var usuario = prompt ("Cual es tu peso?");
var planeta = parseInt(prompt ("Elige un planeta.\n1 Es mercurio\n2 Es venus\n3 Es tierra\n4 Es marte\n5 Es jupiter\n6 Es saturno\n7 Es urano\ n8 Es neptuno")); 
var peso = parseInt(usuario);
var g_mercurio = 3.7;
var g_venus = 8.9;
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var g_saturno = 10.4;
var g_urano = 8.9;
var g_neptuno = 11.15;
var peso_final;
var nombre ="";
if(planeta ==1)
{
 peso_final=peso*g_mercurio/g_tierra;
 nombre = "mercurio";
}
else if(planeta ==2)
{
    peso_final=peso*g_mercurio/g_tierra;
    nombre = "venus";
}  
else if(planeta ==3)
{
    peso_final=peso*g_mercurio/g_tierra;
    nombre = "tierra";
}  
else if(planeta ==4)
{
    peso_final=peso*g_mercurio/g_tierra;
    nombre = "marte";
}  
else if(planeta ==5)
{
    peso_final=peso*g_mercurio/g_tierra;
    nombre = "jupiter";
}  
else if(planeta ==6)
{
    peso_final=peso*g_mercurio/g_tierra;
    nombre = "sautrno";
}  
else if(planeta ==7)
{
    peso_final=peso*g_mercurio/g_tierra;
    nombre = "urano";
}  
else if(planeta ==8)
{
    peso_final=peso*g_mercurio/g_tierra;
    nombre = "neptuno";
}  
else 
{
    peso_final=1000000;
    nombre = "krypton";
}  
    
peso_final=parseInt(peso_final);
document.write("Tu peso en "+ nombre + " es <strong>" + peso_final + " kilos </strong");