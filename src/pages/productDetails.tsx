import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useSearchParams } from 'react-router-dom';

const ProductDetails = () => {
  const [productList, setProductList] = useState([])
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("categoryId");

  useEffect(() => {
    axios.get(`http://localhost:35068/api/Product/GetProductList?categoryId=${categoryId}`)
      .then((result) => {
        setProductList(result.data)
        console.log('result :>> ', result);
      })
      .catch((error) => {
        console.error("There was an error fetching the product list:", error)
      })
  }, [])

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            Ürün detayı
          </TableHead>
          <TableBody>
            {productList.map((product: any) => (
              <TableRow>
                <TableCell>{product.NAME}</TableCell>
                <TableCell>{product.CURRENCY_RATE}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </>
  )
}

      export default ProductDetails
