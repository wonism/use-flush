import { useState, useEffect, useMemo } from 'react';

const useFlush = (value: any, interval: number = 1000): any => {
  const [flushedAt, setFlushedAt] = useState<number>(-1);
  const [flushedValue, setFlushedValue] = useState<any[]>([]);

  const store = useMemo((): { value: any[]; now?: number; pid?: number } => ({ value: [] }), [flushedAt]);

  useEffect(() => {
    store.value.push(value);

    const now: number = Date.now();

    if (store.now === undefined) {
      store.now = now;
    }

    if (store.pid !== undefined) {
      return;
    }

    store.pid = window.setTimeout(() => {
      setFlushedValue(store.value);
      setFlushedAt(now);
    }, interval - (now - store.now));
  }, [value]);

  useEffect(() => {
    if (flushedAt === -1) {
      return;
    }

    setFlushedAt(-1);
  }, [flushedAt]);

  return flushedValue;
};

export { useFlush, useFlush as default };
