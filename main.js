function kiemTraTrong(input) {
    // Loại bỏ khoảng trắng từ đầu và cuối chuỗi
    var trimmedInput = input.trim();
  
    // Kiểm tra xem chuỗi có chiều dài bằng 0 hay không
    if (trimmedInput.length === 0) {
      alert("Chuỗi trống.");
      return true;
    } else {
      console.log("Chuỗi không trống.");
      return false;
    }
  }
function tinhTongVaSoLuongCumSoA() {
    var chuoiSoA = document
    .getElementById("tinhThanhCong")
    .value.replace(/,\s*$/, "");
    
    var kiemtraA = kiemTraTrong(chuoiSoA);
    if(kiemtraA==true)
    {
        return;
    }
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
    
    var kiemtraB = kiemTraTrong(chuoiSoA);
    if(kiemtraB==true)
    {
        return;
    }
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

  if (ketQuaThanhCong === undefined || ketQuaThatbai === undefined) {
    // Nếu một trong hai biến không có giá trị, ném ngoại lệ
    return;
  }
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

}
