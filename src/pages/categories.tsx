import { Button, Table, TableBody, TableCell, TableContainer, TextField, TableHead, TableRow, Dialog, DialogActions, DialogContent, Checkbox } from "@mui/material"
import { Box } from "@mui/system"
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { ChangeEvent, useEffect, useState } from "react"
import { Category } from "../models/category";

const categories = () => {
  const [category, setCategory] = useState<Category>()
  const [categoryList, setCategoryList] = useState([])
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:35068/api/Category/GetCategoryList').then((result) => {
      setCategoryList(result.data)
    })
  },[category])

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setCategory({ID:0})
          setOpen(true)
        }}
      >Yeni Kayıt</Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow >
              <TableCell>ADI</TableCell>
              <TableCell>DURUMU</TableCell>
              <TableCell>iŞLEMLER</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categoryList.map((item: any) => (
              <TableRow key={item.ID}>
                <TableCell>{item.NAME}</TableCell>
                <TableCell>{item.STATE == true ? 'Aktif' : 'Pasif'}</TableCell>
                <Box display="flex" gap={1}
                  style={{ padding: 3 }}>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => {
                      setOpen(true)
                      setCategory(item)
                    }}
                  >Düzenle</Button>
                  <Button
                    variant="contained"
                    color="info"
                    onClick={() => {
                      navigate(`/productDetails?categoryId=${item.ID}`)
                    }}
                  >Detay</Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                      axios.delete(`http://localhost:35068/api/Category/Delete?ID=${item.ID}`, {
                      }).then(result => {
                        console.log('result :>> ', result);
                        setCategory({ID:0})
                      })
                    }}
                  >Sil</Button>
                </Box>
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
          <TextField
            variant="outlined"
            value={category?.NAME}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setCategory((item: any) => ({
                ...item, NAME: event.target.value
              }))
            }}
            margin="normal"
          />
          <Checkbox
            checked={category?.STATE}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setCategory((item: any) => ({
                ...item, STATE: event.target.checked
              }))
            }}

          />
          <Button onClick={handleClose} color="secondary">
            İptal
          </Button>
          <Button
            onClick={() => {
              axios.post('http://localhost:35068/api/Category/Save', category)
                .then(result => {
                  setCategory(result.data)
                })
              setOpen(false)
            }}
            color="primary"
            autoFocus>
            Kaydet
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default categories
