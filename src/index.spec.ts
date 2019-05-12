import { useState } from 'react';
import { renderHook, act } from 'react-hooks-testing-library';
import { useFlush } from '.';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

test('should flush changes of state', async () => {
  const hookRenderer = () => {
    const [count, setCount] = useState(0);
    const flushedCount = useFlush(count, 100);

    return { flushedCount, setCount };
  };

  const hook = renderHook(hookRenderer);

  await sleep(30);
  act(() => { hook.result.current.setCount(10); });
  expect(hook.result.current.flushedCount).toEqual([]);

  await sleep(40);
  act(() => { hook.result.current.setCount(42); });
  expect(hook.result.current.flushedCount).toEqual([]);

  await sleep(50);
  expect(hook.result.current.flushedCount).toEqual([0, 10, 42]);
});
