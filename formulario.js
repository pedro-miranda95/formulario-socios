var SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzLOKbDdb2aK_UnRZQHEzh9F9480cwuWUhLKeYV2t_kdgIQX9qphkMxYgP2TocCEe_X/exec';

/* ────────────────────────────────────────────
   Lista de paises com bandeira e prefixo
──────────────────────────────────────────── */
var PAISES = [
  { flag: '🇵🇹', pais: 'Portugal', codigo: '+351' },
  { flag: '🇦🇫', pais: 'Afeganistao', codigo: '+93' },
  { flag: '🇿🇦', pais: 'Africa do Sul', codigo: '+27' },
  { flag: '🇦🇱', pais: 'Albania', codigo: '+355' },
  { flag: '🇩🇿', pais: 'Algeria', codigo: '+213' },
  { flag: '🇦🇩', pais: 'Andorra', codigo: '+376' },
  { flag: '🇦🇴', pais: 'Angola', codigo: '+244' },
  { flag: '🇦🇬', pais: 'Antigua e Barbuda', codigo: '+1-268' },
  { flag: '🇸🇦', pais: 'Arabia Saudita', codigo: '+966' },
  { flag: '🇦🇷', pais: 'Argentina', codigo: '+54' },
  { flag: '🇦🇲', pais: 'Armenia', codigo: '+374' },
  { flag: '🇦🇺', pais: 'Australia', codigo: '+61' },
  { flag: '🇦🇹', pais: 'Austria', codigo: '+43' },
  { flag: '🇦🇿', pais: 'Azerbaijao', codigo: '+994' },
  { flag: '🇧🇸', pais: 'Bahamas', codigo: '+1-242' },
  { flag: '🇧🇩', pais: 'Bangladesh', codigo: '+880' },
  { flag: '🇧🇧', pais: 'Barbados', codigo: '+1-246' },
  { flag: '🇧🇭', pais: 'Bareine', codigo: '+973' },
  { flag: '🇧🇪', pais: 'Belgica', codigo: '+32' },
  { flag: '🇧🇿', pais: 'Belize', codigo: '+501' },
  { flag: '🇧🇯', pais: 'Benim', codigo: '+229' },
  { flag: '🇧🇾', pais: 'Bielorrussia', codigo: '+375' },
  { flag: '🇧🇴', pais: 'Bolivia', codigo: '+591' },
  { flag: '🇧🇦', pais: 'Bosnia e Herzegovina', codigo: '+387' },
  { flag: '🇧🇼', pais: 'Botswana', codigo: '+267' },
  { flag: '🇧🇷', pais: 'Brasil', codigo: '+55' },
  { flag: '🇧🇳', pais: 'Brunei', codigo: '+673' },
  { flag: '🇧🇬', pais: 'Bulgaria', codigo: '+359' },
  { flag: '🇧🇫', pais: 'Burquina Faso', codigo: '+226' },
  { flag: '🇧🇮', pais: 'Burundi', codigo: '+257' },
  { flag: '🇧🇹', pais: 'Butao', codigo: '+975' },
  { flag: '🇨🇻', pais: 'Cabo Verde', codigo: '+238' },
  { flag: '🇨🇲', pais: 'Camaroes', codigo: '+237' },
  { flag: '🇰🇭', pais: 'Camboja', codigo: '+855' },
  { flag: '🇨🇦', pais: 'Canada', codigo: '+1' },
  { flag: '🇶🇦', pais: 'Catar', codigo: '+974' },
  { flag: '🇰🇿', pais: 'Cazaquistao', codigo: '+7' },
  { flag: '🇹🇩', pais: 'Chade', codigo: '+235' },
  { flag: '🇨🇱', pais: 'Chile', codigo: '+56' },
  { flag: '🇨🇳', pais: 'China', codigo: '+86' },
  { flag: '🇨🇾', pais: 'Chipre', codigo: '+357' },
  { flag: '🇨🇴', pais: 'Colombia', codigo: '+57' },
  { flag: '🇰🇲', pais: 'Comores', codigo: '+269' },
  { flag: '🇨🇬', pais: 'Congo', codigo: '+242' },
  { flag: '🇨🇩', pais: 'Congo (RDC)', codigo: '+243' },
  { flag: '🇰🇵', pais: 'Coreia do Norte', codigo: '+850' },
  { flag: '🇰🇷', pais: 'Coreia do Sul', codigo: '+82' },
  { flag: '🇨🇷', pais: 'Costa Rica', codigo: '+506' },
  { flag: '🇨🇮', pais: 'Costa do Marfim', codigo: '+225' },
  { flag: '🇭🇷', pais: 'Croacia', codigo: '+385' },
  { flag: '🇨🇺', pais: 'Cuba', codigo: '+53' },
  { flag: '🇩🇰', pais: 'Dinamarca', codigo: '+45' },
  { flag: '🇩🇯', pais: 'Djibuti', codigo: '+253' },
  { flag: '🇩🇲', pais: 'Dominica', codigo: '+1-767' },
  { flag: '🇪🇬', pais: 'Egito', codigo: '+20' },
  { flag: '🇸🇻', pais: 'El Salvador', codigo: '+503' },
  { flag: '🇦🇪', pais: 'Emirados Arabes Unidos', codigo: '+971' },
  { flag: '🇪🇨', pais: 'Equador', codigo: '+593' },
  { flag: '🇪🇷', pais: 'Eritreia', codigo: '+291' },
  { flag: '🇸🇰', pais: 'Eslovaquia', codigo: '+421' },
  { flag: '🇸🇮', pais: 'Eslovenia', codigo: '+386' },
  { flag: '🇪🇸', pais: 'Espanha', codigo: '+34' },
  { flag: '🇺🇸', pais: 'Estados Unidos', codigo: '+1' },
  { flag: '🇪🇪', pais: 'Estonia', codigo: '+372' },
  { flag: '🇸🇿', pais: 'Eswatini', codigo: '+268' },
  { flag: '🇪🇹', pais: 'Etiopia', codigo: '+251' },
  { flag: '🇫🇯', pais: 'Fiji', codigo: '+679' },
  { flag: '🇵🇭', pais: 'Filipinas', codigo: '+63' },
  { flag: '🇫🇮', pais: 'Finlandia', codigo: '+358' },
  { flag: '🇫🇷', pais: 'Franca', codigo: '+33' },
  { flag: '🇬🇦', pais: 'Gabao', codigo: '+241' },
  { flag: '🇬🇲', pais: 'Gambia', codigo: '+220' },
  { flag: '🇬🇭', pais: 'Gana', codigo: '+233' },
  { flag: '🇬🇪', pais: 'Georgia', codigo: '+995' },
  { flag: '🇬🇩', pais: 'Granada', codigo: '+1-473' },
  { flag: '🇬🇷', pais: 'Grecia', codigo: '+30' },
  { flag: '🇬🇹', pais: 'Guatemala', codigo: '+502' },
  { flag: '🇬🇾', pais: 'Guiana', codigo: '+592' },
  { flag: '🇬🇳', pais: 'Guine', codigo: '+224' },
  { flag: '🇬🇶', pais: 'Guine Equatorial', codigo: '+240' },
  { flag: '🇬🇼', pais: 'Guine-Bissau', codigo: '+245' },
  { flag: '🇭🇹', pais: 'Haiti', codigo: '+509' },
  { flag: '🇭🇳', pais: 'Honduras', codigo: '+504' },
  { flag: '🇭🇺', pais: 'Hungria', codigo: '+36' },
  { flag: '🇾🇪', pais: 'Iemen', codigo: '+967' },
  { flag: '🇮🇳', pais: 'India', codigo: '+91' },
  { flag: '🇮🇩', pais: 'Indonesia', codigo: '+62' },
  { flag: '🇮🇷', pais: 'Ira', codigo: '+98' },
  { flag: '🇮🇶', pais: 'Iraque', codigo: '+964' },
  { flag: '🇮🇪', pais: 'Irlanda', codigo: '+353' },
  { flag: '🇮🇸', pais: 'Islandia', codigo: '+354' },
  { flag: '🇮🇱', pais: 'Israel', codigo: '+972' },
  { flag: '🇮🇹', pais: 'Italia', codigo: '+39' },
  { flag: '🇯🇲', pais: 'Jamaica', codigo: '+1-876' },
  { flag: '🇯🇵', pais: 'Japao', codigo: '+81' },
  { flag: '🇯🇴', pais: 'Jordania', codigo: '+962' },
  { flag: '🇰🇼', pais: 'Kuwait', codigo: '+965' },
  { flag: '🇱🇦', pais: 'Laos', codigo: '+856' },
  { flag: '🇱🇸', pais: 'Lesoto', codigo: '+266' },
  { flag: '🇱🇻', pais: 'Letonia', codigo: '+371' },
  { flag: '🇱🇧', pais: 'Libano', codigo: '+961' },
  { flag: '🇱🇷', pais: 'Liberia', codigo: '+231' },
  { flag: '🇱🇾', pais: 'Libia', codigo: '+218' },
  { flag: '🇱🇮', pais: 'Liechtenstein', codigo: '+423' },
  { flag: '🇱🇹', pais: 'Lituania', codigo: '+370' },
  { flag: '🇱🇺', pais: 'Luxemburgo', codigo: '+352' },
  { flag: '🇲🇬', pais: 'Madagascar', codigo: '+261' },
  { flag: '🇲🇾', pais: 'Malasia', codigo: '+60' },
  { flag: '🇲🇼', pais: 'Malawi', codigo: '+265' },
  { flag: '🇲🇻', pais: 'Maldivas', codigo: '+960' },
  { flag: '🇲🇱', pais: 'Mali', codigo: '+223' },
  { flag: '🇲🇹', pais: 'Malta', codigo: '+356' },
  { flag: '🇲🇦', pais: 'Marrocos', codigo: '+212' },
  { flag: '🇲🇺', pais: 'Mauricia', codigo: '+230' },
  { flag: '🇲🇷', pais: 'Mauritania', codigo: '+222' },
  { flag: '🇲🇽', pais: 'Mexico', codigo: '+52' },
  { flag: '🇲🇲', pais: 'Mianmar', codigo: '+95' },
  { flag: '🇲🇿', pais: 'Mocambique', codigo: '+258' },
  { flag: '🇲🇩', pais: 'Moldova', codigo: '+373' },
  { flag: '🇲🇨', pais: 'Monaco', codigo: '+377' },
  { flag: '🇲🇳', pais: 'Mongolia', codigo: '+976' },
  { flag: '🇲🇪', pais: 'Montenegro', codigo: '+382' },
  { flag: '🇳🇦', pais: 'Namibia', codigo: '+264' },
  { flag: '🇳🇷', pais: 'Nauru', codigo: '+674' },
  { flag: '🇳🇵', pais: 'Nepal', codigo: '+977' },
  { flag: '🇳🇮', pais: 'Nicaragua', codigo: '+505' },
  { flag: '🇳🇪', pais: 'Niger', codigo: '+227' },
  { flag: '🇳🇬', pais: 'Nigeria', codigo: '+234' },
  { flag: '🇳🇴', pais: 'Noruega', codigo: '+47' },
  { flag: '🇳🇿', pais: 'Nova Zelandia', codigo: '+64' },
  { flag: '🇴🇲', pais: 'Oma', codigo: '+968' },
  { flag: '🇳🇱', pais: 'Paises Baixos', codigo: '+31' },
  { flag: '🇵🇼', pais: 'Palau', codigo: '+680' },
  { flag: '🇵🇸', pais: 'Palestina', codigo: '+970' },
  { flag: '🇵🇦', pais: 'Panama', codigo: '+507' },
  { flag: '🇵🇬', pais: 'Papua Nova Guine', codigo: '+675' },
  { flag: '🇵🇰', pais: 'Paquistao', codigo: '+92' },
  { flag: '🇵🇾', pais: 'Paraguai', codigo: '+595' },
  { flag: '🇵🇪', pais: 'Peru', codigo: '+51' },
  { flag: '🇵🇱', pais: 'Polonia', codigo: '+48' },
  { flag: '🇰🇪', pais: 'Quenia', codigo: '+254' },
  { flag: '🇬🇧', pais: 'Reino Unido', codigo: '+44' },
  { flag: '🇨🇫', pais: 'Republica Centro-Africana', codigo: '+236' },
  { flag: '🇨🇿', pais: 'Republica Checa', codigo: '+420' },
  { flag: '🇩🇴', pais: 'Republica Dominicana', codigo: '+1-809' },
  { flag: '🇷🇴', pais: 'Romania', codigo: '+40' },
  { flag: '🇷🇼', pais: 'Ruanda', codigo: '+250' },
  { flag: '🇷🇺', pais: 'Russia', codigo: '+7' },
  { flag: '🇼🇸', pais: 'Samoa', codigo: '+685' },
  { flag: '🇸🇲', pais: 'San Marino', codigo: '+378' },
  { flag: '🇸🇹', pais: 'Sao Tome e Principe', codigo: '+239' },
  { flag: '🇸🇨', pais: 'Seicheles', codigo: '+248' },
  { flag: '🇸🇳', pais: 'Senegal', codigo: '+221' },
  { flag: '🇷🇸', pais: 'Serbia', codigo: '+381' },
  { flag: '🇸🇱', pais: 'Serra Leoa', codigo: '+232' },
  { flag: '🇸🇬', pais: 'Singapura', codigo: '+65' },
  { flag: '🇸🇾', pais: 'Siria', codigo: '+963' },
  { flag: '🇸🇴', pais: 'Somalia', codigo: '+252' },
  { flag: '🇱🇰', pais: 'Sri Lanka', codigo: '+94' },
  { flag: '🇸🇩', pais: 'Sudao', codigo: '+249' },
  { flag: '🇸🇸', pais: 'Sudao do Sul', codigo: '+211' },
  { flag: '🇸🇪', pais: 'Suecia', codigo: '+46' },
  { flag: '🇨🇭', pais: 'Suica', codigo: '+41' },
  { flag: '🇸🇷', pais: 'Suriname', codigo: '+597' },
  { flag: '🇹🇭', pais: 'Tailandia', codigo: '+66' },
  { flag: '🇹🇼', pais: 'Taiwan', codigo: '+886' },
  { flag: '🇹🇯', pais: 'Tajiquistao', codigo: '+992' },
  { flag: '🇹🇿', pais: 'Tanzania', codigo: '+255' },
  { flag: '🇹🇱', pais: 'Timor-Leste', codigo: '+670' },
  { flag: '🇹🇬', pais: 'Togo', codigo: '+228' },
  { flag: '🇹🇴', pais: 'Tonga', codigo: '+676' },
  { flag: '🇹🇹', pais: 'Trindade e Tobago', codigo: '+1-868' },
  { flag: '🇹🇳', pais: 'Tunisia', codigo: '+216' },
  { flag: '🇹🇲', pais: 'Turquemenistao', codigo: '+993' },
  { flag: '🇹🇷', pais: 'Turquia', codigo: '+90' },
  { flag: '🇹🇻', pais: 'Tuvalu', codigo: '+688' },
  { flag: '🇺🇦', pais: 'Ucrania', codigo: '+380' },
  { flag: '🇺🇬', pais: 'Uganda', codigo: '+256' },
  { flag: '🇺🇾', pais: 'Uruguai', codigo: '+598' },
  { flag: '🇺🇿', pais: 'Uzbequistao', codigo: '+998' },
  { flag: '🇻🇺', pais: 'Vanuatu', codigo: '+678' },
  { flag: '🇻🇦', pais: 'Vaticano', codigo: '+39' },
  { flag: '🇻🇪', pais: 'Venezuela', codigo: '+58' },
  { flag: '🇻🇳', pais: 'Vietname', codigo: '+84' },
  { flag: '🇿🇲', pais: 'Zambia', codigo: '+260' },
  { flag: '🇿🇼', pais: 'Zimbabwe', codigo: '+263' }
];

