import setupsData from '../Data/setupsData';
import setupBabel from '../Data/BabelSetup';

const setupsCtr = {
/**
   * @staticmethod
   * @param {object} req - Request Object
   * @param {object} res - Response Object
   * @returns {array} - Returns all: Array of objects
   */
  allSetup(req, res) {
    return res.status(200).json(setupsData);
  },
  /**
   * @staticmethod
   * @param {object} req - Request Object
   * @param {object} res - Response Object
   * @returns {array} - Returns all: Array of objects
   */
  allBabel(req, res) {
    return res.status(200).json(setupBabel);
  },
};

export default setupsCtr;
