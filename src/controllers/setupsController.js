import setupsData from '../Data/setupsData';

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
};

export default setupsCtr;
