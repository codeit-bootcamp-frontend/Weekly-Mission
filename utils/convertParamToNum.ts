const convertParamToNum = (param: string | string[] | undefined) => {
  if (!param) return 0;
  const strParam = Array.isArray(param) ? param[0] : param;
  const numParam = Number(strParam);
  return Number.isNaN(numParam) ? null : numParam;
};

export default convertParamToNum;
