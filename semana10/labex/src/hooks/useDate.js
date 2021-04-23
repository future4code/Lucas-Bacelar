const useDate = () => {
    const date = new Date()
    const formatedDate = date.toLocaleDateString('en-CA');

   return formatedDate;
}

export default useDate