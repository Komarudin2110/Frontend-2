let arrManusia = []



// Akan running ketika menekan tombol 'Tambahkan' pada Table Manusia
var inputManusia = () => {
    // Ambil data dari form
    let nama = document.getElementById('nama').value
    let umur = document.getElementById('umur').value
    let gender = document.querySelector('input[name=gender]:checked').value
    let pekerjaan = document.getElementById('pekerjaan').value

    /*
        querySelector hanya akan mencari satu element, jika sudah menemukannya, tidak akan mencari lagi
        querySelectorAll akan mencari semua element
    */

    // Tambahkan data ke array

    arrManusia.push(
        {
            nama, umur, gender,pekerjaan
        }
    )

    // Render list

    // manusia = {nama, umur, gender, pekerjaan}
    let list = arrManusia.map(manusia => {
        return (
            `
            <tr>
                <td>${manusia.nama}</td>
                <td>${manusia.umur}</td>
                <td>${manusia.gender}</td>
                <td>${manusia.pekerjaan}</td>
            </tr>
            `
        )
    })

    document.getElementById('list-manusia').innerHTML = list.join('')
    // innerHTML untuk menyisipkan content ke dalam suatu tag html

}