import axios from 'axios'
import { useEffect, useState } from 'react'
import {Route} from 'react-router-dom'
import '../sales_css/SalesC.css'
import SaleCreation from './sub_Csale/saleCreation'
import Sale_detail from './sale_detai'


function Create_sale() {

    return(
        <div className='left-section'><Sale_detail/></div>
      
    )}

export default Create_sale;