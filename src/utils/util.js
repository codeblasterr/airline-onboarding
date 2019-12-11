export const authCheck = (isSignedIn, history) => {
  if (!isSignedIn) {
    history.push("/login");
  }
};

export const getSearchParams = searchParam => {
  let search = searchParam || window.location.search;
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
