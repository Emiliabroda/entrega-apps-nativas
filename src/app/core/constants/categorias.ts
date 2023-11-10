import { Categoria } from "../interfaces/categorias";
export const CATEGORIAS: Categoria[] = [
    {
        nombre:'Hamburguesas',
        id:1,
        imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShYVTUxCVSRMQ7lK67GMqDxQT_CERSJL09RA&usqp=CAU',
        productos: [{
            nombre:'Hamburguesa bacon and cheddar con papas fritas.',
            precio: 2500,
            ingredientes: ["Doble Carne", " Panceta", " Chedar"],
            imagen: "https://as2.ftcdn.net/v2/jpg/04/09/02/65/1000_F_409026531_q1tQmZLGDXNQ9VP8ai3GwKVYdeYf2eSj.jpg",
            id: 1
        },
        {
            nombre:"Hamburguesa completa con papas fritas",
            precio: 2800,
            ingredientes: [ "doble carne", " Huevo"," Lechuga "," Tomate ", " cebolla"],
            imagen:"https://c8.alamy.com/compes/gjbbjd/chuleta-de-carne-de-hamburguesa-de-queso-huevo-papas-fritas-gjbbjd.jpg",
            id: 2
        },
        {
            nombre:"Hamburguesa simple con papas fritas",
            precio: 2000,
            ingredientes: ["Carne", " Tomate", " Lechuga"],
            imagen:"https://png.pngtree.com/background/20230411/original/pngtree-burger-french-fries-ketchup-fast-food-illustration-picture-image_2392047.jpg",
            id: 3
        },
        {
            nombre:"Hamburguesa pan negro con papas fritas",
            precio: 3000,
            ingredientes:["Carne", " lechuga", " Tomate", " cheddar", " pan negro"],
            imagen:"https://c8.alamy.com/compes/kf998x/negro-hamburguesa-con-papas-fritas-aislado-sobre-fondo-negro-vista-anterior-kf998x.jpg",
            id: 4
        }]
    },
    {
        nombre:'Pizzas', 
        id:2, 
        imgUrl:'https://images.ctfassets.net/n7hs0hadu6ro/1O0Be1dObiQBm17GQJHLj8/3fde720730f0b3616ecf5a82b928e7f9/pizza-a-domicilio-cerca-de-mi.jpg?w=1920&h=1281&fl=progressive&q=50&fm=jpg', 
        productos: [{
            nombre:"Pizza pepperoni",
            precio: 3500,
            ingredientes:["Salsa", " queso", " pepperoni"],
            imagen:"https://cdn.tasteatlas.com/images/dishes/b05a0af72ad845f3a6abe16143d7853a.jpg?m=facebook",
            id: 5
        },
        {
            nombre:"Pizza de rucula",
            precio: 3800,
            ingredientes:["Rucula", " queso", " jamon crudo", " salsa", " aceitunas"],
            imagen:"https://www.cucinare.tv/wp-content/uploads/2017/10/JAMON-CRUDO-Y-RUCULA-2.jpg",
            id:6
        },
        {
            nombre:"Pizza de palmito",
            precio: 3500,
            ingredientes:["Salsa", " palmito", " salsa golf", " queso"],
            imagen:"https://i.ytimg.com/vi/lrMEoF2y-_0/maxresdefault.jpg",
            id: 7        
        }]
    },
    {
        nombre:'Postres', 
        id:3, 
        imgUrl:'https://media.admagazine.com/photos/618a6744b94700461d621432/master/w_1600%2Cc_limit/67788.jpg', 
        productos: [{
            nombre:"Cheesecake de frutos rojos",
            precio: 2000,
            ingredientes:["Frutos rojos", " base de chocolate", " masa de queso"],
            imagen:"https://media.airedesantafe.com.ar/p/de067f24b3ac922c85bb4fbf2e4a803e/adjuntos/268/imagenes/003/672/0003672188/1200x675/smart/como-hacer-cheesecake-frutos-rojos-y-chocolate.png",
            id: 8
        },
        {
            nombre:"Tiramisu",
            precio: 1900,
            ingredientes:["Cacao de chocolate", " cacao de cafe", " masa de queso"],
            imagen:"https://i.blogs.es/740b08/1366_2000/1366_2000.jpg",
            id: 9        
        },
        {
            nombre:"Chocotorta",
            precio: 1800,
            ingredientes:["Dulce de leche", " casamcrem", " cacao de chocolate", " galletitas de chocolate", " cafe"],
            imagen:"https://www.goya.com/media/7765/argentinean-chocotorta.jpg?quality=80",
            id: 10
        },
        {
            nombre:"Flan con dulce de leche",
            precio: 1800,
            ingredientes:["Caramelo", " dulce de leche", " masa de leche, azucar y huevos"],
            imagen:"https://laopinionaustral.com.ar/media/uploads/2023/08/flan1.webp",
            id: 11
        }]
    },
    {
        nombre:'Bebidas', 
        id:4, 
        imgUrl:'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/im_landscape_100/public/2022-05/bebidas-refrescantes-sin-alcohol%C2%A9iStock.jpg.webp?itok=474pDi5b', 
        productos: [{
            nombre:"Aguas minerales",
            precio: 900,
            ingredientes:["Agua con gas", " Agua sin gas"],
            imagen:"https://www.nestle.com.ar/sites/g/files/pydnoa481/files/02Banner-web-ECO-2150x856px.jpg",
            id: 12
        },
        {
            nombre:"Gaseosas",
            precio: 800,
            ingredientes:["Coca-cola", " Sprite", " Fanta naranja"],
            imagen:"https://c8.alamy.com/compes/2j0taee/coca-cola-productos-coca-cola-fanta-sprite-limonada-bebidas-gaseosas-en-botellas-de-plastico-exentas-aisladas-2j0taee.jpg",
            id: 13
        },
        {
            nombre:"Aguas saborizadas",
            precio: 900,
            ingredientes:["Agua de naranja", " Agua de pepino", " Agua de pomelo", " Agua de durazno", " Agua de kiwi"],
            imagen:"https://truffle-assets.tastemadecontent.net/a540d2fb-4-aguas-saborizadas-thumbnail-landscape.jpg",
            id: 14
        },
        {
            nombre:"Copa de vino",
            precio: 1200,
            ingredientes:["Vinos malbec", " Vinos bonarda", " Vinos tannat"],
            imagen:"https://images.hola.com/imagenes/cocina/escuela/200907079224/temperatura/vinos/enologia/0-876-296/temperatura-adobe-t.jpg",
            id: 15
        }]
    },
]