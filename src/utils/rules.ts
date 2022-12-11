import type { Dayjs } from 'dayjs';

export const rules = {
  required: (message: string = 'Обязательное поле') => ({  
    required: true,
    message
  }),
  isDateAfter: (message: string) => ({
    validator(_: any, value: Dayjs) {
      if (value) {   
        const date: string = new Date().toLocaleDateString();
                     
        if (value.toDate().toLocaleDateString() < date) {
          return Promise.reject(new Error(message));
        }
        return Promise.resolve();
      } else {
        return Promise.reject(new Error('Обязательное поле'));
      }
    }
  })
}
