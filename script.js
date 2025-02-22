document.addEventListener("DOMContentLoaded", function () {
    let playerNames = playerDataArray.map(player => player.nome); // Extrai os nomes das jogadoras

    // Função para selecionar uma jogadora aleatória
    function getRandomPlayer() {
        if (playerNames.length === 0) return null; // Verifica se ainda há jogadores disponíveis
        const randomIndex = Math.floor(Math.random() * playerNames.length);
        return playerNames[randomIndex];
    }

    // Exibe o nome da jogadora aleatória no topo
    const randomPlayer = getRandomPlayer();
    let randomPlayerCountry = "";
    let randomPlayerCountryTeam = "";
    let randomPlayerClub = "";
    let randomPlayerAge = "";
    let randomPlayerPosition = "";
    let randomPlayerHeight = "";
    if (randomPlayer) {
        document.getElementById("playerName").textContent = ` ${randomPlayer}`;
        const randomPlayerInfo = playerDataArray.find(player => player.nome === randomPlayer);
        randomPlayerCountry = randomPlayerInfo ? randomPlayerInfo.pais : "";
        randomPlayerCountryTeam = randomPlayerInfo ? randomPlayerInfo.ondeJoga : "";
        randomPlayerClub = randomPlayerInfo ? randomPlayerInfo.clube : "";
        randomPlayerAge = randomPlayerInfo ? randomPlayerInfo.idade : "";
        randomPlayerPosition = randomPlayerInfo ? randomPlayerInfo.posicao : "";
        randomPlayerHeight = randomPlayerInfo ? randomPlayerInfo.altura : "";
    }

    // Função para verificar se o usuário acertou a jogadora aleatória
    function checkWinCondition(nome) {
        if (nome === randomPlayer) {
            alert("Parabéns! Você acertou a jogadora misteriosa!");
            location.reload();
        }
    }

    // Função para filtrar nomes conforme a entrada do usuário
    function filterNames() {
        const input = document.getElementById("nome").value.toLowerCase();
        const nameList = document.getElementById("nameList");

        nameList.innerHTML = ""; // Limpa a lista antes de adicionar novos itens      

        const filteredNames = playerNames.filter(nome => nome.toLowerCase().includes(input));

        if (filteredNames.length > 0) {
            nameList.style.display = "block"; // Exibe a lista de sugestões
            filteredNames.forEach(nome => {
                const listItem = document.createElement("li");
                listItem.textContent = nome;
                listItem.style.cursor = "pointer"; // Torna os itens clicáveis
                listItem.onclick = function () {
                    showPlayerInfo(nome);
                    document.getElementById("nome").value = ""; // Limpa o campo de entrada
                    nameList.style.display = "none"; // Esconde a lista de sugestões
                };
                nameList.appendChild(listItem);
            });
        }
    }

    // Função para exibir as informações da jogadora
    function showPlayerInfo(nome) {
        const playerInfo = playerDataArray.find(player => player.nome === nome);
        if (!playerInfo) return;

        const container = document.getElementById("dados-container");
        const row = document.createElement("tr");

        // Cria uma linha na tabela com as informações da jogadora
        row.innerHTML = `
            <td>${playerInfo.nome}</td>        
            <td id="countryCell">${playerInfo.pais}</td>
            <td id="countryTeamCell">${playerInfo.ondeJoga}</td>
            <td id="clubCell">${playerInfo.clube}</td>
            <td id="ageCell">${playerInfo.idade}</td> 
            <td id="heightCell">${playerInfo.altura}</td> 
            <td id="positionCell">${playerInfo.posicao}</td>       
        `;

        container.prepend(row); // Adiciona a linha no topo da tabela

        // Remove o nome da lista de sugestões para evitar duplicação
        playerNames = playerNames.filter(n => n !== nome);

        // Verifica se o usuário acertou a jogadora misteriosa
        checkWinCondition(nome);

        // Chama a função para comparar os países e atualizar a cor na tabela
        compareCountries(playerInfo.pais);
        compareCountriesTeams(playerInfo.ondeJoga);
        compareClubs(playerInfo.clube);
        comparePositions(playerInfo.posicao);
        compareAges(playerInfo.idade);
        compareHeights(playerInfo.altura); // Chama a função para comparar alturas
    }

    // Função para comparar o país da jogadora aleatória com o da jogadora selecionada
    function compareCountries(selectedCountry) {
        const countryCell = document.getElementById("countryCell"); // A célula do país na tabela
        if (selectedCountry.toLowerCase() === randomPlayerCountry.toLowerCase()) {
            countryCell.style.backgroundColor = "green"; // Se os países forem iguais, cor de fundo verde
        } else {
            countryCell.style.backgroundColor = "red"; // Se os países forem diferentes, cor de fundo vermelha
        }
    }

    function compareCountriesTeams(selectedCountry) {
        const countryTeamCell = document.getElementById("countryTeamCell"); // A célula do país na tabela
        if (selectedCountry.toLowerCase() === randomPlayerCountryTeam.toLowerCase()) {
            countryTeamCell.style.backgroundColor = "green"; // Se os países forem iguais, cor de fundo verde
        } else {
            countryTeamCell.style.backgroundColor = "red"; // Se os países forem diferentes, cor de fundo vermelha
        }
    }

    function compareClubs(selectedClub) {
        const clubCell = document.getElementById("clubCell"); // A célula do país na tabela
        if (selectedClub.toLowerCase() === randomPlayerClub.toLowerCase()) {
            clubCell.style.backgroundColor = "green"; // Se os países forem iguais, cor de fundo verde
        } else {
            clubCell.style.backgroundColor = "red"; // Se os países forem diferentes, cor de fundo vermelha
        }
    }

    function comparePositions(selectedPosition) {
        const positionCell = document.getElementById("positionCell"); // A célula do país na tabela
        if (selectedPosition.toLowerCase() === randomPlayerPosition.toLowerCase()) {
            positionCell.style.backgroundColor = "green"; // Se os países forem iguais, cor de fundo verde
        } else {
            positionCell.style.backgroundColor = "red"; // Se os países forem diferentes, cor de fundo vermelha
        }
    }



    // Função para comparar as alturas
    function compareHeights(selectedHeight) {
        const heightCell = document.getElementById("heightCell"); // A célula de altura na tabela
        if (parseFloat(selectedHeight) < parseFloat(randomPlayerHeight)) {
            heightCell.innerHTML += ' ↑'; // Adiciona seta para cima se a altura for maior
        } else if (parseFloat(selectedHeight) > parseFloat(randomPlayerHeight)) {
            heightCell.innerHTML += ' ↓'; // Adiciona seta para baixo se a altura for menor
        } else {
            heightCell.style.backgroundColor = "green"; // Pinta a célula de verde se as alturas forem iguais
        }
        

    }

    function compareAges(selectedAge) {
        const ageCell = document.getElementById("ageCell"); // A célula de altura na tabela
        if (parseInt(selectedAge) < parseInt(randomPlayerAge)) {
            ageCell.innerHTML += ' ↑'; // Adiciona seta para cima se a altura for maior
        } else if (parseInt(selectedAge) > parseInt(randomPlayerAge)) {
            ageCell.innerHTML += ' ↓'; // Adiciona seta para baixo se a altura for menor
        } else {
            ageCell.style.backgroundColor = "green"; // Pinta a célula de verde se as alturas forem iguais
        }
        

    }

    // Adiciona o evento de input para filtrar os nomes
    document.getElementById("nome").addEventListener("input", filterNames);
});
