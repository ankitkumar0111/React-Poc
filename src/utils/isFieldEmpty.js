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