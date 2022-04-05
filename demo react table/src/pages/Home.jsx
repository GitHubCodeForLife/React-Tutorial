import {
  Table,
  TableContainer,
  Paper,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  CircularProgress,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import config from "./pageConfig";
import axiosClient from "../api/axiosClient";
function Home() {
  const [data, setData] = useState([]);
  const [pageConfig, setPageConfig] = useState(config);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const page = pageConfig.page;
    const size = pageConfig.rowsPerPage;
    loadData(page, size)
      .then((res) => {
        setPageConfig({
          ...pageConfig,
          page: page,
          rowsPerPage: size,
          count: res.data.totalPassengers,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChangePage = (event, newPage) => {
    setIsLoading(true);
    setPageConfig({ ...pageConfig, page: newPage });
    loadData(newPage, pageConfig.rowsPerPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setIsLoading(true);
    setPageConfig({ ...pageConfig, rowsPerPage: event.target.value });
    loadData(pageConfig.page, event.target.value);
  };

  function loadData(page, size) {
    return new Promise((resolve, reject) => {
      axiosClient
        .get(`/v1/passenger?page=${page}&size=${size}`)
        .then((res) => {
          setData(res.data.data);
          // console.log(res.data);
          setIsLoading(false);
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  }

  return (
    <>
      {isLoading ? (
        <CircularProgress color="success" />
      ) : (
        <TableContainer
          sx={{
            maxWidth: "100%",
            margin: "0 auto",
            padding: "0px",
          }}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Trips</TableCell>
                <TableCell align="right">Options</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row._id}>
                  <TableCell component="th" scope="row">
                    {row._id}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.trips}</TableCell>
                  <TableCell align="right">
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TablePagination
              rowsPerPageOptions={pageConfig.pageSizeOptions}
              page={pageConfig.page}
              rowsPerPage={pageConfig.rowsPerPage}
              count={pageConfig.count}
              component="div"
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Table>
        </TableContainer>
      )}
    </>
  );
}

export default Home;
