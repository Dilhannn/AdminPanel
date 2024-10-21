import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material"
import { Box } from "@mui/system"
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { useEffect, useState } from "react"

const categories = () => {
  const [categoryList, setCategoryList] = useState([])
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:35068/api/Category/GetCategoryList').then((result) => {
      setCategoryList(result.data)
    })
  }
  )
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const handleComfirm = () => {

  }

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ADI</TableCell>
              <TableCell>DURUMU</TableCell>
              <TableCell>iŞLEMLER</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categoryList.map((item: any) => (
              <TableRow>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.state == true ? 'Stokta ' : 'Stok Yok'}</TableCell>
                <Box display="flex" gap={1} 
                 style={{ padding:3}}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleOpen}
                  >Düzenle</Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={()=>{
                      navigate(`/productDetails`);
                    }}
                  >Detay</Button>
                  <Button
                    variant="contained"
                    color="primary"
                  >Ekle/Sil</Button>
                </Box>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Düzenle</DialogTitle>
      <DialogContent>
        <TableBody>
          {categoryList.map((item:any, index) => (
            <TableRow key={index}>
              <TableCell>
              {item.name}  
              </TableCell>
              <TableCell>
              {item.state == true ? 'Stokta ' : 'Stok Yok'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          İptal
        </Button>
        <Button onClick={handleComfirm} color="primary" autoFocus>
          Onayla
        </Button>
      </DialogActions>
    </Dialog>
    </>
  )
}

export default categories
