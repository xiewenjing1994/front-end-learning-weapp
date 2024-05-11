if (!window.AbortController) {
  class AbortController {
    constructor() {
      this.signal = new AbortSignal();
    }

    abort() {
      this.signal.abort();
    }
  }

  window.AbortController = AbortController;
}

class AbortSignal {
  constructor() {
    this.aborted = false;
    this.onabort = null;
  }

  get aborted() {
    return this._aborted;
  }

  set aborted(value) {
    if (value) {
      this.onabort && this.onabort();
    }
  }
}

window.AbortSignal = AbortSignal;
