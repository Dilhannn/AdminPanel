import { Button, Table, TableBody, TableCell, TableContainer, TextField, TableHead, TableRow, Dialog, DialogActions, DialogContent, Checkbox } from "@mui/material"
import { Box } from "@mui/system"
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { ChangeEvent, useEffect, useState } from "react"

const categories = () => {
  const [categoryId, setCategoryId] = useState(Number)
  const [categoryName, setCategoryName] = useState(String)
  const [categoryState, setCategoryState] = useState(Boolean)
  const [categoryList, setCategoryList] = useState([])
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:35068/api/Category/GetCategoryList').then((result) => {
      setCategoryList(result.data)
    })
  }
  )


  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
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
                      setCategoryName(item.NAME)
                      setCategoryState(item.STATE)
                      setCategoryId(item.ID)
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
            value={categoryName}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setCategoryName(event.target.value)
            }}
            margin="normal"
          />
          <Checkbox
            checked={categoryState}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setCategoryState(event.target.checked)
            }}

          />
          <Button onClick={handleClose} color="secondary">
            İptal
          </Button>
          <Button
            onClick={() => {
                axios.post('http://localhost:35068/api/Category/Save', {
                  ID: categoryId,
                  NAME: categoryName,
                  STATE: categoryState
                }).then(result => {
                  console.log('result :>> ', result);
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
