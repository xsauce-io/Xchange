export const parsePathname = (pathname) => {
  // array of parseName items

  const path = pathname.split("/");
  if (path != null && path.length > 0) {
    return path;
  }
  return null;
};
