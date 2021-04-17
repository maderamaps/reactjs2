import { Button, CircularProgress, Grid, TextField } from "@material-ui/core";
import axios from "axios";
import React, { Component } from "react";
import "./peserta.css";
import { apiServer } from "../../constant/utils";
import { Redirect } from "react-router";

class BioForm extends Component {
  state = {
    biodata: {},
    loading: false,
    isSubmit: false,
  };

  componentDidMount() {
    if (this.props.match.params.id !== undefined) {
      this.setState({ loading: true });
      axios
        .get(apiServer + "/pesertas?id=" + this.props.match.params.id)
        .then((res) => {
          const biodata = res.data[0];
          this.setState({ biodata: biodata, loading: false });
        });
    }
  }

  handleChange = (e) => {
    const prevState = this.state.biodata;
    prevState[e.target.id] = e.target.value;
    this.setState({ bioDatas: prevState });
  };

  handleSubmit = () => {
    const uploadData = this.state.biodata;
    this.setState({ loading: true });
    if (this.props.match.params.action === "add") {
      axios.post(apiServer + "/pesertas", uploadData).then((res) => {
        // console.log(res);
        this.setState({ isSubmit: true, loading: false });
      });
    } else {
      axios
        .put(apiServer + "/pesertas/" + uploadData.id, uploadData)
        .then(() => {
          this.setState({ isSubmit: true, loading: false });
        });
    }
  };
  render() {
    const { biodata, loading, isSubmit } = this.state;

    if (isSubmit) {
      return <Redirect to="/peserta" />;
    }

    if (loading) {
      return <CircularProgress color="secondary" />;
    } else {
      return (
        <div style={{ width: "100%" }}>
          <Grid container spacing={0}>
            <Grid item sm={12} md={2} />
            <Grid item sm={12} md={8}>
              <div className="c-card-peserta">
                <div className="c-card-peserta-body">
                  <form
                    className="form-peserta"
                    noValidate
                    autoComplete="off"
                    onSubmit={() => this.handleSubmit()}
                  >
                    <TextField
                      id="nama"
                      label="Nama"
                      value={biodata.nama}
                      required
                      onChange={(e) => {
                        this.handleChange(e);
                      }}
                    />
                    <br />
                    <TextField
                      id="TempatLahir"
                      label="Tempat Lahir"
                      value={biodata.TempatLahir}
                      required
                      onChange={(e) => {
                        this.handleChange(e);
                      }}
                    />
                    <br />
                    <TextField
                      id="TanggalLahir"
                      type="date"
                      label="Tanggal Lahir"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={biodata.TanggalLahir}
                      required
                      onChange={(e) => {
                        this.handleChange(e);
                      }}
                    />
                    <br />
                    <TextField
                      id="JenisKelamin"
                      label="Jenis Kelamin"
                      value={biodata.jenisKelamin}
                      required
                      onChange={(e) => {
                        this.handleChange(e);
                      }}
                    />
                    <br />
                    <TextField
                      id="Jalan"
                      label="Jalan"
                      value={biodata.jalan}
                      required
                      onChange={(e) => {
                        this.handleChange(e);
                      }}
                    />
                    <br />
                    <TextField
                      id="Kelurahan"
                      label="Kelurahan"
                      required
                      value={biodata.kelurahan}
                      onChange={(e) => {
                        this.handleChange(e);
                      }}
                    />
                    <br />
                    <TextField
                      id="Kecamatan"
                      label="Kecamatan"
                      value={biodata.kecamatan}
                      required
                      onChange={(e) => {
                        this.handleChange(e);
                      }}
                    />
                    <br />
                    <TextField
                      id="Kota"
                      label="Kota"
                      value={biodata.kota}
                      required
                      onChange={(e) => {
                        this.handleChange(e);
                      }}
                    />
                    <br />
                    <br />
                    <Button variant="contained" color="primary" type="submit">
                      Submit
                    </Button>
                  </form>
                </div>
              </div>
            </Grid>
            <Grid item sm={12} md={2} />
          </Grid>
        </div>
      );
    }
  }
}

export default BioForm;
