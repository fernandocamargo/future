import { defineMessages } from 'react-intl';

class Definition {
  constructor(message) {
    this.message = defineMessages(message);
  }

  get() {
    return this.message;
  }
}

export default Definition;
