var nama = 'akbar'
var peran = 'tabib'

if(nama === "" && peran === ""){
  console.log('Nama harus diisi')
}else if(nama !== "" && peran === ""){
  console.log('halo ', nama , 'pilih peranmu untuk memulai game!')
}else if(nama !== "" && peran === 'ksatria'){
  console.log('selamat datang di dunia proxytia,',nama)
  console.log('halo ksatria ', nama , 'kamu dapat menyerang dengan senjatamu!')
}else if(nama !== "" && peran ==='tabib'){
  console.log('selamat datang di dunia proxytia,' ,nama)
  console.log('halo tabib ,' , nama , 'kamu akan membantu temanmu yang terluka')
}else if(nama !== "" && peran === 'penyihir'){
  console.log('selamat datang di dunia proxytia,' ,nama)
  console.log('halo penyihir ' , nama , 'ciptakan keajaiban yang membantu kemenanganmu!')
}



///Menggunakan Switch-Case
var tanggal = '13'
var bulan = '1'
var tahun = '2000'

switch(bulan){
  case '1':
   console.log(tanggal,'januari',tahun)
  break;
  case '2':
   console.log(tanggal,'februari',tahun)
  break;
  case '3':
   console.log(tanggal,'maret',tahun)
  break;
  case '4':
   console.log(tanggal,'april',tahun)
  break;
  case '5':
   console.log(tanggal,'mei',tahun)
  break;
  case '6':
   console.log(tanggal,'juni',tahun)
  break;
  case '7':
   console.log(tanggal,'juli',tahun)
  break;
  case '8':
   console.log(tanggal,'agustus',tahun)
  break;
  case '9':
   console.log(tanggal,'september',tahun)
  break;
  case '10':
   console.log(tanggal,'oktober',tahun)
  break;
  case '11':
   console.log(tanggal,'november',tahun)
  break;
  case '12':
   console.log(tanggal,'desember',tahun)
  break;
}