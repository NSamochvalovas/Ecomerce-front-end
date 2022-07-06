import axios from 'axios';
import React, {useState, useEffect} from 'react';
import * as S from './AddProduct.styles';
import Title from '../Title/Title'
import {publicRequest} from '../../requoseMethods';

function AddProduct() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [categories, setCategories] = useState();
  const [price, setPrice] = useState();
  const [size, setSize] = useState();
  const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).curentUser.isAdmin;


 const handelAddProduct = async (e) => {
  e.preventDefault();
  if(TOKEN === true) {
    try{
      const res = await publicRequest.post('products', {
        header: { token: `Bearer ${TOKEN}` },
        title: title,
        description: description,
        image: image,
        categories: categories,
        size: size,
        price: price,
      })
      alert('Product added');
    } catch(err){
      console.log(err);
    }
  } else{
    alert('You must be admin to add the product');
  } 
 }

  return (
    <S.Container>
      <S.Form>
        <Title text="Add Product" />
        <S.Input 
          placeholder="title" 
          onChange={(e) => setTitle(e.target.value)}
        />
        <S.Input 
          placeholder="description" 
          onChange={(e) => setDescription(e.target.value)}
        />
        <S.Input 
          placeholder="image" 
          onChange={(e) => setImage(e.target.value)}
        />
        <S.Input 
          placeholder="categories" 
          onChange={(e) => setCategories(e.target.value)}
        />
          <S.Input 
          placeholder="size" 
          onChange={(e) => setSize(e.target.value)}
        />
        <S.Input 
          placeholder="price" 
          onChange={(e) => setPrice(e.target.value)}
        />
        <S.Button onClick={handelAddProduct}>Create</S.Button>
      </S.Form>
    </S.Container>
  )
}

export default AddProduct