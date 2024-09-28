import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material"
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
            </TableRow>
          </TableHead>
          <TableBody>
{categoryList.map((item:any) =>(
<TableRow>
  <TableCell>{item.name}</TableCell>
  <TableCell>{item.state ==  true ? 'Stokta ': 'Stok Yok' }</TableCell>
</TableRow>
))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default categories
