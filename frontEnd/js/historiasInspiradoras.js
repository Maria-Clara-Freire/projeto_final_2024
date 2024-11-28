async function fetchPokemon() {
    const historinhas = document.getElementById("historinhas").value.trim();

    if (!historinhas) {
      document.getElementById("errorMessage").textContent = "Por favor, digite a baixo uma palavra, e se inspire.";
      document.getElementById("errorMessage").style.display = "block";
      return;
    }

    document.getElementById("errorMessage").style.display = "none";
    document.getElementById("loadingMessage").style.display = "block";

    try {
      const response = await fetch( `http://localhost:3000/projeto/${historinhas.toLowerCase()}`);
       if (!response.ok) {throw new Error("Palavra invalida."); }

      const data = await response.json();
      console.log(data)
     

      document.getElementById("historiaInfo").style.display = "block";
      document.getElementById("historiaTitle").textContent = data.name;
      document.getElementById("historiaImage").src = data.image;
      document.getElementById("historiaImage").alt = `Imagem de ${data.name}`;
    } catch (error) {
      document.getElementById("errorMessage").textContent = error.message;
      document.getElementById("errorMessage").style.display = "block";  
      document.getElementById("historia").style.display = "none";
    } finally {
      document.getElementById("loadingMessage").style.display = "none";
    }
  }