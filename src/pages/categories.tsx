import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"

const categories = () => {
  const [categoryList, setCategoryList] = useState([])
  useEffect(() => {
    axios.get('http://localhost:35068/api/Category/GetCategoryList').then((result) => {
      setCategoryList(result.data)
    })
  }
  )

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
                  >Düzenle</Button>
                  <Button
                    variant="contained"
                    color="primary"
                  >Kaydet</Button>
                  <Button
                    variant="contained"
                    color="primary"
                  >Sil</Button>
                </Box>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default categories
