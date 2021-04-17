import React, { Component } from "react";
import "./peserta.css";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import { apiServer } from "../../constant/utils";
import { Button } from "@material-ui/core";
import { EditButton, RemoveButton } from "../action/button";

class Pesertas extends Component {
  state = {
    loading: false,
    pesertas: [],
  };

  componentDidMount() {
    axios.get(apiServer + "/pesertas").then((result) => {
      const daftarpeserta = result.data;
      this.setState({ pesertas: daftarpeserta });
    });
  }

  handleEdit = (id) => {
    console.log("edit, id:", id);
  };

  handleDelete = (id) => {
    this.setState({ loading: true });
    axios.delete(apiServer + "/pesertas/" + id).then(() => {
      window.location.reload();
    });
  };

  render() {
    const { pesertas } = this.state;
    const columns = [
      { field: "nama", headerName: "Peserta", width: 150 },
      {
        field: "detailLahir",
        headerName: "Tempat, Tanggal Lahir",
        width: 200,
        valueGetter: (params) =>
          params.row.TempatLahir + ", " + params.row.TanggalLahir,
      },
      { field: "jenisKelamin", headerName: "Gender" },
      {
        field: "completeAddress",
        headerName: "Alamat Lengkap",
        width: 550,
        valueGetter: (params) =>
          "Jalan " +
          params.row.Jalan +
          " Kel. " +
          params.row.Kelurahan +
          " Kec. " +
          params.row.Kecamatan +
          ", " +
          params.row.Kota,
      },
      {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => (
          <React.Fragment>
            <EditButton to={"/peserta/edit/" + params.row.id} />
            <RemoveButton onClick={() => this.handleDelete(params.row.id)} />
          </React.Fragment>
        ),
      },
    ];

    return (
      <div className="c-card-pesertas">
        <div className="c-card-pesertas-body">
          <h1>Daftar Peserta</h1>
          <div className="header-pesertas">
            <Button href="/peserta/add" color="primary" variant="contained">
              Tambah Peserta
            </Button>
          </div>
          <div className="data-grid-container">
            <DataGrid rows={pesertas} columns={columns} pageSize={10} />
          </div>
        </div>
      </div>
    );
  }
}

export default Pesertas;
