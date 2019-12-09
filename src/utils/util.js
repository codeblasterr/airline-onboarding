export const authCheck = (isSignedIn, history) => {
  if (!isSignedIn) {
    history.push("/login");
  }
};

export const getSearchParams = (param) => {
  let search = param;
  let searchObj = search
    ? JSON.parse(
        '{"' +
          decodeURI(search)
            .replace("?", "")
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"') +
          '"}'
      )
    : {};
  return searchObj;
};
