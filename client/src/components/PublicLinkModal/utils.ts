import { RefObject, useEffect } from 'react';

export const useOutsideClick = (
  ref: RefObject<HTMLElement> | RefObject<HTMLElement>[],
  handler: (event: MouseEvent | TouchEvent) => unknown,
  disabled: boolean
): void => {
  const refContains = (currentRef: RefObject<HTMLElement>, target: EventTarget | null) =>
    !currentRef.current || currentRef.current.contains(target as Node);

  useEffect(() => {
    let callback;
    const listener = (event: MouseEvent | TouchEvent) => {
      const isContains = Array.isArray(ref)
        ? !!ref.find((refItem) => refContains(refItem, event.target))
        : refContains(ref, event.target);

      if (!isContains) handler(event);
    };

    if (!disabled) {
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      callback = () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    }

    return callback;
  }, [ref, handler, disabled]);
};