/* ────────────────────────────────────────────
   Estado dos prefixos selecionados
──────────────────────────────────────────── */
var prefixoSelecionado = {
  telefone:  { flag: '🇵🇹', codigo: '+351' },
  telemovel: { flag: '🇵🇹', codigo: '+351' }
};

/* ────────────────────────────────────────────
   Inicializar dropdowns
──────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  criarDropdown('telefoneDropdown', 'telefone');
  criarDropdown('telemovelDropdown', 'telemovel');

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.phone-wrapper')) {
      fecharTodosDropdowns();
    }
  });
});

function criarDropdown(dropdownId, campo) {
  var container = document.getElementById(dropdownId);

  var searchWrap = document.createElement('div');
  searchWrap.className = 'prefix-search';
  var searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Pesquisar pais...';
  searchInput.oninput = function () { filtrarPaises(campo, this.value); };
  searchInput.onclick = function (e) { e.stopPropagation(); };
  searchWrap.appendChild(searchInput);
  container.appendChild(searchWrap);

  var lista = document.createElement('div');
  lista.id = campo + 'Lista';
  container.appendChild(lista);

  renderizarPaises(campo, PAISES);
}

function renderizarPaises(campo, lista) {
  var container = document.getElementById(campo + 'Lista');
  container.innerHTML = '';
  lista.forEach(function (p) {
    var opt = document.createElement('div');
    opt.className = 'prefix-option' + (p.codigo === prefixoSelecionado[campo].codigo && p.flag === prefixoSelecionado[campo].flag ? ' selected' : '');
    opt.innerHTML = '<span class="flag">' + p.flag + '</span>'
                  + '<span class="pais">' + p.pais + '</span>'
                  + '<span class="codigo">' + p.codigo + '</span>';
    opt.onclick = function (e) { e.stopPropagation(); selecionarPais(campo, p); };
    container.appendChild(opt);
  });
}

function filtrarPaises(campo, query) {
  var q = query.toLowerCase();
  var filtrados = PAISES.filter(function (p) {
    return p.pais.toLowerCase().includes(q) || p.codigo.includes(q);
  });
  renderizarPaises(campo, filtrados);
}

function abrirDropdown(dropdownId, event) {
  if (event) event.stopPropagation();
  var campo = dropdownId.replace('Dropdown', '');
  var dropdown = document.getElementById(dropdownId);
  var jaAberto = dropdown.classList.contains('open');
  fecharTodosDropdowns();
  if (!jaAberto) {
    dropdown.classList.add('open');
    var searchInput = dropdown.querySelector('input');
    if (searchInput) { searchInput.value = ''; filtrarPaises(campo, ''); searchInput.focus(); }
  }
}

function fecharTodosDropdowns() {
  document.querySelectorAll('.prefix-dropdown').forEach(function (d) {
    d.classList.remove('open');
  });
}

function selecionarPais(campo, pais) {
  prefixoSelecionado[campo] = { flag: pais.flag, codigo: pais.codigo };
  document.getElementById(campo + 'Bandeira').textContent  = pais.flag;
  document.getElementById(campo + 'Prefixo').textContent   = pais.codigo;
  fecharTodosDropdowns();
}

function getTelefoneCompleto(campo) {
  var prefixo = prefixoSelecionado[campo].codigo;
  var numero  = document.getElementById(campo).value.trim();
  return numero ? prefixo + ' ' + numero : '';
}

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
    var loc = document.getElementById('localidade');
    loc.readOnly = false;
    loc.classList.remove('success-field', 'locked');
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
        localInput.readOnly = true;
        localInput.classList.add('success-field', 'locked');
        localInput.classList.remove('error');
        hint.style.color = '#4A9B6F';
        hint.textContent = 'Localidade encontrada: ' + data[0].concelho + ', ' + data[0].distrito;
      } else {
        localInput.value = '';
        localInput.readOnly = false;
        localInput.classList.remove('success-field', 'locked');
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
   Validacoes em tempo real
──────────────────────────────────────────── */
function mostrarErro(id, msg) {
  var el   = document.getElementById(id);
  var hint = document.getElementById(id + 'Erro');
  if (el) el.classList.add('error');
  if (hint) { hint.textContent = msg; hint.style.display = 'block'; }
}

