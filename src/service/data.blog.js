const blogs = [
  {
    _id: '82jj3797202jkfk',
    author: {
      name: 'Rio Aldi Erwanto',
      image: 'rio.png',
      date: '12 Desember 2012',
    },
    title: 'Javascript Variabel',
    thumbnail: 'var.png',
    content: `<div>
        variabel adalah tempat untuk menyimpan suatu data
        didalam javacript ada 3 variabel yaitu
        <ul>
          <li>
            var (variabel pertama atau variabel bawaan
            dijavascript)
          </li>
          <li>
            let (variabel yang ada dibuat di ES6, let sendiri
            ditujukan untuk menggantikan var)
          </li>
          <li>
            const (variabel yang ada dibuat di ES6, const
            digunakan untuk menampung variabel konstanta/
            bernilai tetap)
          </li>
        </ul>
      </div>`,
  },
  {
    _id: 'y3ii38820h1hfhf',
    author: {
      name: 'Rio Aldi Erwanto',
      image: 'rio.png',
      date: '13 Desember 2012',
    },
    title: 'Javascript Tipe Data',
    thumbnail: 'tipe-data.png',
    content: `<div>
    <br/>
    <h4>Tipe Data</h4>
    <br/>
    <p>Tipe data didalam javascript ada primitif dan non-primitif
    <br/>
    <br/>
    Tipe Data Primitif adalah tipe data sederhana yang hanya mampu menampung satu jenis value
        Contoh tipe data primitif:
        <ul style="margin-left: 60px; margin-top: 20px;">
             
                <li>String</li>
                <li>Number</li>
                <li>Boolean</li>
                <li>Null</li>
                <li>undefined</li>
                <li>Bigint</li>
        </ul>
    </p>
    <br/>
    <div className="image">
    <img src="/image/tipe-data.png" className="image-thumbnail" alt="primitf-pic" width="300">
    </div>
    <br/>
    <br/>
    NonPrimitf adalah tipe data yang didefinisikan sendiri oleh programer dan bisanya lebih dari satu nilai,tipe data primitf di Javascript ada dua yaitu Array dan Object
    <br/>
    <div className="image">
    <img src="/image/nonprimitif.png" className="image-thumbnail" alt="non-primitif-pic" width="300">
    </div>
      </div>`,
  },
];

export default blogs;
