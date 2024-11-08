import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogActions, DialogContent, TextField } from "@mui/material"
import axios from "axios"
import { Product } from "../models/product";
import { ChangeEvent, useEffect, useState } from "react"
import { useSearchParams } from 'react-router-dom';
import Grid from '@mui/material/Grid2';

const ProductDetails = () => {
  const [productList, setProductList] = useState<Product[]>()
  const [product, setProduct] = useState<Product>()
  const [open, setOpen] = useState(false)
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

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
              }}
            >Yeni Kayıt</Button>
            <TableRow >
              <TableCell>Ürün Adı</TableCell>
              <TableCell>Fiyatı</TableCell>
              <TableCell>Döviz Kuru</TableCell>
              <TableCell>Birimi</TableCell>
              <TableCell>İndirim Oranı</TableCell>
              <TableCell>KDV oranı</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productList?.map((item: any) => (
              <TableRow>
                <TableCell>{item.NAME}</TableCell>
                <TableCell>{item.PRICE}</TableCell>
                <TableCell>{item.CURRENCY_RATE}</TableCell>
                <TableCell>{item.CURRENCY_TYPE}</TableCell>
                <TableCell>{item.DISCOUNT_RATE}</TableCell>
                <TableCell>{item.VAT_RATE}</TableCell>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => {
                    setProduct(item)
                    setOpen(true)
                  }}
                >Düzenle</Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                  }}
                >Sil</Button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={handleClose}>
        {/* <DialogTitle>Düzenle</DialogTitle> */}
        <DialogContent>
        </DialogContent>
        <DialogActions>
          <Grid container>
            <Grid size={12} >
              <TextField
                variant="outlined"
                value={product?.NAME}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setProduct((item: any) => ({
                    ...item, NAME: event.target.value
                  }));
                }}
                margin="normal"
              />
              <TextField
                variant="outlined"
                value={product?.PRICE}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setProduct((item: any) => ({
                    ...item, PRICE: event.target.value
                  }));
                }}
                margin="normal"
              />
              <TextField
                variant="outlined"
                value={product?.CURRENCY_RATE}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setProduct((item: any) => ({
                    ...item, CURRENCY_RATE: event.target.value
                  }));
                }}
                margin="normal"
              />
              <TextField
                variant="outlined"
                value={product?.CURRENCY_TYPE}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setProduct((item: any) => ({
                    ...item, CURRENCY_TYPE: event.target.value
                  }));
                }}
                margin="normal"
              />
              <TextField
                variant="outlined"
                value={product?.DISCOUNT_RATE}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setProduct((item: any) => ({
                    ...item, DISCOUNT_RATE: event.target.value
                  }));
                }}
                margin="normal"
              />
              <TextField
                variant="outlined"
                value={product?.VAT_RATE}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setProduct((item: any) => ({
                    ...item, VAT_RATE: event.target.value
                  }));
                }}
                margin="normal"
              />
            </Grid>
            <Grid size={12} >
              <Button onClick={handleClose} color="secondary">
                İptal
              </Button>
              <Button
                onClick={() => {
                  setProduct((item: any) => ({
                    ...item, CATEGORY_ID: categoryId
                  }))
                  console.log('product :>> ', product);
                  axios.post('http://localhost:35068/api/Product/Save',product 
                  
                  ).then(result => {
                    console.log('result :>> ', result);
                  })
                  setOpen(false)
                }}
                color="primary"
                autoFocus>
                Kaydet
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ProductDetails
