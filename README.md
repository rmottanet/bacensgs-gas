# bacensgs-gas

## ctrl+s :v:

**BacenSgs** is a JavaScript library for Google Apps Script that facilitates interaction with the API of the Central Bank of Brazil's (BCB) Time Series Management System (SGS). With this library, you can easily retrieve historical data on various economic and financial variables made available by the BCB.

### Installation

To use BacenSgs in your Google Apps Script, follow these steps:

1. Open the Google Apps Script script where you want to use the library.
2. Go to **Library > Add libraries**.
3. Paste the project ID:

```plaintext
1pmDEF2HnD0TbBvI9fsoZcMUVGp8sVnq9cCsXkt3n06PVDnKmI0O_yGRF
```

### Using the Library

The **BacenSgs** library exposes the `getDataSerie` function to retrieve historical data for a specific series.

The `getDataSerie` function receives two parameters:

* **seriesCode (string):** The identifier code of the desired series. You can find the list of available codes in the [BCB SGS API documentation](https://www3.bcb.gov.br/sgspub/JSP/sgsgeral/sgsAjuda.jsp).
* **params (object - opcional):** Object containing optional query parameters.
    * **periods (number):** Number of recent periods in the series to be retrieved. By entering this parameter, the `startDate` and `endDate` options will be ignored.
    * **startDate (string):** Start date of the series in dd/mm/yyyy format. Must be entered together with `endDate`.
    * **endDate (string):** End date of the series in dd/mm/yyyy format. Must be entered together with `startDate`.

The function returns a JSON object containing the retrieved time series data. 

**Usage example:**

```javascript
// Retrieve the last 4 periods of the series identified by the code “1637”
const data = BacenSgs.getDataSerie('1637', { periods: 4 });

// Recover the series identified by the code “433” between January 1, 2020 and 2021
const data = BacenSgs.getDataSerie('433', { startDate: '01/01/2020', endDate: '01/01/2021' });

Logger.log(data);
```

---

Thank you for considering the **BacenSgs** for your needs. If you have any questions or need further assistance, please don't hesitate to reach out.

<br />
<br />
<div align="center">
  <a href="https://bitbucket.org/rmottalabs/"><img alt="Static Badge" src="https://img.shields.io/badge/-Bitbucket?style=social&logo=bitbucket&logoSize=auto&label=Bitbucket&link=https%3A%2F%2Fbitbucket.org%2Frmottalabs%2Fworkspace%2Foverview%2F"></a>
  <a href="https://gitlab.com/rmottanet"><img alt="Static Badge" src="https://img.shields.io/badge/-Gitlab?style=social&logo=gitlab&logoSize=auto&label=Gitlab&link=https%3A%2F%2Fgitlab.com%2Frmottanet"></a>
  <a href="https://github.com/rmottanet"><img alt="Static Badge" src="https://img.shields.io/badge/-Github?style=social&logo=github&logoSize=auto&label=Github&link=https%3A%2F%2Fgithub.com%2Frmottanet"></a>
  <a href="https://hub.docker.com/"><img alt="Static Badge" src="https://img.shields.io/badge/-DockerHub?style=social&logo=docker&logoSize=auto&label=DockerHub&link=https%3A%2F%2Fhub.docker.com%2Fu%2Frmottanet"></a>
</div>
