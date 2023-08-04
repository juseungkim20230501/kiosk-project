const { Option } = require('../models');

class OptionRepository {
  createOption = async (extra_price, shot_price, hot) => {
    const createOptionData = await Option.create({
      extra_price,
      shot_price,
      hot,
    });

    return createOptionData;
  };

  findOption = async () => {
    const findOptionData = await Option.findAll();

    return findOptionData;
  };
}

module.exports = OptionRepository;
