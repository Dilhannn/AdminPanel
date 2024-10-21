import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"

const ProductDetails = () => {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:35068/api/Product/GetProductList')
      .then((result) => {
        console.log('result :>> ', result);
        setProductList(result.data)
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
                <TableCell>{product.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </>
  )
}

      export default ProductDetails
