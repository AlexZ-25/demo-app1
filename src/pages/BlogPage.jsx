import React from 'react'

const BlogPage = (props) => {
  return (
    <>
      <ul>
        {props.articulos.map((articulo, index) => {
          return <li key = {index}>{articulo}</li>;
        })}
      </ul>
    </>
  )
}

export default BlogPage