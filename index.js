function newCar(carfeatures) {
  /* kodlar buraya */
  const newestCar = { ...carfeatures };

  const brandandmodel = newestCar.model.split(' ');
  let otv, mtv, isDomestic;
  if (newestCar.fiyat > 1450000) {
    otv = 40;
  } else {
    otv = 10;
  }
  if (newestCar.yas < 10) {
    mtv = 1773;
  } else {
    mtv = 520;
  }
  if (brandandmodel[0] === 'TOGG') {
    isDomestic = true;
  } else {
    isDomestic = false;
  }
  delete newestCar.yas;

  const secondCar = {
    ...newestCar,
    marka: brandandmodel[0],
    model: brandandmodel[1],
    otv: otv,
    mtv: mtv,
    isDomestic: isDomestic,
  };

  return secondCar;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = newCar;
