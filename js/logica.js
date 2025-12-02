document.addEventListener('DOMContentLoaded', function () {

  function setResult(id, html) {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = html;
    el.classList.add('show');
  }

  function clearResult(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = '';
    el.classList.remove('show');
  }

  function ordenar1a20() {
    const numeros = [];
    for (let i = 1; i <= 20; i++) numeros.push(i);

    const html =
      `<strong>Crescente:</strong> ${numeros.join(', ')}<br><br>` +
      `<strong>Decrescente:</strong> ${[...numeros].reverse().join(', ')}`;

    setResult('r1', html);
  }

  function bubbleSortRandom() {
    const qtdInput = document.getElementById('qtd-bubble');
    let qtd = 10;
    if (qtdInput) qtd = Math.max(1, Math.min(50, parseInt(qtdInput.value) || 10));

    let vet = [];
    for (let i = 0; i < qtd; i++) vet.push(Math.floor(Math.random() * 20) + 1);
    const original = [...vet];

    for (let i = 0; i < vet.length; i++) {
      for (let j = 0; j < vet.length - 1; j++) {
        if (vet[j] > vet[j + 1]) {
          const tmp = vet[j];
          vet[j] = vet[j + 1];
          vet[j + 1] = tmp;
        }
      }
    }

    const html =
      `<strong>Vetor original:</strong> ${original.join(', ')}<br><br>` +
      `<strong>Vetor ordenado:</strong> ${vet.join(', ')}`;

    setResult('r2', html);
  }

  function somaAleatorios() {
    const qtdInput = document.getElementById('qtd-soma');
    let qtd = 10;
    if (qtdInput) qtd = Math.max(1, Math.min(100, parseInt(qtdInput.value) || 10));

    const nums = [];
    let soma = 0;
    for (let i = 0; i < qtd; i++) {
      const n = Math.floor(Math.random() * 220) + 1;
      nums.push(n);
      soma += n;
    }

    const html =
      `<strong>Números:</strong> ${nums.join(', ')}<br><br>` +
      `<strong>Soma total:</strong> ${soma}`;

    setResult('r3', html);
  }

  function matriz3x3() {
    const m = [];
    for (let i = 0; i < 3; i++) {
      m[i] = [];
      for (let j = 0; j < 3; j++) {
        m[i][j] = Math.floor(Math.random() * 20) + 1;
      }
    }
    const txt = m.map(row => row.join(' &nbsp;&nbsp;|&nbsp;&nbsp; ')).join('<br>');
    setResult('r4', `<strong>Matriz 3x3:</strong><br><br>${txt}`);
  }

  function calcularIMC() {
    const pesoEl = document.getElementById('peso');
    const alturaEl = document.getElementById('altura');
    const peso = pesoEl ? parseFloat(pesoEl.value) : NaN;
    const altura = alturaEl ? parseFloat(alturaEl.value) : NaN;

    if (!Number.isFinite(peso) || !Number.isFinite(altura) || peso <= 0 || altura <= 0) {
      setResult('r5', '<strong>Erro:</strong> Por favor, insira peso e altura válidos (maiores que 0).');
      return;
    }

    const imc = peso / (altura * altura);
    let classificacao = '';
    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc < 25) classificacao = 'Peso normal';
    else if (imc < 30) classificacao = 'Sobrepeso';
    else classificacao = 'Obesidade';

    const html =
      `<strong>Peso:</strong> ${peso} kg<br>` +
      `<strong>Altura:</strong> ${altura} m<br><br>` +
      `<strong>IMC:</strong> ${imc.toFixed(2)}<br>` +
      `<strong>Classificação:</strong> ${classificacao}`;

    setResult('r5', html);
  }

  function converterTemperatura() {
    const cEl = document.getElementById('celsius');
    const fEl = document.getElementById('fahrenheit');
    const cVal = cEl ? cEl.value.trim() : '';
    const fVal = fEl ? fEl.value.trim() : '';

    const c = cVal === '' ? NaN : parseFloat(cVal);
    const f = fVal === '' ? NaN : parseFloat(fVal);

    if (!Number.isFinite(c) && !Number.isFinite(f)) {
      setResult('r6', '<strong>Erro:</strong> Preencha pelo menos °C ou °F.');
      return;
    }

    let out = '';
    if (Number.isFinite(c)) {
      const fConv = (c * 9/5) + 32;
      out += `<strong>${c}°C →</strong> ${fConv.toFixed(2)}°F`;
    }
    if (Number.isFinite(c) && Number.isFinite(f)) out += '<br>';
    if (Number.isFinite(f)) {
      const cConv = (f - 32) * 5/9;
      out += `<strong>${f}°F →</strong> ${cConv.toFixed(2)}°C`;
    }

    setResult('r6', out);
  }

  function buscaLinear() {
    const vet = [5, 10, 3, 8, 2, 9];
    const buscaEl = document.getElementById('valorBusca');
    const buscaRaw = buscaEl ? buscaEl.value : '';
    const busca = parseFloat(buscaRaw);

    if (!Number.isFinite(busca)) {
      setResult('r7', '<strong>Erro:</strong> Insira um valor numérico para buscar.');
      return;
    }

    const pos = vet.indexOf(busca);
    const resultado = pos !== -1 ? `Valor encontrado na posição ${pos}` : 'Valor não encontrado.';
    const html = `<strong>Vetor:</strong> [${vet.join(', ')}]<br><br><strong>Busca:</strong> ${busca}<br><br><strong>Resultado:</strong> ${resultado}`;
    setResult('r7', html);
  }

  function limparTodos() {
    ['r1','r2','r3','r4','r5','r6','r7'].forEach(id => clearResult(id));
  }

  const b1 = document.getElementById('btn1');
  const b2 = document.getElementById('btn2');
  const b3 = document.getElementById('btn3');
  const b4 = document.getElementById('btn4');
  const b5 = document.getElementById('btn5');
  const b6 = document.getElementById('btn6');
  const b7 = document.getElementById('btn7');

  if (b1) b1.addEventListener('click', ordenar1a20);
  if (b2) b2.addEventListener('click', bubbleSortRandom);
  if (b3) b3.addEventListener('click', somaAleatorios);
  if (b4) b4.addEventListener('click', matriz3x3);
  if (b5) b5.addEventListener('click', calcularIMC);
  if (b6) b6.addEventListener('click', converterTemperatura);
  if (b7) b7.addEventListener('click', buscaLinear);

});
