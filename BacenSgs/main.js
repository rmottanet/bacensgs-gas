/**
 * Fetches time series data from the BCB (Banco Central do Brasil) SGS API.
 *
 * @param {string} seriesCode - The code of the time series to be retrieved.
 * @param {Object} params - Optional parameters for the query.
 *   @param {number} params.periods - Number of periods to be returned.
 *   @param {string} params.startDate - Start date of the series in dd/mm/yyyy format.
 *   @param {string} params.endDate - End date of the series in dd/mm/yyyy format.
 * @returns {Object} A JSON object containing the time series data.
 * @throws {Error} Throws an error if there's an issue with the query or data retrieval.
 *
 * @example
 * const data = getDataSerie('1637', { periods: 4 });
 * or
 * const data = getDataSerie('433', { startDate: '01/01/2020', endDate: '01/01/2021' });
 */
function getDataSerie(seriesCode, params = {}) {
  // Default values
  const { periods, startDate, endDate } = params;

  // Validation
  if (periods && (startDate || endDate) != null) {
    throw new Error('Informe periods ou startDate e endDate, não ambos.');
  }

  // Build endpoint
  if (params.periods != null) {
    var endpoint = _buildUrlForLastPeriods(seriesCode, params.periods);
  } else {
    var endpoint = _buildUrl(seriesCode, params.startDate, params.endDate);
  }

  // Get BCB SGS data
  try {

    var response = UrlFetchApp.fetch(endpoint);
    var data = JSON.parse(response.getContentText());
    return data;

  } catch (error) {
    Logger.log(error);
    throw new Error('Erro ao obter dados da série: ' + error.message);
  }
}