let arrManusia = []
var inputManusia = () => {
    let nama = document.getElementById('nama').value
    let umur = document.getElementById('umur').value
    let kelamin = document.querySelector('input[name=kelamin]:checked').value
    let pekerjaan = document.getElementById('pekerjaan').value
    arrManusia.push({
        nama,
        umur,
        kelamin,
        pekerjaan
    })
    let list = arrManusia.map(manusia => {
        return (
            `
            <tr>
                <td>${manusia.nama}</td>
                <td>${manusia.umur}</td>
                <td>${manusia.kelamin   }</td>
                <td>${manusia.pekerjaan}</td>
            </tr>
            `
        )
    })
    document.getElementById('list-manusia').innerHTML = list.join('')
}

let arrHewan = []

var inputHewan = () => {
    let namaHewan = document.getElementById('nama-hewan').value
    let umurHewan = document.getElementById('umur-hewan').value
    let kelaminHewan = document.querySelector('input[name=kelamin-hewan]:checked').value
    let statusHewan = document.querySelector('input[name=status-hewan]:checked').value

    arrHewan.push({
        namaHewan,
        umurHewan,
        kelaminHewan,
        statusHewan
    })

    let list2 = arrHewan.map(hewan => {
        return (
            `
            <tr>
                <td>${hewan.namaHewan}</td>
                <td>${hewan.umurHewan}</td>
                <td>${hewan.kelaminHewan}</td>
                <td>${hewan.statusHewan}</td>
            </tr>
            `
        )
    })
    document.getElementById('list-hewan').innerHTML = list2.join('')
}