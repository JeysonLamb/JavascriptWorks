
async function enviarDatos() {
    // Obtener los valores del formulario
    const dineroJason = parseFloat(document.getElementById("dineroJason").value);
    const dineroDiego = parseFloat(document.getElementById("dineroDiego").value);
    const dineroAlberto = parseFloat(document.getElementById("dineroAlberto").value);

    // Crear el objeto que se enviará al servidor
    const data = { dineroJason, dineroDiego, dineroAlberto };

    try {
        const response = await fetch('http://localhost:3000/comprarHelado', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }

        const result = await response.json();
        document.getElementById("resultado").innerHTML = `
            <p> <b> ${result.mensajeJason} </b> </p>
            <p>  <b>${result.mensajeDiego}  <b> </p>
            <p> <b> ${result.mensajeAlberto} <b></p>
        `;
        
    } catch (error) {
        console.error('Error:', error);
        document.getElementById("resultado").innerHTML = `<p>Error: ${error.message}</p>`;
    }
}