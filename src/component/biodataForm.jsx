import { Button, TextField } from "@material-ui/core";
import React, { Component } from "react";

class BioForm extends Component {
  render() {
    const { biodata, onChange, onSubmit } = this.props;
    return (
      <form noValidate autoComplete="off" onSubmit={() => onSubmit()}>
        <TextField
          id="nama"
          label="Nama"
          value={biodata.nama}
          onChange={(e) => {
            onChange(e);
          }}
        />
        <br />
        <TextField
          id="tempatLahir"
          label="Tempat Lahir"
          value={biodata.tempatLahir}
          onChange={(e) => {
            onChange(e);
          }}
        />
        <br />
        <TextField
          id="tanggalLahir"
          type="date"
          label="Tanggal Lahir"
          InputLabelProps={{
            shrink: true,
          }}
          value={biodata.tanggalLahir}
          onChange={(e) => {
            onChange(e);
          }}
        />
        <br />
        <TextField
          id="jenisKelamin"
          label="Jenis Kelamin"
          value={biodata.jenisKelamin}
          onChange={(e) => {
            onChange(e);
          }}
        />
        <br />
        <TextField
          id="jalan"
          label="Jalan"
          value={biodata.jalan}
          onChange={(e) => {
            onChange(e);
          }}
        />
        <br />
        <TextField
          id="kelurahan"
          label="Kelurahan"
          value={biodata.kelurahan}
          onChange={(e) => {
            onChange(e);
          }}
        />
        <br />
        <TextField
          id="kecamatan"
          label="Kecamatan"
          value={biodata.kecamatan}
          onChange={(e) => {
            onChange(e);
          }}
        />
        <br />
        <TextField
          id="kota"
          label="Kota"
          value={biodata.kota}
          onChange={(e) => {
            onChange(e);
          }}
        />
        <br />
        <br />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    );
  }
}

export default BioForm;
