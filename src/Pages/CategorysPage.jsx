import { useContext, useEffect, useState } from "react"
import { usegetCategorys } from "../hooks/useGetCategories"
import { useGetProducts } from "../hooks/useGetProducts"
import { CategorysContext } from "../contexts/CategorysContext"
import { useNavigate } from "react-router-dom"

const CategorysPage = () => {
  const { categories, getAllCategorys } = usegetCategorys()
  const [productsCatched, setProductsCatched] = useState([])
  const {products, getProducts} = useGetProducts()
  const { allProducts, addItem } = useContext(CategorysContext)
  const navigate = useNavigate()


  useEffect(() => {
    getAllCategorys()
  }, [])
  
  useEffect(() => {
    const fetchData = async () => {
      for (const category of categories) {
        await getProducts({ category });
        setProductsCatched([...productsCatched, products])
      }
    };
  
    fetchData();    
  }, [categories])

  useEffect(() => {
      for (const product of products) {
        addItem({ contentToAdd: products, category: product.category });
      }
  }, [products])

  const handlerClicCategory = ({category}) => {
    navigate(`/products/${category}`)
  }

  return (
    <div>
      <img src="images/banner_portada.jpg" alt="banner portada" style={{boxShadow: '0 6px 15px white', width:'100%'}} />
      <h1 style={{textAlign: 'center', fontSize: '2.5rem'}}>CATEGORIES</h1>
      <div className="categoriesContainer">
        {
          allProducts?.map(itemToShow => {
            return (
              <div key={itemToShow?.category} className="categoyContainer" onClick={()=> handlerClicCategory({category: itemToShow?.category})}>
                <img src={itemToShow?.content[0]?.image} alt={`${itemToShow?.category}`} className="categoryPhoto" />
                <h2 className="categoryText">{itemToShow?.category.toUpperCase()}</h2>
              </div>
            )
          })
        }
      </div>
      <img src="images/Banner_electronicos.jpg" alt="banner productos electrónicos" style={{ width: '100%', height: '12rem', boxShadow: '0 0  15px white' }} />
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginBottom: '2rem'}}>
        <div style={{display: 'grid',gridTemplateColumns: 'repeat(3, 1fr)', gap: '10vw' ,alignContent: 'center', marginTop: '2rem'}}>
          <div style={{ background: 'rgb(183, 210, 252)', border: '.1rem solid white', boxShadow: '0 0 10px white', borderRadius: '10px', width: '15rem', height: 'auto'}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginTop: '1.1rem'}}>
              <img src="images/best_prices.jpg" alt="banner prices" style={{height: '17rem', width: 'auto'}} />
            </div>
            <div>
              <p style={{textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: '1.1rem'}}>Los mejores precios, siempre al alcance de tu bolsillo.</p>
            </div>
          </div>
          <div style={{ background: 'rgb(183, 210, 252)', border: '.1rem solid white', boxShadow: '0 0 10px white', borderRadius: '10px', width: '15rem', height: 'auto'}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginTop: '1.1rem'}}>
              <img src="/public/images/velocidad_seguridad.jpg" alt="speed and velocity" style={{height: '17rem', width: 'auto'}} />
            </div>
            <div>
              <p style={{textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: '1.1rem'}}>Rápido, confiable y seguro: compra con tranquilidad.</p>
            </div>
          </div>
          <div style={{ background: 'rgb(183, 210, 252)', border: '.1rem solid white', boxShadow: '0 0 10px white', borderRadius: '10px', width: '15rem', height: 'auto'}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginTop: '1.1rem'}}>
              <img src="/public/images/devoluciones.jpg" alt="devolutions" style={{height: '17rem', width: 'auto'}} />
            </div>
            <div>
              <p style={{textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: '1.1rem'}}>Devoluciones fáciles, compras sin preocupaciones.</p>
            </div>
          </div>
        </div>
      </div>
      <img src="images/Banner_JOYAS.jpg" alt="banner jewerly" style={{ width: '100%', height: '12rem', boxShadow: '0 0  15px white' }} />
    </div>
  )
}

export default CategorysPage