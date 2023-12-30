function getProxyMethods(options = {}) {
  if (options.enableSnakeTeleport) {
    return {
      get(array, index) {
        const parsedIndex = Number(index);
        if (!isNaN(parsedIndex) && parsedIndex % 1 === 0) {
          if (parsedIndex >= 0) {
            return array[parsedIndex % array.length];
          } else {
            // TODO: Benchmark modulo approach against the while loop
            return array[
              (array.length - (Math.abs(parsedIndex) % array.length)) %
                array.length
            ];
            // while (parsedIndex < 0) parsedIndex += array.length;
            // return array[parsedIndex];
          }
        } else {
          // index is not an integer, godspeed
          return array[index];
        }
      },
    };
  } else {
    return {
      get(array, index) {
        const parsedIndex = Number(index);
        if (isNaN(parsedIndex) || parsedIndex % 1 !== 0) {
          return array[index];
        } else {
          return array.at(parsedIndex);
        }
      },
    };
  }
}

function getArrayWithNegativeIndexes(array, options) {
  const arrayWithProxy = new Proxy(array, getProxyMethods(options));
  return arrayWithProxy;
}

exports.getArrayWithNegativeIndexes = getArrayWithNegativeIndexes;
