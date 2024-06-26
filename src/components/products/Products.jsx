import React, { useState } from 'react'
import './Products.scss'
import { useGetProductsQuery } from '../../context/api/ProductApi'
import { FaShoppingCart , FaHeart } from "react-icons/fa";
import stars from '../../assets/stars.png'
import {Pagination , Box , InputLabel , MenuItem , FormControl , Select, Grid, Skeleton} from '@mui/material';

const Products = () => {

    const [page, setPage] = useState( +sessionStorage.getItem("productCount") || 1)
    const [productCount , setproductCount] = useState(+localStorage.getItem("page") || 6)
    const {data , isFetching , isLoading} = useGetProductsQuery({limit:productCount , page} )

    let totalPagination = Math.ceil(data?.data?.count / productCount)


    const handleChangePagenation = (_, value) => {
        setPage(value)
        sessionStorage.setItem("productCount", value)
    }

    const handleChangePage = e => {
      let value = e.target.value
      setproductCount(value)
      localStorage.setItem("page" , value)

      let res = Math.ceil(page * productCount / value)

      setPage(res)
      sessionStorage.setItem("page-count" , res)
    }



    let products = data?.data?.products?.map(product => (
        <div key={product.id} className='product__item'>
            <div className="icons">
                <div className='icon1'>
                  <FaShoppingCart />
                </div>
                <div className='icon2'>
                 <FaHeart />
                </div>
            </div>
            <div className="image">
                <img src={product.urls[0]} alt= "" />
            </div>
            <span>
                <h2>{product.title}</h2>
                <img src={stars} alt="" />
            </span>
        </div>
    ))
  return (
    <>
      <div className="products">
          <div className="container">
             <div className="products__title">
                 <p>Find your favourite smart watch.</p>
                 <h2>Our Latest Products</h2>
             </div>
              <div className="products__wrapper">
                  {products}
              </div>
              <Box  sx={{ mt:'650px' , gap:"40px" , alignItems:"center" , position:"absolute" , display:"flex" , justifyContent:"center"}}>
                  <Pagination  page={page} onChange={handleChangePagenation} count={totalPagination} variant="outlined" shape="rounded" />
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Count</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={productCount}
          label="Count"
          onChange={handleChangePage}
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
                  </FormControl>
              </Box>
         </div>
      </div>
    </>
  )
}

export default Products