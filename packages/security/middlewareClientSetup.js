import Fingerprint2 from 'fingerprintjs2';
import Storage from '@qasir/storage-local';
import Crypto from '@qasir/security/crypto';
import Variables from '@qasir/security/variables';
import Repository from '@qasir/auth/repository';

export default ({ dispatch }) => next => action => {
  const crypto = new Crypto();
  const storage = new Storage();

  // handle for get device id on browser using
  // fingerprint javascript
  new Fingerprint2().get(function(result) {
    const chiperText = crypto.encrypt(result);
    storage.setData(Variables.STORAGE_DEVICE_ID, chiperText);
    const repository = new Repository();
    repository.serviceGenerateClientSecret(flag => {
      return next(action);
    });
  });
};
