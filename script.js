function truncateString(str, length) {
  if (str.length > length) {
    let newStr = str.slice(0, length);
    newStr += "...";
    return newStr;
  } else {
    return str;
  }
}
