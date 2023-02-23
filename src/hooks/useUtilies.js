const useUtilies = () => {

  function isObjectEmpty(obj) {
    return !!Object.keys(obj).length;
  }

  return {
    isObjectEmpty,
  }

}

export default useUtilies;