function tinhTongVaSoLuongCumSoA() {
    var chuoiSoA = document
      .getElementById("tinhThanhCong")
      .value.replace(/,\s*$/, "");
    var mangCumSo = chuoiSoA.split(",");
    var soLuongCumSoA = mangCumSo.length;
  
    var tongA = 0;
    for (var i = 0; i < soLuongCumSoA; i++) {
      var soNhap = parseInt(mangCumSo[i]);
      if (!isNaN(soNhap)) {
        tongA += soNhap;
      }
    }
  
    document.getElementById("hienThiThanhCong").innerHTML =
      "Số lượng cụm số: " + soLuongCumSoA + "<br>Tổng của các cụm số: " + tongA;
    return [soLuongCumSoA, tongA];
  }
  
  function tinhTongVaSoLuongCumSoB() {
    var chuoiSoA = document
      .getElementById("tinhThatBai")
      .value.replace(/,\s*$/, "");
    var mangCumSo = chuoiSoA.split(",");
    var soLuongCumSoA = mangCumSo.length;
  
    var tongA = 0;
    for (var i = 0; i < soLuongCumSoA; i++) {
      var soNhap = parseInt(mangCumSo[i]);
      if (!isNaN(soNhap)) {
        tongA += soNhap;
      }
    }
    document.getElementById("hienThiThatBai").innerHTML =
      "Số lượng cụm số: " + soLuongCumSoA + "<br>Tổng của các cụm số: " + tongA;
    return [soLuongCumSoA, tongA];
  }
  
  function tinhPhanTram() {
    var ketQuaThanhCong = tinhTongVaSoLuongCumSoA();
    var ketQuaThatbai = tinhTongVaSoLuongCumSoB();
    if (ketQuaThanhCong[0] != ketQuaThatbai[0]) {
      alert("Số lần không đều hãy kiểm tra lại!!");
      return;
    }
    var tongBuocNhay = ketQuaThanhCong[0];
  
    var a = ketQuaThanhCong[1];
    var b = ketQuaThatbai[1];
    var tinhTong = parseFloat(a) + parseFloat(b);
    // Chuyển đổi chuỗi sang số và tính phần trăm
    var phanTramThanhCong = (parseFloat(a) / tinhTong) * 100;
    var phanTramThatBai = (parseFloat(b) / tinhTong) * 100;
  
    document.getElementById("ketQuaThanhCong").innerHTML =
      "Phần trăm thành công: " + phanTramThanhCong.toFixed(2) + "%";
    document.getElementById("ketQuaThatBai").innerHTML =
      "Phần trăm thất bại: " + phanTramThatBai.toFixed(2) + "%";
    document.getElementById("tongBuocNhay").innerHTML =
      "Tổng số lần làm: " + tongBuocNhay.toLocaleString() + " lần";
    document.getElementById("tinhTong").innerHTML =
      "Tổng số lượng: " + tinhTong.toLocaleString() + " cái";
  
    console.log("đúng");
  }
  