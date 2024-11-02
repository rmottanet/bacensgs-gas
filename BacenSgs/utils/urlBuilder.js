const baseUrl = 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.{{code}}/dados';


/**
 * Builds a URL to retrieve data from a BCB time series.
 * 
 * @private
 * @param {string} code - The code of the time series.
 * @param {string} startDate - The start date in dd/mm/yyyy format.
 * @param {string} endDate - The end date in dd/mm/yyyy format.
 * @returns {string} The complete URL.
 */
function _buildUrl(code, startDate, endDate) {
 
  let url = baseUrl.replace('{{code}}', code);

  if (startDate) {
    url += `?formato=json&dataInicial=${startDate}`;
  }
  if (endDate) {
    url += (startDate ? '&' : '?') + `dataFinal=${endDate}`;
  }

  return url;

}


/**
 * Builds a URL to retrieve the last periods of a BCB time series.
 * 
 * @private
 * @param {string} code - The code of the time series.
 * @param {number} periods - The number of periods.
 * @returns {string} The complete URL.
 */
function _buildUrlForLastPeriods(code, periods) {

  let url = baseUrl.replace('{{code}}', code) + `/ultimos/${periods}?formato=json`;

  return url;

}
