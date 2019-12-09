export const authCheck = (isSignedIn, history) => {
  if (!isSignedIn) {
    history.push("/login");
  }
};

export const getSearchParams = () => {
  let search = this.props.location.search;
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
