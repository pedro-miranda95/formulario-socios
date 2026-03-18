var SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzLOKbDdb2aK_UnRZQHEzh9F9480cwuWUhLKeYV2t_kdgIQX9qphkMxYgP2TocCEe_X/exec';


/* ────────────────────────────────────────────
   Codigo Postal → Localidade (API CTT)
──────────────────────────────────────────── */
var cpTimer = null;
var CTT_API = 'https://www.cttcodigopostal.pt/api/v1/99d1295e0b3e4f11b3ad4bafe7f85c55/';

function formatarCP(input) {
  var v = input.value.replace(/\D/g, '');
  if (v.length > 4) {
    input.value = v.substring(0, 4) + '-' + v.substring(4, 7);
  } else {
    input.value = v;
  }
  clearTimeout(cpTimer);
  var cp = input.value;
  if (/^\d{4}-\d{3}$/.test(cp)) {
    cpTimer = setTimeout(function () { procurarLocalidade(cp); }, 500);
  } else {
    document.getElementById('cpHint').textContent = '';
    document.getElementById('localidade').classList.remove('success-field');
  }
}

function procurarLocalidade(cp) {
  var spinner    = document.getElementById('cpSpinner');
  var hint       = document.getElementById('cpHint');
  var localInput = document.getElementById('localidade');

  spinner.style.display = 'block';
  hint.textContent = '';

  fetch(CTT_API + cp)
    .then(function (r) { return r.json(); })
    .then(function (data) {
      spinner.style.display = 'none';
      if (data && data.length > 0 && data[0].localidade) {
        localInput.value = data[0].localidade;
        localInput.classList.add('success-field');
        localInput.classList.remove('error');
        hint.style.color = '#4A9B6F';
        hint.textContent = 'Localidade encontrada: ' + data[0].concelho + ', ' + data[0].distrito;
      } else {
        localInput.value = '';
        localInput.classList.remove('success-field');
        hint.style.color = 'var(--text-hint)';
        hint.textContent = 'Codigo postal nao encontrado - preencha manualmente';
      }
    })
    .catch(function () {
      spinner.style.display = 'none';
      hint.style.color = 'var(--text-hint)';
      hint.textContent = 'Nao foi possivel obter a localidade - preencha manualmente';
    });
}

/* ────────────────────────────────────────────
   Validacao da quota em tempo real
──────────────────────────────────────────── */
function validarQuota(input) {
  var erro = document.getElementById('quotaErro');
  var v    = parseFloat(input.value);
  if (input.value !== '' && (isNaN(v) || v < 1)) {
    input.classList.add('error');
    erro.style.display = 'block';
  } else {
    input.classList.remove('error');
    erro.style.display = 'none';
  }
}

/* ────────────────────────────────────────────
   Mostrar alerta de resultado
──────────────────────────────────────────── */
function mostrarAlerta(tipo, titulo, msg) {
  var box = document.getElementById('alertaBox');
  box.className     = 'alerta ' + tipo;
  box.style.display = 'block';
  document.getElementById('alertaTitulo').textContent = titulo;
  document.getElementById('alertaMsg').textContent    = msg;
  box.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/* ────────────────────────────────────────────
   Submeter formulario
──────────────────────────────────────────── */
function submeter() {
  var campos = [
    { id: 'nome',       label: 'Nome completo' },
    { id: 'nif',        label: 'NIF' },
    { id: 'dob',        label: 'Data de nascimento' },
    { id: 'morada',     label: 'Morada' },
    { id: 'cp',         label: 'Codigo postal' },
    { id: 'localidade', label: 'Localidade' },
    { id: 'telemovel',  label: 'Telemovel' },
    { id: 'email',      label: 'Email' }
  ];

  var primeiro = null;
  for (var i = 0; i < campos.length; i++) {
    var el = document.getElementById(campos[i].id);
    el.classList.remove('error');
    if (!el.value.trim()) {
      el.classList.add('error');
      if (!primeiro) primeiro = { el: el, label: campos[i].label };
    }
  }
  if (primeiro) {
    primeiro.el.focus();
    alert('Por favor preencha o campo: ' + primeiro.label);
    return;
  }

  var quota = parseFloat(document.getElementById('quota').value);
  if (!document.getElementById('quota').value.trim() || isNaN(quota) || quota < 1) {
    document.getElementById('quota').classList.add('error');
    document.getElementById('quotaErro').style.display = 'block';
    document.getElementById('quota').focus();
    alert('O valor da quota deve ser no minimo 1 euro por mes.');
    return;
  }

  if (!document.getElementById('rgpd').checked) {
    alert('Por favor aceite o consentimento RGPD.');
    return;
  }
  if (!document.getElementById('declaro').checked) {
    alert('Por favor confirme a declaracao do proponente.');
    return;
  }

  var btn = document.getElementById('btnSubmit');
  btn.disabled    = true;
  btn.textContent = 'A enviar...';

  var dados = {
    nome:       document.getElementById('nome').value,
    nif:        document.getElementById('nif').value,
    dob:        document.getElementById('dob').value,
    morada:     document.getElementById('morada').value,
    cp:         document.getElementById('cp').value,
    localidade: document.getElementById('localidade').value,
    telefone:   document.getElementById('telefone').value,
    telemovel:  document.getElementById('telemovel').value,
    email:      document.getElementById('email').value,
    quota:      document.getElementById('quota').value
  };

  fetch(SCRIPT_URL, {
    method: 'POST',
    body: JSON.stringify(dados)
  })
    .then(function (res) { return res.json(); })
    .then(function (json) {
      if (json.status === 'ok') {
        btn.style.display = 'none';
        mostrarAlerta('sucesso', 'Proposta submetida com sucesso!',
          'A sua proposta sera analisada e aprovada pela Direcao. Entraremos em contacto brevemente.');
      } else {
        btn.disabled    = false;
        btn.textContent = 'Submeter proposta';
        mostrarAlerta('falha', 'Ocorreu um erro.',
          'Por favor tente novamente ou contacte o centro diretamente.');
      }
    })
    .catch(function () {
      btn.disabled    = false;
      btn.textContent = 'Submeter proposta';
      mostrarAlerta('falha', 'Ocorreu um erro.',
        'Verifique a sua ligacao a internet e tente novamente.');
    });
}