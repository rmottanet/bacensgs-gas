# bacensgs-gas

## ctrl+s :v:

**BacenSgs** é uma biblioteca JavaScript para o Google Apps Script que facilita a interação com a API do Sistema de Gerenciamento de Séries Temporais (SGS) do Banco Central do Brasil (BCB). Com esta biblioteca, você pode facilmente recuperar dados históricos de diversas variáveis econômicas e financeiras disponibilizadas pelo BCB.

### Instalação

Para utilizar o **BacenSgs** em seu script do Google Apps Script, siga os seguintes passos:

1. Abra o script do Google Apps Script onde deseja utilizar a biblioteca.
2. Acesse **Biblioteca > Adicionar bibliotecas**.
3. Cole a ID do projeto:

```plaintext
1pmDEF2HnD0TbBvI9fsoZcMUVGp8sVnq9cCsXkt3n06PVDnKmI0O_yGRF
```

### Uso da Biblioteca

A biblioteca **BacenSgs** expõe a função `getDataSerie` para recuperar dados históricos de uma série específica.

A função `getDataSerie` recebe dois parâmetros:

* **seriesCode (string):** O código identificador da série desejada. Você pode encontrar a lista de códigos disponíveis na documentação da API do SGS do BCB ([https://www3.bcb.gov.br/sgspub/](https://www3.bcb.gov.br/sgspub/)).
* **params (object - opcional):** Objeto contendo parâmetros opcionais para a consulta.
    * **periods (number):** Número de períodos recentes da série a serem recuperados. Ao informar este parâmetro, as opções `startDate` e `endDate` serão ignoradas.
    * **startDate (string):** Data inicial da série no formato dd/mm/yyyy. Deve ser informada junto com `endDate`.
    * **endDate (string):** Data final da série no formato dd/mm/yyyy. Deve ser informada junto com `startDate`.

A função retorna um objeto JSON contendo os dados da série temporal recuperada. 

**Exemplo de Uso:**

```javascript
// Recuperar os 4 últimos períodos da série identificada pelo código "1637"
const data = BacenSgs.getDataSerie('1637', { periods: 4 });

// Recuperar a série identificada pelo código "433" entre 01/01/2020 e 01/01/2021
const data = BacenSgs.getDataSerie('433', { startDate: '01/01/2020', endDate: '01/01/2021' });

Logger.log(data);
```

---

Agradeço por considerar **BacenSgs** para as suas necessidades. Se você tiver alguma dúvida ou precisar de mais assistência, não hesite em entrar em contato.

<br />
<br />
<div align="center">
  <a href="https://bitbucket.org/rmottalabs/"><img alt="Static Badge" src="https://img.shields.io/badge/-Bitbucket?style=social&logo=bitbucket&logoSize=auto&label=Bitbucket&link=https%3A%2F%2Fbitbucket.org%2Frmottalabs%2Fworkspace%2Foverview%2F"></a>
  <a href="https://gitlab.com/rmottanet"><img alt="Static Badge" src="https://img.shields.io/badge/-Gitlab?style=social&logo=gitlab&logoSize=auto&label=Gitlab&link=https%3A%2F%2Fgitlab.com%2Frmottanet"></a>
  <a href="https://github.com/rmottanet"><img alt="Static Badge" src="https://img.shields.io/badge/-Github?style=social&logo=github&logoSize=auto&label=Github&link=https%3A%2F%2Fgithub.com%2Frmottanet"></a>
  <a href="https://hub.docker.com/"><img alt="Static Badge" src="https://img.shields.io/badge/-DockerHub?style=social&logo=docker&logoSize=auto&label=DockerHub&link=https%3A%2F%2Fhub.docker.com%2Fu%2Frmottanet"></a>
</div>
