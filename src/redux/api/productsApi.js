const fetchInterestData = async data => {
  const response = await fetch(`https://ftl-frontend-test.herokuapp.com/interest?amount=${data.loanAmount}&numMonths=${data.loanDuration}`);
  const res = await response.json();
  if (!res) {
    throw new Error(res.message);
  }
  return res;
};

export { fetchInterestData };
