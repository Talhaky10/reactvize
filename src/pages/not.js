import React, { Component } from 'react';
import './not.css';

class Not extends Component {
  state = {
    // api olmadığı için kendi girdiğim bilgiler
    bilgiler: [
      {
        "isim": "Talha ",
        "ders1": "WEB",
        "ogretmen1": "Ramazan Bakir",
        "Not1": 0,
        "ders2": "Mobil",
        "ogretmen2": "Keyvan",
        "Not2": 0,
        "ders3": "NYP",
        "ogretmen3": "Meral",
        "Not3": 0,
      },
      {
        "isim": "İsmail",
        "ders1": "WEB",
        "ogretmen1": "Ramazan Bakir",
        "Not1": 0,
        "ders2": "Mobil",
        "ogretmen2": "Keyvan",
        "Not2": 0,
        "ders3": "NYP",
        "ogretmen3": "Meral",
        "Not3": 0,
      },
      {
        "isim": "Siraç",
        "ders1": "WEB",
        "ogretmen1": "Ramazan Bakir",
        "Not1": 0,
        "ders2": "Mobil",
        "ogretmen2": "Keyvan",
        "Not2": 0,
        "ders3": "NYP",
        "ogretmen3": "Meral",
        "Not3": 0,
      },
      {
        "isim": "Baran",
        "ders1": "WEB",
        "ogretmen1": "Ramazan Bakir",
        "Not1": 0,
        "ders2": "Mobil",
        "ogretmen2": "Keyvan",
        "Not2": 0,
        "ders3": "NYP",
        "ogretmen3": "Meral",
        "Not3": 0,
      },
      
    ],
    seciliOgrenci: null // Seçilen öğrencinin detaylarını tutar
  };

  // Öğrenciye tıklanınca detayları göster
  handleOgrenciClick = (index) => {
    this.setState({
      seciliOgrenci: this.state.bilgiler[index]
    });
  };

  // Detayları kapat
  handleCloseDetails = () => {
    this.setState({
      seciliOgrenci: null
    });
  };

  render() {
    return (
      <div>
        <h1>Öğrencilerin notları </h1>
        <table>
          <thead>
            <tr>
              <th>İsim</th>
            </tr>
          </thead>
          <tbody>
            {this.state.bilgiler.map((bilgi, index) => (
              <tr key={index} onClick={() => this.handleOgrenciClick(index)}>
                <td>{bilgi.isim}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {this.state.seciliOgrenci && (
           //yukarda kendi girdiğim bilgileri burda çektim
          <div>
            <h2>{this.state.seciliOgrenci.isim} Detayları</h2>
            <p><strong>Ders:</strong> {this.state.seciliOgrenci.ders1}</p>
            <p><strong>Öğretmen:</strong> {this.state.seciliOgrenci.ogretmen1}</p>
            <p><strong>Not:</strong> {this.state.seciliOgrenci.Not1}</p>
            <p><strong>Ders:</strong> {this.state.seciliOgrenci.ders2}</p>
            <p><strong>Öğretmen:</strong> {this.state.seciliOgrenci.ogretmen2}</p>
            <p><strong>Not:</strong> {this.state.seciliOgrenci.Not2}</p>
            <p><strong>Ders:</strong> {this.state.seciliOgrenci.ders3}</p>
            <p><strong>Öğretmen:</strong> {this.state.seciliOgrenci.ogretmen3}</p>
            <p><strong>Not:</strong> {this.state.seciliOgrenci.Not3}</p>
            <button onClick={this.handleCloseDetails}>Detayları Kapat</button>
          </div>
        )}
      </div>
    );
  }
}

export default Not;





