var pessoas = [];

function mlkFino() {
  var headerOn = document.getElementById('headerOn')
  var name = document.getElementById('name');
  document.getElementById('name').innerHTML = 'Mlk Gente Boa! ( ´･･)ﾉ(._.`)';
  name.style.color = 'whitesmoke';
  name.style.fontFamily = 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif'
  name.style.paddingTop = '10px'
  headerOn.style.background = 'crimson';
  headerOn.style.transition = '0.3s'
  headerOn.style.borderRadius = '10px'
}

function normal() {
  var headerOn = document.getElementById('headerOn')
  var name = document.getElementById('name');
  document.getElementById('name').innerHTML = 'Felipe Marques de Stefano';
  name.style.color = 'black';
  name.style.fontFamily = 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif'
  name.style.paddingTop = '13px'
  headerOn.style.background = 'white';
  headerOn.style.transition = '0.3s'
  headerOn.style.borderRadius = '10px'
}

function add() {
  var nome = document.getElementById('nome').value;
  var sexo = document.getElementById('sexo').value;
  var idade = document.getElementById('idade').value;
  var cadastro = {
    'nome': nome,
    'sexo': sexo,
    'idade': idade
  }
  if (document.getElementById('nome').value == "" || document.getElementById('sexo').value == "" || document.getElementById('idade').value == "") {
    alert('Preencha os campos, não deixe-os vazios!')
  }
  else if (cadastro.sexo !== "Masculino" && cadastro.sexo !== "Feminino") {
    alert('Informe Masculino ou Feminino!');
  }
  else if (cadastro.idade <= 0) {
    alert('Informe um número e que seja maior que 0!');
  }
  else {
    pessoas.push(cadastro);
    msgText();
    let time = setTimeout(msgNone, 2500)
  }
}

function listarCadastros() {
  var listaUL = '';
  for (var i = 0; i < pessoas.length; i++) {
    var cadastro = pessoas[i];
    var conteudo = '<li>';
    if (cadastro.sexo === 'Masculino') {
      conteudo += "🎅 " + cadastro.nome;
    }
    else if (cadastro.sexo === 'Feminino') {
      conteudo += "🤶 " + cadastro.nome;
    }
    conteudo += ' | ';
    conteudo += 'Sexo ' + cadastro.sexo;
    conteudo += ' | ';
    conteudo += cadastro.idade + ' Anos';
    conteudo += '</li>';
    listaUL += conteudo;
  }
  document.getElementById('listResults').innerHTML = listaUL;
}

function ana() {
  listarCadastros();
  var analisar = document.getElementById('results')
  analisar.style.display = 'block'
  var qtdCadastro = document.getElementById('qtdPessoasCadastradas')
  qtdCadastro.innerHTML = `Pessoas Cadastradas: ${pessoas.length}`
  maisVelho();
  maisNovo();
}

function maisVelho() {
  var maior = 0;
  var listaMax = '';
  for (var i = 0; i < pessoas.length; i++) {
    if (maior < parseInt(pessoas[i].idade)) {
      maior = parseInt(pessoas[i].idade);
      var conteudo = '<li>';
      conteudo += pessoas[i].nome;
      conteudo += ' | ';
      conteudo += maior + ' Anos';
      conteudo += '</li>';
      listaMax = conteudo;
      document.getElementById('listResultMax').innerHTML = listaMax;
    }
    else if (maior == parseInt(pessoas[i].idade)) {
      maior = parseInt(pessoas[i].idade);
      var conteudo = '<li>';
      conteudo += pessoas[i].nome;
      conteudo += ' | ';
      conteudo += maior + ' Anos';
      conteudo += '</li>';
      listaMax += conteudo;
      document.getElementById('listResultMax').innerHTML = listaMax;
    }
  }
}

function maisNovo() {
  var menor = 9999999999;
  var listaMin = '';
  for (var i = 0; i < pessoas.length; i++) {
    if (menor > parseInt(pessoas[i].idade)) {
      menor = parseInt(pessoas[i].idade);
      var conteudo = '<li>';
      conteudo += pessoas[i].nome;
      conteudo += ' | ';
      conteudo += menor + ' Anos';
      conteudo += '</li>';
      listaMin = conteudo;
      document.getElementById('listResultMin').innerHTML = listaMin;
    }
    else if (menor == parseInt(pessoas[i].idade)) {
      menor = parseInt(pessoas[i].idade);
      var conteudo = '<li>';
      conteudo += pessoas[i].nome;
      conteudo += ' | ';
      conteudo += menor + ' Anos';
      conteudo += '</li>';
      listaMin += conteudo;
      document.getElementById('listResultMin').innerHTML = listaMin;
    }
  }
}

function msgText() {
  var msg = document.getElementById('msg');
  msg.style.display = 'block';
  if (document.getElementById('sexo').value === 'Masculino'){
    msg.innerHTML = '> Cadastrado com sucesso!'
    msg.style.color = 'royalblue'
  }
  else {
    msg.innerHTML = '> Cadastrada com sucesso!'
    msg.style.color = 'rgb(225, 65, 65)'
  }
} 

function msgNone() {
  var msg = document.getElementById('msg');
  msg.style.display = 'none';
}