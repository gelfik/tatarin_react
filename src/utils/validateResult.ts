import { Test } from "../models/test";

export const validateResult = (
  activeTestItem: Test,
  value: string
): boolean => {
  if (activeTestItem?.is_selected) {
    let search_status: boolean = false;
    for (let item of activeTestItem?.answer_list) {
      if (item?.is_text && item?.answer === value && item?.validStatus) {
        search_status = true;
      }
      if (item?.is_photo && item?.answerPhoto === value && item?.validStatus) {
        search_status = true;
      }
    }
    return search_status;
  }
  if (activeTestItem?.answer) {
    const distance = require("jaro-winkler");
    let result_diff: number = distance(
      activeTestItem?.answer.toLowerCase(),
      value.toLowerCase()
    );
    return result_diff >= 0.5;
  }
};
