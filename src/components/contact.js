const contactContainer = document.getElementById('contact');

const createForm = () => {
    contactContainer.innerHTML = `
    <form>
        <input type="text" name="name" id="name" required autocomplete="off" placeholder="Nombre">
        
        <input type="email" name="email" id="email" required autocomplete="off" placeholder="Email">
        
        <textarea name="message" id="messaje" placeholder="Escribe tu mensaje"></textarea>

        <button>Enviar</button>
    </form>`;

}

createForm();