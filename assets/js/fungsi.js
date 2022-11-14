var dataBarang = [{
  nama_barang: "Nama Barang",
  jumlah: "jumlah",
  total: 0
}];

function showBarang() {
  var listBarang = document.getElementById("table");

  listBarang.innerHTML = "<tr><th>Nama Barang</th><th>Jumlah</th><th>Total</th><th>Action</th></tr>";

  for (let i = 0; i < dataBarang.length; i++) {
    if (i !== 0) {
      var btnEdit = "<a href='#' class='btn btn-primary btn-sm' onclick='editBarang(" + i + ")'>Edit</a>";
      var btnHapus = "<a href='#' class='btn btn-danger btn-sm' style='margin:5px;' onclick='deleteBarang(" + i + ")'>Hapus</a>";
      listBarang.innerHTML +=
        "<tr><td>" + dataBarang[i].nama_barang + "</td><td>" + dataBarang[i].jumlah + "</td><td>" + dataBarang[i].total + "</td><td>" + btnEdit + btnHapus + "</td></tr>";
    } else {
      // listBarang.innerHTML = "Data Belum Di Masukan";
    }
  }

  const sum = dataBarang.reduce((accumulator, object) => {
    return accumulator + object.total;
  }, 0);

  const totalBayar = document.getElementById("total_bayar");
  totalBayar.innerHTML = sum;
}

function cekTotalHarga(jenisBarang, jumlah) {
  if (jenisBarang == "Minyak" && jumlah > 5) {
    const total = jumlah * 150000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Minyak" && jumlah <= 5) {
    const total = jumlah * 1500000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Beras" && jumlah > 3) {
    const total = jumlah * 100000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Beras" && jumlah <= 3) {
    const total = jumlah * 1000000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Telur") {
    const total = jumlah * 500000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Terigu") {
    const total = jumlah * 15000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Tepung Tapiyoka") {
    const total = jumlah * 20000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Garam") {
    const total = jumlah * 10000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Gula") {
    const total = jumlah * 150000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  }
}

function addBarang() {
  var jenisBarang = document.getElementById("jenis_barang").value;
  var jumlah = document.getElementById("jumlah").value;

  const newDataBarang = cekTotalHarga(jenisBarang, jumlah);
  dataBarang.push(newDataBarang);
  showBarang();
}

function editBarang(id) {
  var newjumlah = prompt("Edit jumlah", dataBarang[id].jumlah); 
  const detailJenisBarang = dataBarang[id].nama_barang;

  const newDataBarang = cekTotalHarga(
    detailJenisBarang,
    newjumlah || dataBarang[id].jumlah
  );

  dataBarang[id] = newDataBarang;
  showBarang();
}

function deleteBarang(id) {
  dataBarang.splice(id, 1);
  showBarang();
}

showBarang();