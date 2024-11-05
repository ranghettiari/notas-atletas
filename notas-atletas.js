// Função para calcular a média válida
function calcularMedia(atleta) {
    // Ordena as notas do atleta
    let notasOrdenadas = atleta.notas.sort((a, b) => a - b);
  
    // Elimina a menor e maior nota
    let notasFiltradas = notasOrdenadas.slice(1, 4);
  
    // Calcula a média das três notas restantes
    let somaNotas = notasFiltradas.reduce((acc, nota) => acc + nota, 0);
    let media = somaNotas / notasFiltradas.length;
  
    return media;
  }
  
  // Função para exibir os dados de cada atleta
  function exibirResultados(atletas) {
    // Itera sobre cada atleta
    atletas.forEach(atleta => {
      let media = calcularMedia(atleta); // Calcula a média válida
      let notas = atleta.notas.join(', '); // Junta as notas em formato string
  
      // Exibe o nome, as notas e a média
      console.log(`Atleta: ${atleta.nome}`);
      console.log(`Notas Obtidas: ${notas}`);
      console.log(`Média Válida: ${media.toFixed(9)}`);
      console.log(''); // Linha em branco entre os atletas
    });
  }
  
  // Lista de atletas com suas respectivas notas
  let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas: [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
  ];
  
  // Exibindo os resultados
  exibirResultados(atletas);
  