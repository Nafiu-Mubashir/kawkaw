export const calculateTimeRemaining = ({date}: {date: string}) => {

  const totalSeconds = (Date.parse(date) - new Date().getTime()) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);
  

  return { days, hours, minutes, seconds };
};

//  type ArrayType<T> = {
//    [number: number]: T;
//    length: number;
//  };

//  type CourseKey<T> = keyof ArrayType<T>;

//  type CourseObject<T, K extends CourseKey<T>> = {
//    [k in K]: string;
//  };

//  export function reducer<T, K extends CourseKey<T>>(
//    array: ArrayType<T>,
//    key: K
//  ): Array<CourseObject<T, K> & { count: number }> {
//    return Array.from(array).reduce((acc, curr) => {
//      const doc = curr[key] as unknown;

//      const exist = acc.find((item) => item[key] === doc);

//      if (exist) {
//        exist.count += 1;
//      } else {
//        acc.push({ count: 1, [key]: doc } as CourseObject<T, K> & {
//          count: number;
//        });
//      }

//      return acc;
//    }, [] as Array<CourseObject<T, K> & { count: number }>);
//  }




 