function limparErro(id) {
  var el   = document.getElementById(id);
  var hint = document.getElementById(id + 'Erro');
  if (el) el.classList.remove('error');
  if (hint) { hint.style.display = 'none'; }
}

function validarNIF(input) {
  var v = input.value.replace(/\D/g, '');
  input.value = v;
  if (v.length > 0 && v.length !== 9) {
    mostrarErro('nif', 'O NIF deve ter exatamente 9 digitos.');
  } else {
    limparErro('nif');
  }
}

function validarData(input) {
  if (!input.value) { limparErro('dob'); return; }
  var hoje      = new Date();
  var nascimento = new Date(input.value);
  hoje.setHours(0, 0, 0, 0);
  if (nascimento > hoje) {
    mostrarErro('dob', 'A data de nascimento nao pode ser no futuro.');
  } else {
    limparErro('dob');
  }
}

function validarTelemovel(input) {
  var digitos = input.value.replace(/\D/g, '');
  if (digitos.length > 0 && digitos.length !== 9) {
    mostrarErro('telemovel', 'O numero de telemovel deve ter 9 digitos.');
  } else {
    limparErro('telemovel');
  }
}

function validarEmail(input) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (input.value.length > 0 && !re.test(input.value)) {
    mostrarErro('email', 'Introduza um endereco de email valido.');
  } else {
    limparErro('email');
  }
}

