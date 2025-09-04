const divTableContainer = document.getElementById('table-estudiantes')

const data = [
    { nombre: "Ana", edad: 20, carrera: "Ingeniería" },
    { nombre: "Luis", edad: 22, carrera: "Medicina" },
    { nombre: "Marta", edad: 21, carrera: "Derecho" },
    { nombre: "Carlos", edad: 23, carrera: "Arquitectura" }
];

const table = document.createElement('table')
const thead = table.createTHead()
const tbody = table.createTBody()


const teadTr = document.createElement('tr')
for (const elemento of Object.keys(data[0])) {
    const th = document.createElement('th')
    th.textContent = elemento
    teadTr.appendChild(th)
}
thead.appendChild(teadTr)

for (const d of data) {
    const trTbody = document.createElement('tr')
    for (const key of Object.keys(data[0])) {
        const td = document.createElement('td')
        td.textContent = d[key]
        trTbody.appendChild(td)
    }
    tbody.appendChild(trTbody)
}

divTableContainer.appendChild(table)