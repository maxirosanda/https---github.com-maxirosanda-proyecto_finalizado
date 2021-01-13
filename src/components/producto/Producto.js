import FotoProducto from '../../assets/producto.jpg'

const Producto = ({cantidad, stock, bajarCantidad,subirCantidad}) => {
    return <>
<div className="row container mt-5 ml-5 ">
<div className="card-body col-3 ">
	<div className="row ">
			<a href="#" className="img-wrap"><img  className="col-12"  src={FotoProducto}/></a>
				<div className="form-row col-12 ">
					<div className="form-group col-8 flex-grow-0 ml-5 mt-4 ">
						<div className="input-group input-spinner ">
						  <div className="input-group-prepend">
						    <button onClick = {subirCantidad} className="btn btn-light" type="button" id="button-plus"> + </button>
						  </div>
						  <input type="text" className="form-control" value={cantidad}/>
						  <div className="input-group-append">
						    <button onClick = {bajarCantidad} className="btn btn-light" type="button" id="button-minus"> − </button>
						  </div>
						</div> 
					</div> 
					
                    <div className="form-group col-6 ml-5 mt-2 ">
						<a href="#" className="btn btn-primary "> <span className="text">Add to cart</span> <i class="fas fa-shopping-cart"></i> </a>
					</div>
				</div> 
                </div>
                </div>
			</div>
	
	
    </>
  }
  
  export default Producto