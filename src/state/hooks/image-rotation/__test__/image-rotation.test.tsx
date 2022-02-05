import { renderHook, act } from '@testing-library/react-hooks';
import useImageRotation from '../image-rotation';

describe('image-rotation', () => {
  test('expect image-rotation to rotate image objects', () => {
    jest.useFakeTimers();

    const testImageObjectArray = [
      {
        name: '-0',
        id: '--0',
        image: '---0'
      },
      {
        name: '-1',
        id: '--1',
        image: '--1'
      },
      {
        name: '-2',
        id: '--2',
        image: '---2'
      },
      {
        name: '-3',
        id: '--3',
        image: '---3'
      },
      {
        name: '-4',
        id: '--4',
        image: '---4'
      }
    ];

    const { result } = renderHook(() => useImageRotation(testImageObjectArray));

    expect(result.current[0]).toStrictEqual(testImageObjectArray[0]);

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(result.current[0]).toStrictEqual(testImageObjectArray[1]);

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(result.current[0]).toStrictEqual(testImageObjectArray[2]);

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(result.current[0]).toStrictEqual(testImageObjectArray[3]);

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(result.current[0]).toStrictEqual(testImageObjectArray[4]);

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(result.current[0]).toStrictEqual(testImageObjectArray[0]);
  });
});
