import React, { Component } from "react";
import Ktp from "./ktp";

class Biodata extends Component {
  render() {
    const { biodata } = this.props;
    // console.log(this.props);
    let isPunyaKTP = false;

    const tahunSekarang = new Date().getFullYear();
    const tahunLahir =
      biodata.tanggalLahir !== undefined &&
      biodata.tanggalLahir !== null &&
      biodata.tanggalLahir !== ""
        ? biodata.tanggalLahir.slice(0, 4)
        : new Date().getFullYear();
    const umur = parseInt(tahunSekarang) - parseInt(tahunLahir);

    if (umur !== undefined && umur >= 17) {
      isPunyaKTP = true;
    }
    return (
      <React.Fragment>
        <label>Nama: {biodata.nama}</label>
        <br />

        <label>Alamat: {biodata.fullAlamat}</label>

        <br />
        <label>Umur Sekarang: {umur} Tahun</label>
        <br />
        {/* <label>Tahun Lahir: {}</label>
        <br />
        <label>Tahun Sekarang: {new Date().getFullYear()}</label>
        <br /> */}
        <label>
          Jenis Kelamin:{" "}
          {biodata.jenisKelamin !== "Laki - Laki" &&
          biodata.jenisKelamin !== "Perempuan"
            ? "Jenis Kelamin Tidak Dikenali"
            : biodata.jenisKelamin}
        </label>
        <br />
        {isPunyaKTP && <Ktp />}

        <br />
      </React.Fragment>
    );
  }
}

export default Biodata;
