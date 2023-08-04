const OptionService = require('../services/option.service');

class OptionController {
  optionService = new OptionService();

  createOption = async (req, res) => {
    try {
      const { extra_price, shot_price, hot } = req.body;

      const createOptionData = await this.optionService.createOption(
        extra_price,
        shot_price,
        hot
      );

      return res.status(201).json({ data: createOptionData });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ errorMessage: '옵션 추가에 실패하였습니다.' });
    }
  };
}

module.exports = OptionController;
