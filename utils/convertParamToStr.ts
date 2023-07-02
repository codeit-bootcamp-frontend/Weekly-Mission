const convertParamToStr = (param: string | string[] | undefined) => {
  return Array.isArray(param) ? param[0] : param;
};

export default convertParamToStr;
