import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import { ProductConsumer } from '../context'

export default class ProductList extends Component {

  render() {

    return (
      <div>
        <React.Fragment>
          <div className="py-5">
            <div className="container">
            <Title name="My Fine" title="creations"/>
              <div className="row">
                <ProductConsumer>
                  {value => {
                    return value.products.map( product => {
                      return <Product 
                                product={product} 
                                key={product.id} 
                              />
                    })
                  }}
                </ProductConsumer>
              </div>
            </div>
          </div>
        </React.Fragment>
        {/* {this.state.products.map( product => <Product key={product.key}/>)} */}
      </div>
    )
  }
}
