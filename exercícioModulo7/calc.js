document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener("submit", function(e) {
      const num1 = parseFloat(document.getElementById("num1").value);
      const num2 = parseFloat(document.getElementById("num2").value);

      if (num2 > num1) {
          alert("Formulário enviado com sucesso!");
          return true; 
      } else {
          e.preventDefault();
          document.getElementById("mensagemErro").style.display = "block";
          return false;
      }
  });
});