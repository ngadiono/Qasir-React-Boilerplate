class Helpers {
  checkFormat(value) {
    if (typeof value === 'number') {
      let val = (value / 1).toFixed(0).replace(',', '.');
      return 'Rp ' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return value;
  }
  formatelipsis(index) {
    if (index.length > 40) {
      return index.substr(0, 40) + '...';
    }
    return index;
  }
  replaceTagHTMLTotext(index) {
    return index.replace(/(<([^>]+)>)/gi, '');
  }
}

export default Helpers;
