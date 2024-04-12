import React from 'react'
import ArticleForm from './ArticleForm'
import { Heading } from '../../styled_components/Article'

const NewArticle = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col offset-4'>
          <Heading>New Article</Heading>
        </div>
      </div>
      <div className='row'>
        <div className='col offset-1'>
          <ArticleForm />
        </div>
      </div>
    </div>
  )
}

export default NewArticle;
