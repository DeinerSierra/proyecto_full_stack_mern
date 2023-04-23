import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

function Filters() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories

    const [category, setCategory] = state.productsAPI.category
    const [sort, setSort] = state.productsAPI.sort
    const [search, setSearch] = state.productsAPI.search


    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }

    return (
        <div className="filter_menu contenedor">
            <div className="campo">
                <span>Filtrar: </span>
                <select name="category" value={category} onChange={handleCategory} >
                    <option value=''>Todos Productos</option>
                    {
                        categories.map(category => (
                            <option value={"category=" + category._id} key={category._id}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div className="campo">
                <input className="input" type="text" value={search} placeholder="Ingresa tu busqueda"
                onChange={e => setSearch(e.target.value.toLowerCase())} />
            </div>
            

            <div className="campo sort">
                <span>Ordenar Por: </span>
                <select value={sort} onChange={e => setSort(e.target.value)} >
                    <option value=''>Nuevos</option>
                    <option value='sort=oldest'>Antiguos</option>
                    <option value='sort=-sold'>Más Vendidos</option>
                    <option value='sort=-price'>Price: Precios Bajos</option>
                    <option value='sort=price'>Price: Alto y Bajos</option>
                </select>
            </div>
        </div>
    )
}

export default Filters
