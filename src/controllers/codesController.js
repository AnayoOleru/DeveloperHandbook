import codesData from '../Data/codesData';

const codesCtr = {
/**
   * @staticmethod
   * @param {object} req - Request Object
   * @param {object} res - Response Object
   * @returns {array} - Returns all: Array of objects
   */
  allCodes(req, res) {
    // console.log(codesData[0].id);
    return res.status(200).json(codesData);
  },
};

export default codesCtr;
