const objs = [
  {
    nome: 'Fabiola',
    idade: 34,
    esta_trabalhando: true,
    detalhes_profissao: {
      profissao: 'Programadora',
      empresa: 'Astro'
    },
    hobbies: [2, 'nadar', 'correr', null]
  },
  {
    nome: 'Marcos',
    idade: 26,
    esta_trabalhando: false,
    detalhes_profissao: {
      profissao: null,
      empresa: null
    },
    hobbies: [3, 'ler', 'pedalar', "comer"]
    }
]
//console.log(objs)
//console.log(typeof objs) //array de objetos


//JSON
//converter objeto para json (POST) enviar json
const jsonData = JSON.stringify(objs) //converte um array de objetos em texto
console.log(jsonData)
console.log(typeof jsonData) //string

//converter json para objeto (GET) receber json
const objData = JSON.parse(jsonData) //pega o texto e estrutura em objeto
console.log(objData)
console.log(typeof objData) //objeto (array de objetos)


