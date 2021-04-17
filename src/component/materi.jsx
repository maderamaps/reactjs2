import React, { Component } from "react";

class Materi extends Component {
  state = {
    materis: [],
  };

  componentDidMount() {
    const materis = [
      {
        tanggal: "20 Februari 2021",
        judul: "Pengenalan React JS 1",
        detail: [
          { subJudul: "Algoritma", content: "Konten Algoritma" },
          { subJudul: "Tipe Data", content: "Konten Tipe Data" },
        ],
      },
      {
        tanggal: "27 Februari 2021",
        judul: "Pengenalan React JS 2",
        detail: [
          { subJudul: "Conditional", content: "konten conditional" },
          { subJudul: "Iteration", content: "konten iteration" },
        ],
      },
      {
        tanggal: "6 Maret 2021",
        judul: "Pengenalan React JS 3",
        detail: [],
      },
      {
        tanggal: "29 Februari 2021",
        judul: "",
        detail: [
          { subJudul: "Conditional", content: "konten conditional" },
          { subJudul: "Iteration", content: "konten iteration" },
        ],
      },
      {
        tanggal: "13 Maret 2021",
        judul: "Pengenalan React JS 4",
        detail: [],
      },
    ];

    materis.forEach((materi, idx) => {
      if (
        materi.judul === undefined ||
        materi.judul === null ||
        materi.judul === ""
      ) {
        //HAPUS DARI ARRAY
        materis.splice(idx, 1);
      }
    });

    this.setState({ materis: materis });
  }

  render() {
    // const { theMateri } = this.props;
    const { materis } = this.state;
    return (
      <div>
        {materis.map((materi) => (
          <div className="c-card" key={materi.tanggal}>
            <small>{materi.tanggal}</small>
            <h2>{materi.judul}</h2>
            {materi.detail.map((detailMateri) => (
              <React.Fragment key={detailMateri.subJudul}>
                <h3>{detailMateri.subJudul}</h3>
                <p>{detailMateri.content}</p>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Materi;
