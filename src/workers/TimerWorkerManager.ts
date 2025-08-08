let instance: TimeWorkerManager | null = null;

export class TimeWorkerManager {
  private worker: Worker;

  private constructor() {
    this.worker = new Worker(new URL('./timeWorker.js', import.meta.url));
  }

  static getInstance() {
    if (!instance) {
      instance = new TimeWorkerManager();
    }

    return instance;
  }

  postMessage(message: any) {
    this.worker.postMessage(message);
  }

  onmessage(cb: (e: MessageEvent) => void) {
    this.worker.onmessage = cb;
  }

  terminate() {
    this.worker.terminate();
    instance = null;
  }
}
