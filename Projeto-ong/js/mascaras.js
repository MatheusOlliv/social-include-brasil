function aplicarMascaraCPF(input) {
  input.value = input.value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function aplicarMascaraCelular(input) {
  input.value = input.value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
}

function aplicarMascaraCEP(input) {
  input.value = input.value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1');
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('cpf').addEventListener('input', function () {
    aplicarMascaraCPF(this);
  });

  document.getElementById('celular').addEventListener('input', function () {
    aplicarMascaraCelular(this);
  });

  document.getElementById('cep').addEventListener('input', function () {
    aplicarMascaraCEP(this);
  });
});