function validarQuota(input) {
  var v = parseFloat(input.value);
  if (input.value !== '' && (isNaN(v) || v < 1)) {
    mostrarErro('quota', 'O valor minimo e de 1 euro por mes.');
  } else {
    limparErro('quota');
  }
}

/* ────────────────────────────────────────────
   Mostrar alerta de resultado
──────────────────────────────────────────── */
function mostrarAlerta(tipo, titulo, msg) {
  var overlay = document.getElementById('modalOverlay');
  var icone   = document.getElementById('modalIcone');
  var btn     = document.getElementById('modalBtn');

  icone.className = 'modal-icon ' + tipo;
  icone.textContent = tipo === 'sucesso' ? '✓' : '✕';
  btn.className   = 'modal-btn ' + tipo;

  document.getElementById('modalTitulo').textContent = titulo;
  document.getElementById('modalMsg').textContent    = msg;

  overlay.classList.add('open');
}

function fecharModal() {
  document.getElementById('modalOverlay').classList.remove('open');
}

function mostrarLoading() {
  document.getElementById('loadingOverlay').classList.add('open');
}

function esconderLoading() {
  document.getElementById('loadingOverlay').classList.remove('open');
}

/* ────────────────────────────────────────────
   Submeter formulario
──────────────────────────────────────────── */
function submeter() {
  var hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  var erros = [];

  var nome = document.getElementById('nome').value.trim();
  if (!nome) { document.getElementById('nome').classList.add('error'); erros.push('nome'); }
  else limparErro('nome');

  var nif = document.getElementById('nif').value.replace(/\D/g, '');
  if (nif.length !== 9) { mostrarErro('nif', 'O NIF deve ter exatamente 9 digitos.'); erros.push('nif'); }
  else limparErro('nif');

  var dobVal = document.getElementById('dob').value;
  var dob    = new Date(dobVal);
  if (!dobVal) { mostrarErro('dob', 'Campo obrigatorio.'); erros.push('dob'); }
  else if (dob > hoje) { mostrarErro('dob', 'A data de nascimento nao pode ser no futuro.'); erros.push('dob'); }
  else limparErro('dob');

  var morada = document.getElementById('morada').value.trim();
  if (!morada) { document.getElementById('morada').classList.add('error'); erros.push('morada'); }
  else limparErro('morada');

  var cp = document.getElementById('cp').value.trim();
  if (!cp) { document.getElementById('cp').classList.add('error'); erros.push('cp'); }
  else limparErro('cp');

  var localidade = document.getElementById('localidade').value.trim();
  if (!localidade) { document.getElementById('localidade').classList.add('error'); erros.push('localidade'); }
  else limparErro('localidade');

  var telDigitos = document.getElementById('telemovel').value.replace(/\D/g, '');
  if (telDigitos.length !== 9) { mostrarErro('telemovel', 'O numero de telemovel deve ter 9 digitos.'); erros.push('telemovel'); }
  else limparErro('telemovel');

  var email = document.getElementById('email').value.trim();
  var reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!reEmail.test(email)) { mostrarErro('email', 'Introduza um endereco de email valido.'); erros.push('email'); }
  else limparErro('email');

  var quota = parseFloat(document.getElementById('quota').value);
  if (isNaN(quota) || quota < 1) { mostrarErro('quota', 'O valor minimo e de 1 euro por mes.'); erros.push('quota'); }
  else limparErro('quota');

  if (erros.length > 0) {
    var primeiro = document.querySelector('input.error');
    if (primeiro) primeiro.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
  mostrarLoading();

  var dados = {
    nome:       nome,
    nif:        nif,
    dob:        dobVal,
    morada:     morada,
    cp:         cp,
    localidade: localidade,
    telefone:   getTelefoneCompleto('telefone'),
    telemovel:  getTelefoneCompleto('telemovel'),
    email:      email,
    quota:      quota
  };

  fetch(SCRIPT_URL, {
    method: 'POST',
    body: JSON.stringify(dados)
  })
    .then(function (res) { return res.json(); })
    .then(function (json) {
      esconderLoading();
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
      esconderLoading();
      btn.disabled    = false;
      btn.textContent = 'Submeter proposta';
      mostrarAlerta('falha', 'Ocorreu um erro.',
        'Verifique a sua ligacao a internet e tente novamente.');
    });
}