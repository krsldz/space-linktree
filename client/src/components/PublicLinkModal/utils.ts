import { RefObject, useEffect } from 'react';

type Handler = (event: MouseEvent | TouchEvent) => unknown;

/**
 * A custom hook to close a modal window by clicking outside it
 * @param {RefObject<HTMLElement> | RefObject<HTMLElement>[]} ref - element ref to catch the click
 * @param {Handler} handler - function to be called after click catch
 * @param {boolean} disabled - flag to disable click catch
 * @returns {void}
 */
export const useOutsideClick = (
  ref: RefObject<HTMLElement> | RefObject<HTMLElement>[],
  handler: Handler,
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
