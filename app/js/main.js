// Array com dados para pesquisa
const data = [
    { name: 'Abjurador', skills: 10, type: 'Mago',image:'img/Abjurador.png'},
    { name: 'Adivinho', skills: 12, type: 'Mago' },
    { name: 'Bruxo', skills: 8, type: 'Mago' },
    { name: 'Cronomante', skills: 14, type: 'Mago' },
    { name: 'Encantador', skills: 9, type: 'Mago' },
    { name: 'Evocador', skills: 11, type: 'Mago' },
    { name: 'Geomante', skills: 9, type: 'Mago' },
    { name: 'Ilusionista', skills: 11, type: 'Mago' },
    { name: 'Invocador', skills: 11, type: 'Mago' },
    { name: 'Necromante', skills: 9, type: 'Mago' },
    { name: 'Numeromante', skills: 10, type: 'Mago' },
    { name: 'Transmutador', skills: 10, type: 'Mago' },
    { name: 'Paladino', skills: 14, type: 'Guerreiro' },
    { name: 'Guerreiro', skills: 16, type: 'Guerreiro' },
    { name: 'Ladino', skills: 18, type: 'Ladino' },
    { name: 'Bardo', skills: 15, type: 'Ladino' },
    { name: 'Druida', skills: 12, type: 'Clérigo' },
    { name: 'Feiticeiro', skills: 8, type: 'Clérigo' },
    { name: 'Clérigo', skills: 14, type: 'Clérigo' },
    { name: 'Xamã', skills: 10, type: 'Clérigo' },
];


// Função de busca
function search() {
    // Limpa resultados anteriores
    document.getElementById("searchResults").innerHTML = "";
  
    // Obtém o valor do campo de busca
    const searchValue = document.getElementById("searchInput").value;
  
    // Filtra os dados que contém o valor da busca
    const results = data.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.type.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
  
    // Exibe os resultados
    if (results.length > 0) {
      results.forEach((item) => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        const a = document.createElement("a");
        a.href = item.image;
        img.src = item.image;
        img.alt = item.name;
        img.width = 50;
        a.appendChild(img);
        li.textContent = `${item.name} - ${item.type} (${item.skills} habilidades)`;
        li.appendChild(a);
        document.getElementById("searchResults").appendChild(li);
      });
    } else {
      const li = document.createElement("li");
      li.textContent = "Nenhum resultado encontrado";
      document.getElementById("searchResults").appendChild(li);
    }
  }
