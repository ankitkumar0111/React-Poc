
// export const isFieldEmpty = (value, errorMessage = 'This field is required.') => {
//     return {
//         // isValid: value.trim() !== '',
//         isValid: typeof value === 'string' && value.trim() !== '',

//         // errorMessage: value.trim() !== '' ? '' : errorMessage
//         errorMessage: typeof value === 'string' && value.trim() !== '' ? '' : errorMessage,
// }
// }
// export const isFieldEmpty = (value, validationType, errorMessage = 'This field is required.') => {
//     switch (validationType) {
//       case 'notEmpty':
//         return {
//           isValid: typeof value === 'string' && value.trim() !== '',
//           errorMessage: typeof value === 'string' && value.trim() !== '' ? '' : errorMessage,
//         };
//       case 'tenDigits':
//         return {
//           isValid: /^\d{10}$/.test(value),
//           errorMessage: /^\d{10}$/.test(value) ? '' : 'Phone number should be 10 digits.',
//         };
//       default:
//         // Default case: no additional validation
//         return {
//           isValid: true,
//           errorMessage: '',
//         };
//     }
//   };

export const isFieldEmpty = (value, validationTypes, errorMessage = 'This field is required.') => {
    const validationFunctions = {
        notEmpty: () => typeof value === 'string' && value.trim() !== '',
        tenDigits: () => /^\d{10}$/.test(value),
        validEmail: () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
       
      };
  
    const isValid = validationTypes.every((type) => validationFunctions[type]());
  
    return {
      isValid,
      errorMessage: isValid ? '' : errorMessage,
    };
  };