var productos = [{
  foto: '1.webp',
  precio: '$23.999',
  nombre: 'Notebook EXO SMART E21F',
  detalle: 'Celeron N3350 4GB 500GB 14.1" Win10'
},{
  foto: '2.webp',
  precio: '$23.999',
  nombre: 'Notebook Lenovo 81G200C9AR',
  detalle: 'Celeron 3337U 4GB 500GB 14"'
},{
  foto: '3.webp',
  precio: '$149.999',
  nombre: 'Notebook PREDATOR TRITON',
  detalle: 'Intel Core i7'

}];

var productsList = document.getElementById('productsList');

productos.forEach(mostrar);

function mostrar(prod, i){
  if(i == 0){
    productsList.innerHTML = productsList.innerHTML + 
   '          <div class="col-4 text-center carousel-item active">  '  + 
   '             <div class="card">  '  + 
   '               <div><img src="' + prod.foto + '"></div>  '  + 
   '               <h3>' + prod.precio + '</h3>  '  + 
   '               <h4>' + prod.nombre + '</h4>  '  + 
   '               <p>' + prod.detalle + '</p>  '  + 
   '             </div>  '  + 
   '          </div>  ' ;
  }
  else{
    productsList.innerHTML = productsList.innerHTML + 
   '          <div class="col-4 text-center carousel-item">  '  + 
   '             <div class="card">  '  + 
   '               <div><img src="' + prod.foto + '"></div>  '  + 
   '               <h3>' + prod.precio + '</h3>  '  + 
   '               <h4>' + prod.nombre + '</h4>  '  + 
   '               <p>' + prod.detalle + '</p>  '  + 
   '             </div>  '  + 
   '          </div>  ' ;
  }
}