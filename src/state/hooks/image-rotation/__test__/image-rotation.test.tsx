import { renderHook, act } from '@testing-library/react-hooks';
import useImageRotation from '../image-rotation';

describe('image-rotation', () => {
  test('expect image-rotation to rotate image objects', () => {
    jest.useFakeTimers();

    const testImageObjectArray = [
      {
        description: { title: '-0' },
        image: { alt: '--0', id: '---0', src: '----0' }
      },
      {
        description: { title: '-1' },
        image: { alt: '--1', id: '---1', src: '---1' }
      },
      {
        description: { title: '-2' },
        image: { alt: '--2', id: '---2', src: '----2' }
      },
      {
        description: { title: '-3' },
        image: { alt: '--3', id: '---3', src: '----3' }
      },
      {
        description: { title: '-4' },
        image: { alt: '--4', id: '---4', src: '----4' }
      }
    ];

    const { result } = renderHook(() => useImageRotation(testImageObjectArray));

    expect(result.current[0]).toStrictEqual(testImageObjectArray[0]);

    act(() => {
      jest.advanceTimersByTime(12000);
    });

    expect(result.current[0]).toStrictEqual(testImageObjectArray[1]);

    act(() => {
      jest.advanceTimersByTime(12000);
    });

    expect(result.current[0]).toStrictEqual(testImageObjectArray[2]);

    act(() => {
      jest.advanceTimersByTime(12000);
    });

    expect(result.current[0]).toStrictEqual(testImageObjectArray[3]);

    act(() => {
      jest.advanceTimersByTime(12000);
    });

    expect(result.current[0]).toStrictEqual(testImageObjectArray[4]);

    act(() => {
      jest.advanceTimersByTime(12000);
    });

    expect(result.current[0]).toStrictEqual(testImageObjectArray[0]);
  });
});
